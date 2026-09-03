/* ==========================================================================
   Smart Test Reviewer System - Application Logic
   BSIT MELEC 9: System Need Analysis
   Comprehensive 100-Item Examination & 4 Modular Study Reviewers
   ========================================================================== */

(function () {
  'use strict';

  // State Management
  const state = {
    activeTab: 'study', // 'study', 'exam', 'results'
    studyModuleFilter: 'all', // 'all', 'module-1-sad', 'module-2-sdlc', 'module-3-planning', 'module-4-requirements'
    examModuleFilter: 'all', // 'all', 'module-1-sad', 'module-2-sdlc', 'module-3-planning', 'module-4-requirements'
    examTypeFilter: 'all', // 'all', 'mcq', 'identification', 'tf', 'scenario'
    shuffleEnabled: false,
    
    // Exam state
    examQuestions: [],
    userAnswers: {}, // questionId -> selectedOption/text
    examStartTime: null,
    examEndTime: null,
    
    // Results state
    lastResults: null,
    reviewFilter: 'all', // 'all', 'incorrect', 'correct'
    
    // Study state
    studySearchQuery: '',
    studyFilter: 'all', // 'all', 'high-yield'
    
    // Theme
    theme: localStorage.getItem('reviewer_theme') || 'dark'
  };

  // DOM Elements
  const DOM = {
    // Theme
    themeBtn: document.getElementById('theme-toggle-btn'),
    
    // Header & Hero
    moduleToggleGroup: document.getElementById('module-toggle-group'),
    heroBadge: document.getElementById('hero-badge'),
    heroTitle: document.getElementById('hero-title'),
    heroSubtitle: document.getElementById('hero-subtitle'),
    statStudyCount: document.getElementById('stat-study-count'),
    statExamCount: document.getElementById('stat-exam-count'),
    statBestScore: document.getElementById('stat-best-score'),
    
    // Tabs
    tabStudy: document.getElementById('tab-study'),
    tabExam: document.getElementById('tab-exam'),
    tabResults: document.getElementById('tab-results'),
    viewStudy: document.getElementById('view-study'),
    viewExam: document.getElementById('view-exam'),
    viewResults: document.getElementById('view-results'),
    
    // Study View
    reviewerModuleNav: document.getElementById('reviewer-module-nav'),
    studySearch: document.getElementById('study-search'),
    studyFilterChips: document.querySelectorAll('[data-study-filter]'),
    collapseStudyBtn: document.getElementById('collapse-study-btn'),
    studySectionsList: document.getElementById('study-sections-list'),
    
    // Exam View
    examModuleSelect: document.getElementById('exam-module-select'),
    examFilterSelect: document.getElementById('exam-filter-select'),
    shuffleToggle: document.getElementById('shuffle-toggle'),
    shuffleLabel: document.getElementById('shuffle-label'),
    startResetExamBtn: document.getElementById('start-reset-exam-btn'),
    
    formsHeaderCard: document.getElementById('forms-header-card'),
    formsBannerStrip: document.getElementById('forms-banner-strip'),
    formDocTitle: document.getElementById('form-doc-title'),
    formDocDescription: document.getElementById('form-doc-description'),
    formProgressText: document.getElementById('form-progress-text'),
    formProgressFill: document.getElementById('form-progress-fill'),
    
    googleExamForm: document.getElementById('google-exam-form'),
    unansweredWarning: document.getElementById('unanswered-warning'),
    unansweredCountText: document.getElementById('unanswered-count-text'),
    jumpUnansweredBtn: document.getElementById('jump-unanswered-btn'),
    clearFormBtn: document.getElementById('clear-form-btn'),
    submitExamBtn: document.getElementById('submit-exam-btn'),
    
    // Results View
    scoreCircleProgress: document.getElementById('score-circle-progress'),
    scorePercentageText: document.getElementById('score-percentage-text'),
    scoreFractionText: document.getElementById('score-fraction-text'),
    scoreBadgeLabel: document.getElementById('score-badge-label'),
    
    resCorrectNum: document.getElementById('res-correct-num'),
    resIncorrectNum: document.getElementById('res-incorrect-num'),
    resSkippedNum: document.getElementById('res-skipped-num'),
    resTimeText: document.getElementById('res-time-text'),
    moduleBreakdownGrid: document.getElementById('module-breakdown-grid'),
    
    retakeTestBtn: document.getElementById('retake-test-btn'),
    studyReviewBtn: document.getElementById('study-review-btn'),
    
    reviewFilterChips: document.querySelectorAll('[data-review-filter]'),
    reviewQuestionsList: document.getElementById('review-questions-list'),
    
    // Modal
    historyModalBtn: document.getElementById('history-modal-btn'),
    historyModal: document.getElementById('history-modal'),
    closeModalBtn: document.getElementById('close-modal-btn'),
    clearHistoryBtn: document.getElementById('clear-history-btn'),
    historyListContainer: document.getElementById('history-list-container')
  };

  // Initialize App
  function init() {
    try {
      applyTheme(state.theme);
      bindEvents();
      ensureDataReady(() => {
        renderStudySections();
        resetExam();
        updateBestScoreStat();
      });
    } catch (err) {
      console.error("Initialization error:", err);
    }
  }

  function ensureDataReady(callback) {
    if (window.REVIEWER_DATA && window.REVIEWER_DATA.modules && window.REVIEWER_DATA.modules.length > 0) {
      callback();
      return;
    }
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      if (window.REVIEWER_DATA && window.REVIEWER_DATA.modules && window.REVIEWER_DATA.modules.length > 0) {
        clearInterval(interval);
        callback();
      } else if (attempts > 50) {
        clearInterval(interval);
        console.error("REVIEWER_DATA failed to load.");
      }
    }, 100);
  }

  // Theme Toggle
  function applyTheme(theme) {
    state.theme = theme;
    localStorage.setItem('reviewer_theme', theme);
    if (theme === 'light') {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      DOM.themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      DOM.themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
  }

  function updateBestScoreStat() {
    const history = getScoreHistory(state.examModuleFilter);
    if (history.length > 0) {
      const best = Math.max(...history.map(h => h.percentage));
      DOM.statBestScore.textContent = `${best}%`;
    } else {
      DOM.statBestScore.textContent = '--%';
    }
  }

  // Switch Active Tab
  function switchTab(tabName) {
    if (tabName === 'results' && DOM.tabResults.disabled) return;
    
    state.activeTab = tabName;
    
    [DOM.tabStudy, DOM.tabExam, DOM.tabResults].forEach(t => t.classList.remove('active'));
    [DOM.viewStudy, DOM.viewExam, DOM.viewResults].forEach(v => v.classList.remove('active'));

    if (tabName === 'study') {
      DOM.tabStudy.classList.add('active');
      DOM.viewStudy.classList.add('active');
    } else if (tabName === 'exam') {
      DOM.tabExam.classList.add('active');
      DOM.viewExam.classList.add('active');
    } else if (tabName === 'results') {
      DOM.tabResults.classList.add('active');
      DOM.viewResults.classList.add('active');
    }
  }

  // ==========================================================================
  // STUDY & REVIEW MATERIAL LOGIC
  // ==========================================================================

  function selectStudyModule(moduleId) {
    state.studyModuleFilter = moduleId;

    // Update study chips active state
    document.querySelectorAll('.study-module-chip').forEach(chip => {
      chip.classList.toggle('active', chip.dataset.studyMod === moduleId);
    });

    // Update header buttons active state
    document.querySelectorAll('.module-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.module === moduleId);
    });

    renderStudySections();
  }

  function renderStudySections() {
    if (!window.REVIEWER_DATA || !window.REVIEWER_DATA.modules) return;
    
    let targetModules = [];
    if (state.studyModuleFilter === 'all') {
      targetModules = window.REVIEWER_DATA.modules;
    } else {
      const found = window.REVIEWER_DATA.modules.find(m => m.id === state.studyModuleFilter);
      targetModules = found ? [found] : window.REVIEWER_DATA.modules;
    }

    DOM.studySectionsList.innerHTML = '';
    const query = state.studySearchQuery.toLowerCase().trim();

    targetModules.forEach(mod => {
      let sections = mod.study || [];

      if (state.studyFilter === 'high-yield') {
        sections = sections.filter(s => s.id.includes('high-yield'));
      }

      // If viewing multiple modules, show module section banner
      if (state.studyModuleFilter === 'all' && sections.length > 0) {
        const modBanner = document.createElement('div');
        modBanner.className = 'study-module-header-banner';
        modBanner.style.cssText = `
          margin: 32px 0 16px 0;
          padding: 14px 20px;
          background: rgba(255,255,255,0.03);
          border-left: 4px solid ${mod.themeColor || 'var(--module-primary)'};
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          gap: 14px;
        `;
        modBanner.innerHTML = `
          <i class="fa-solid ${mod.icon || 'fa-book'}" style="color: ${mod.themeColor || 'var(--module-primary)'}; font-size: 1.35rem;"></i>
          <div>
            <h3 style="margin: 0; font-size: 1.15rem; color: var(--text-main); font-weight: 700;">${mod.title}</h3>
            <p style="margin: 3px 0 0 0; font-size: 0.82rem; color: var(--text-muted);">${mod.subtitle}</p>
          </div>
        `;
        DOM.studySectionsList.appendChild(modBanner);
      }

      sections.forEach(sec => {
        const titleMatch = sec.title.toLowerCase().includes(query);
        const textMatch = JSON.stringify(sec.sections).toLowerCase().includes(query);

        if (query && !titleMatch && !textMatch) return;

        const card = document.createElement('div');
        card.className = 'study-card';
        
        let subsectionsHTML = '';

        sec.sections.forEach(sub => {
          let contentHTML = '';

          if (sub.content) {
            contentHTML += formatMarkdownText(sub.content);
          }

          if (sub.table) {
            contentHTML += buildTableHTML(sub.table);
          }

          subsectionsHTML += `
            <div class="subsection">
              <h4>${sub.subtitle}</h4>
              ${contentHTML}
            </div>
          `;
        });

        card.innerHTML = `
          <div class="study-card-header">
            <div class="study-card-title">
              <i class="fa-solid ${sec.icon || 'fa-book'}"></i>
              <h3>${sec.title}</h3>
            </div>
            <i class="fa-solid fa-chevron-down toggle-icon"></i>
          </div>
          <div class="study-card-body">
            ${subsectionsHTML}
          </div>
        `;

        card.querySelector('.study-card-header').addEventListener('click', () => {
          card.classList.toggle('collapsed');
        });

        DOM.studySectionsList.appendChild(card);
      });
    });

    if (DOM.studySectionsList.children.length === 0) {
      DOM.studySectionsList.innerHTML = `
        <div class="study-card" style="padding: 36px; text-align: center; color: var(--text-muted);">
          <i class="fa-solid fa-folder-open" style="font-size: 2.2rem; margin-bottom: 12px; display: block;"></i>
          <p>No study notes matching your query.</p>
        </div>
      `;
    }
  }

  function formatMarkdownText(text) {
    if (!text) return '';
    let html = text.trim();

    // Bold formatting **text**
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Italic formatting *text*
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Bullet points conversion
    const lines = html.split('\n');
    let inList = false;
    let listHTML = '';

    lines.forEach(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith('- ') || trimmed.startsWith('• ')) {
        if (!inList) {
          inList = true;
          listHTML += '<ul>';
        }
        const itemContent = trimmed.replace(/^[-•]\s*/, '');
        listHTML += `<li>${itemContent}</li>`;
      } else {
        if (inList) {
          inList = false;
          listHTML += '</ul>';
        }
        if (trimmed.startsWith('#### ')) {
          listHTML += `<h5 style="color: var(--text-main); font-size: 0.95rem; margin: 14px 0 6px 0;">${trimmed.replace('#### ', '')}</h5>`;
        } else if (trimmed) {
          listHTML += `<p style="margin-bottom: 8px;">${trimmed}</p>`;
        }
      }
    });

    if (inList) listHTML += '</ul>';

    return listHTML;
  }

  function buildTableHTML(tableData) {
    if (!tableData || !tableData.headers) return '';
    
    let ths = tableData.headers.map(h => `<th>${h}</th>`).join('');
    let trs = tableData.rows.map(row => {
      let tds = row.map(cell => `<td>${formatMarkdownText(cell)}</td>`).join('');
      return `<tr>${tds}</tr>`;
    }).join('');

    return `
      <div class="study-table-wrapper">
        <table class="study-table">
          <thead><tr>${ths}</tr></thead>
          <tbody>${trs}</tbody>
        </table>
      </div>
    `;
  }

  // ==========================================================================
  // GOOGLE FORMS COMPREHENSIVE EXAM LOGIC
  // ==========================================================================

  function resetExam() {
    if (!window.REVIEWER_DATA) return;

    let qList = [];

    if (state.examModuleFilter === 'all') {
      qList = [...(window.REVIEWER_DATA.comprehensiveQuestions || [])];
    } else {
      const mod = window.REVIEWER_DATA.modules.find(m => m.id === state.examModuleFilter);
      qList = mod ? [...mod.questions] : [...(window.REVIEWER_DATA.comprehensiveQuestions || [])];
    }

    // Filter questions by type if requested
    if (state.examTypeFilter !== 'all') {
      qList = qList.filter(q => q.type === state.examTypeFilter);
    }

    // Shuffle if requested
    if (state.shuffleEnabled) {
      qList = shuffleArray(qList);
    }

    state.examQuestions = qList;
    state.userAnswers = {};
    state.examStartTime = null;

    let titleText = 'BSIT MELEC 9: System Need Analysis — Comprehensive Examination';
    if (state.examModuleFilter !== 'all') {
      const selectedMod = window.REVIEWER_DATA.modules.find(m => m.id === state.examModuleFilter);
      if (selectedMod) {
        titleText = `${selectedMod.title} Practice Examination`;
      }
    }

    DOM.formDocTitle.textContent = titleText;
    DOM.formDocDescription.textContent = `Google Forms style interactive exam containing ${state.examQuestions.length} questions across BSIT MELEC 9. Complete each question and click Submit Test at the end.`;

    updateFormProgress();
    renderGoogleFormsQuestions();
  }

  function renderGoogleFormsQuestions() {
    DOM.googleExamForm.innerHTML = '';

    if (state.examQuestions.length === 0) {
      DOM.googleExamForm.innerHTML = `
        <div class="form-question-card" style="text-align: center; color: var(--text-muted); padding: 32px;">
          <p>No questions available for the selected scope/filter.</p>
        </div>
      `;
      return;
    }

    state.examQuestions.forEach((q, idx) => {
      const qCard = document.createElement('div');
      qCard.className = 'form-question-card';
      qCard.id = `q-card-${q.id}`;
      qCard.dataset.questionId = q.id;

      let categoryBadge = q.category || (
        q.type === 'mcq' ? 'Multiple Choice' :
        q.type === 'identification' ? 'Identification' :
        q.type === 'tf' ? 'True / False' : 'Scenario Analysis'
      );

      let optionsHTML = '';
      const hasOptions = (q.options && q.options.length > 0) || q.type === 'mcq' || q.type === 'tf' || q.type === 'scenario';

      if (hasOptions) {
        const opts = q.options || (q.type === 'tf' ? ['True', 'False'] : []);
        
        optionsHTML = `
          <div class="options-group">
            ${opts.map((opt, oIdx) => {
              const optId = `${q.id}-opt-${oIdx}`;
              const isChecked = state.userAnswers[q.id] === opt ? 'checked' : '';
              const isSelectedClass = isChecked ? 'selected' : '';

              return `
                <label class="form-option-item ${isSelectedClass}" for="${optId}">
                  <input type="radio" name="${q.id}" id="${optId}" value="${opt}" ${isChecked}>
                  <span class="option-text">${opt}</span>
                </label>
              `;
            }).join('')}
          </div>
        `;
      } else {
        const val = state.userAnswers[q.id] || '';
        optionsHTML = `
          <div class="form-text-input-group">
            <input type="text" 
                   class="google-text-input" 
                   name="${q.id}" 
                   placeholder="Type your answer here..." 
                   value="${val}"
                   autocomplete="off">
          </div>
        `;
      }

      qCard.innerHTML = `
        <div class="question-header">
          <div class="question-meta">
            <span class="q-number">Question ${idx + 1} of ${state.examQuestions.length}</span>
            <span class="q-module-tag">${q.moduleTitle || 'MELEC 9'}</span>
            <span class="q-category-tag">${categoryBadge}</span>
          </div>
          <div class="q-title">${q.question} <span class="req-star">*</span></div>
        </div>
        ${optionsHTML}
      `;

      // Event listeners for choices / inputs
      if (!hasOptions) {
        const input = qCard.querySelector('input[type="text"]');
        if (input) {
          input.addEventListener('input', (e) => {
            onAnswerInput(q.id, e.target.value);
          });
        }
      } else {
        const radios = qCard.querySelectorAll('input[type="radio"]');
        radios.forEach(radio => {
          radio.addEventListener('change', (e) => {
            qCard.querySelectorAll('.form-option-item').forEach(item => item.classList.remove('selected'));
            radio.closest('.form-option-item').classList.add('selected');
            onAnswerInput(q.id, e.target.value);
          });
        });
      }

      // Active card border focus state
      qCard.addEventListener('click', () => {
        document.querySelectorAll('.form-question-card').forEach(c => c.classList.remove('active'));
        qCard.classList.add('active');
      });

      DOM.googleExamForm.appendChild(qCard);
    });
  }

  function onAnswerInput(questionId, value) {
    if (!state.examStartTime) {
      state.examStartTime = new Date();
    }

    if (value && value.trim() !== '') {
      state.userAnswers[questionId] = value.trim();
    } else {
      delete state.userAnswers[questionId];
    }

    const card = document.getElementById(`q-card-${questionId}`);
    if (card) card.classList.remove('unanswered-alert');

    updateFormProgress();
  }

  function updateFormProgress() {
    const answeredCount = Object.keys(state.userAnswers).length;
    const totalCount = state.examQuestions.length;
    const pct = totalCount > 0 ? Math.round((answeredCount / totalCount) * 100) : 0;

    DOM.formProgressText.textContent = `${answeredCount} of ${totalCount} answered`;
    DOM.formProgressFill.style.width = `${pct}%`;

    const unansweredCount = totalCount - answeredCount;
    if (unansweredCount > 0) {
      DOM.unansweredWarning.style.display = 'flex';
      DOM.unansweredCountText.textContent = `You have ${unansweredCount} unanswered question${unansweredCount > 1 ? 's' : ''}.`;
    } else {
      DOM.unansweredWarning.style.display = 'none';
    }
  }

  function jumpToFirstUnanswered() {
    for (let q of state.examQuestions) {
      if (!state.userAnswers[q.id]) {
        const card = document.getElementById(`q-card-${q.id}`);
        if (card) {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          card.classList.add('unanswered-alert');
          return;
        }
      }
    }
  }

  function submitExam() {
    state.examEndTime = new Date();

    const totalQuestions = state.examQuestions.length;
    let correctCount = 0;
    let incorrectCount = 0;
    let skippedCount = 0;

    const detailedResults = state.examQuestions.map(q => {
      const userAns = state.userAnswers[q.id] || '';
      const isAnswered = userAns.length > 0;
      let isCorrect = false;

      if (isAnswered) {
        isCorrect = evaluateAnswer(q, userAns);
        if (isCorrect) correctCount++;
        else incorrectCount++;
      } else {
        skippedCount++;
      }

      return {
        question: q,
        userAnswer: userAns,
        isAnswered,
        isCorrect
      };
    });

    const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
    const timeSpentSeconds = state.examStartTime ? Math.round((state.examEndTime - state.examStartTime) / 1000) : 0;

    // Calculate Per-Module Scores
    const moduleStats = {};
    if (window.REVIEWER_DATA && window.REVIEWER_DATA.modules) {
      window.REVIEWER_DATA.modules.forEach(m => {
        moduleStats[m.id] = {
          title: m.title.split(':')[0] || m.title,
          fullTitle: m.title,
          total: 0,
          correct: 0,
          percentage: 0
        };
      });
    }

    detailedResults.forEach(item => {
      const mId = item.question.moduleId;
      if (mId && moduleStats[mId]) {
        moduleStats[mId].total++;
        if (item.isCorrect) {
          moduleStats[mId].correct++;
        }
      }
    });

    Object.keys(moduleStats).forEach(key => {
      const st = moduleStats[key];
      st.percentage = st.total > 0 ? Math.round((st.correct / st.total) * 100) : 0;
    });

    state.lastResults = {
      moduleId: state.examModuleFilter,
      moduleTitle: state.examModuleFilter === 'all' ? 'Comprehensive All-Modules Exam' : (window.REVIEWER_DATA.modules.find(m => m.id === state.examModuleFilter)?.title || 'MELEC 9'),
      date: new Date().toISOString(),
      totalQuestions,
      correctCount,
      incorrectCount,
      skippedCount,
      percentage,
      timeSpentSeconds,
      moduleStats,
      details: detailedResults
    };

    saveScoreHistory(state.lastResults);
    updateBestScoreStat();

    // Render Results View & Enable Tab
    DOM.tabResults.disabled = false;
    renderResultsView();
    switchTab('results');
  }

  function evaluateAnswer(q, userAns) {
    if (!userAns) return false;

    const userClean = cleanText(userAns);
    const targetClean = cleanText(q.answer);

    if (userClean === targetClean) return true;

    // Allow key sub-phrase matches (e.g. "A. Control" matches "Control")
    if (targetClean.includes(userClean) && userClean.length >= 3) return true;
    if (userClean.includes(targetClean) && targetClean.length >= 3) return true;

    return false;
  }

  function cleanText(str) {
    if (!str) return '';
    return str.toLowerCase().replace(/[^a-z0-9]/g, '');
  }

  // ==========================================================================
  // RESULTS & EXPLANATIONS REVIEW LOGIC
  // ==========================================================================

  function renderResultsView() {
    const res = state.lastResults;
    if (!res) return;

    // Score Circle Animation
    const strokeDash = 326.7; // 2 * PI * 52
    const offset = strokeDash - (strokeDash * (res.percentage / 100));
    
    DOM.scoreCircleProgress.style.strokeDashoffset = offset;
    DOM.scorePercentageText.textContent = `${res.percentage}%`;
    DOM.scoreFractionText.textContent = `${res.correctCount} / ${res.totalQuestions}`;

    // Pass / Fail badge
    const isPassed = res.percentage >= 70;
    DOM.scoreBadgeLabel.textContent = isPassed ? 'PASSED' : 'NEEDS REVIEW';
    DOM.scoreBadgeLabel.className = `score-badge-label ${isPassed ? 'pass' : 'fail'}`;

    // Stats Grid
    DOM.resCorrectNum.textContent = res.correctCount;
    DOM.resIncorrectNum.textContent = res.incorrectCount;
    DOM.resSkippedNum.textContent = res.skippedCount;
    DOM.resTimeText.textContent = formatTime(res.timeSpentSeconds);

    // Render Per-Module Mastery Breakdown
    if (DOM.moduleBreakdownGrid && res.moduleStats) {
      DOM.moduleBreakdownGrid.innerHTML = '';
      Object.keys(res.moduleStats).forEach(mId => {
        const ms = res.moduleStats[mId];
        if (ms.total === 0) return;
        const card = document.createElement('div');
        card.className = 'module-score-card';
        card.innerHTML = `
          <span class="module-score-name">${ms.title}</span>
          <div class="module-score-val">
            <span>${ms.correct} / ${ms.total}</span>
            <span class="module-score-pct">${ms.percentage}%</span>
          </div>
        `;
        DOM.moduleBreakdownGrid.appendChild(card);
      });
    }

    // Render Review List
    renderReviewQuestions();
  }

  function renderReviewQuestions() {
    const res = state.lastResults;
    if (!res || !res.details) return;

    DOM.reviewQuestionsList.innerHTML = '';

    let items = res.details;
    if (state.reviewFilter === 'correct') {
      items = items.filter(d => d.isCorrect);
    } else if (state.reviewFilter === 'incorrect') {
      items = items.filter(d => !d.isCorrect);
    }

    if (items.length === 0) {
      DOM.reviewQuestionsList.innerHTML = `
        <div class="review-card" style="text-align: center; color: var(--text-muted); padding: 32px;">
          <p>No questions matching the selected filter.</p>
        </div>
      `;
      return;
    }

    items.forEach((d, idx) => {
      const q = d.question;
      const rCard = document.createElement('div');
      
      let statusClass = 'status-skipped';
      let badgeHTML = '<span class="review-badge skipped"><i class="fa-solid fa-circle-minus"></i> Skipped</span>';

      if (d.isAnswered) {
        if (d.isCorrect) {
          statusClass = 'status-correct';
          badgeHTML = '<span class="review-badge correct"><i class="fa-solid fa-circle-check"></i> Correct</span>';
        } else {
          statusClass = 'status-incorrect';
          badgeHTML = '<span class="review-badge incorrect"><i class="fa-solid fa-circle-xmark"></i> Incorrect</span>';
        }
      }

      rCard.className = `review-card ${statusClass}`;

      let userAnsDisplay = d.isAnswered ? d.userAnswer : '(No answer provided)';
      let userAnsClass = d.isCorrect ? 'correct-text' : 'wrong-text';

      rCard.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
          <div class="question-meta">
            <span class="q-number">Question #${idx + 1}</span>
            <span class="q-module-tag">${q.moduleTitle || 'MELEC 9'}</span>
            <span class="q-category-tag">${q.category || q.type}</span>
          </div>
          ${badgeHTML}
        </div>

        <div class="q-title">${q.question}</div>

        <div class="review-answers-box">
          <div class="user-ans-row ${userAnsClass}">
            Your Answer: <strong>${userAnsDisplay}</strong>
          </div>
          <div class="correct-ans-row">
            <i class="fa-solid fa-check"></i> Correct Answer: <strong>${q.answer}</strong>
          </div>
        </div>

        <div class="explanation-box">
          <header><i class="fa-solid fa-lightbulb"></i> Explanation & Key Learning Point:</header>
          <p>${q.explanation || 'Refer to study notes for this section.'}</p>
        </div>
      `;

      DOM.reviewQuestionsList.appendChild(rCard);
    });
  }

  // ==========================================================================
  // SCORE HISTORY & STORAGE
  // ==========================================================================

  function getScoreHistory(scopeId) {
    try {
      const histories = JSON.parse(localStorage.getItem('reviewer_score_history') || '{}');
      return histories[scopeId] || [];
    } catch (e) {
      return [];
    }
  }

  function saveScoreHistory(result) {
    try {
      const histories = JSON.parse(localStorage.getItem('reviewer_score_history') || '{}');
      if (!histories[result.moduleId]) histories[result.moduleId] = [];

      histories[result.moduleId].unshift({
        date: result.date,
        percentage: result.percentage,
        correctCount: result.correctCount,
        totalQuestions: result.totalQuestions,
        timeSpentSeconds: result.timeSpentSeconds
      });

      // Keep last 20 attempts
      histories[result.moduleId] = histories[result.moduleId].slice(0, 20);

      localStorage.setItem('reviewer_score_history', JSON.stringify(histories));
    } catch (e) {
      console.error('Failed to save score history', e);
    }
  }

  function renderHistoryModal() {
    const history = getScoreHistory(state.examModuleFilter);
    DOM.historyListContainer.innerHTML = '';

    if (history.length === 0) {
      DOM.historyListContainer.innerHTML = `
        <div style="text-align: center; color: var(--text-muted); padding: 24px;">
          <i class="fa-solid fa-history" style="font-size: 2rem; margin-bottom: 10px;"></i>
          <p>No score history logged for this exam scope yet. Take a test to record your score!</p>
        </div>
      `;
      return;
    }

    history.forEach(item => {
      const d = new Date(item.date);
      const formattedDate = d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      const el = document.createElement('div');
      el.className = 'history-item';
      el.innerHTML = `
        <div class="history-meta">
          <span class="history-date"><i class="fa-solid fa-calendar"></i> ${formattedDate}</span>
          <span class="history-score">${item.correctCount}/${item.totalQuestions} (${item.percentage}%)</span>
        </div>
        <div class="history-bar-bg">
          <div class="history-bar-fill" style="width: ${item.percentage}%;"></div>
        </div>
      `;
      DOM.historyListContainer.appendChild(el);
    });
  }

  function clearHistory() {
    try {
      const histories = JSON.parse(localStorage.getItem('reviewer_score_history') || '{}');
      delete histories[state.examModuleFilter];
      localStorage.setItem('reviewer_score_history', JSON.stringify(histories));
      renderHistoryModal();
      updateBestScoreStat();
    } catch (e) {
      console.error(e);
    }
  }

  // ==========================================================================
  // EVENT BINDINGS
  // ==========================================================================

  function bindEvents() {
    // Global Event Delegation for all clicks
    document.addEventListener('click', (e) => {
      // 1. Theme toggle
      if (e.target.closest('#theme-toggle-btn')) {
        e.preventDefault();
        applyTheme(state.theme === 'dark' ? 'light' : 'dark');
        return;
      }

      // 2. Navigation Tabs
      const tab = e.target.closest('.nav-tab');
      if (tab) {
        e.preventDefault();
        const tabName = tab.dataset.tab;
        if (tabName) switchTab(tabName);
        return;
      }

      // 3. Header Module Switcher Buttons
      const modBtn = e.target.closest('.module-btn');
      if (modBtn) {
        e.preventDefault();
        const modId = modBtn.getAttribute('data-module') || modBtn.dataset.module;
        if (modId) {
          selectStudyModule(modId);
          switchTab('study');
        }
        return;
      }

      // 4. Modular Reviewer Selector Chips in Study Tab
      const studyChip = e.target.closest('.study-module-chip');
      if (studyChip) {
        e.preventDefault();
        const modId = studyChip.getAttribute('data-study-mod') || studyChip.dataset.studyMod;
        if (modId) {
          selectStudyModule(modId);
        }
        return;
      }

      // 5. Study Collapse Toggle
      if (e.target.closest('#collapse-study-btn')) {
        e.preventDefault();
        const cards = document.querySelectorAll('.study-card');
        const allCollapsed = Array.from(cards).every(c => c.classList.contains('collapsed'));
        cards.forEach(c => c.classList.toggle('collapsed', !allCollapsed));
        return;
      }

      // 6. Study Topic Filter Chips
      const sfc = e.target.closest('[data-study-filter]');
      if (sfc) {
        e.preventDefault();
        document.querySelectorAll('[data-study-filter]').forEach(c => c.classList.remove('active'));
        sfc.classList.add('active');
        state.studyFilter = sfc.dataset.studyFilter;
        renderStudySections();
        return;
      }

      // 7. Retake Test
      if (e.target.closest('#retake-test-btn')) {
        e.preventDefault();
        resetExam();
        switchTab('exam');
        return;
      }

      // 8. Study Review Button from Results
      if (e.target.closest('#study-review-btn')) {
        e.preventDefault();
        switchTab('study');
        return;
      }

      // 9. Results Review Filters
      const rfc = e.target.closest('[data-review-filter]');
      if (rfc) {
        e.preventDefault();
        document.querySelectorAll('[data-review-filter]').forEach(c => c.classList.remove('active'));
        rfc.classList.add('active');
        state.reviewFilter = rfc.dataset.reviewFilter;
        renderReviewQuestions();
        return;
      }

      // 10. History Modal Trigger
      if (e.target.closest('#history-modal-btn')) {
        e.preventDefault();
        renderHistoryModal();
        if (DOM.historyModal) DOM.historyModal.classList.add('open');
        return;
      }

      // 11. Close Modal
      if (e.target.closest('#close-modal-btn') || e.target === DOM.historyModal) {
        e.preventDefault();
        if (DOM.historyModal) DOM.historyModal.classList.remove('open');
        return;
      }

      // 12. Clear History
      if (e.target.closest('#clear-history-btn')) {
        e.preventDefault();
        if (confirm('Clear test score history for this exam scope?')) {
          clearHistory();
        }
        return;
      }

      // 13. Jump Unanswered Question
      if (e.target.closest('#jump-unanswered-btn')) {
        e.preventDefault();
        jumpToFirstUnanswered();
        return;
      }

      // 14. Clear Form
      if (e.target.closest('#clear-form-btn')) {
        e.preventDefault();
        if (confirm('Are you sure you want to clear all selections on this form?')) {
          state.userAnswers = {};
          updateFormProgress();
          renderGoogleFormsQuestions();
        }
        return;
      }

      // 15. Reset Exam Form
      if (e.target.closest('#start-reset-exam-btn')) {
        e.preventDefault();
        if (Object.keys(state.userAnswers).length > 0) {
          if (confirm('Reset this test? All current answers will be cleared.')) {
            resetExam();
          }
        } else {
          resetExam();
        }
        return;
      }

      // 16. Submit Exam
      if (e.target.closest('#submit-exam-btn')) {
        e.preventDefault();
        const answered = Object.keys(state.userAnswers).length;
        const total = state.examQuestions.length;

        if (answered < total) {
          const remaining = total - answered;
          if (!confirm(`You have ${remaining} unanswered question(s). Are you sure you want to submit?`)) {
            jumpToFirstUnanswered();
            return;
          }
        }

        submitExam();
        return;
      }
    });

    // Inputs & Selects
    if (DOM.studySearch) {
      DOM.studySearch.addEventListener('input', (e) => {
        state.studySearchQuery = e.target.value;
        renderStudySections();
      });
    }

    if (DOM.examModuleSelect) {
      DOM.examModuleSelect.addEventListener('change', (e) => {
        state.examModuleFilter = e.target.value;
        resetExam();
        updateBestScoreStat();
      });
    }

    if (DOM.examFilterSelect) {
      DOM.examFilterSelect.addEventListener('change', (e) => {
        state.examTypeFilter = e.target.value;
        resetExam();
      });
    }

    if (DOM.shuffleToggle) {
      DOM.shuffleToggle.addEventListener('change', (e) => {
        state.shuffleEnabled = e.target.checked;
        if (DOM.shuffleLabel) {
          DOM.shuffleLabel.textContent = state.shuffleEnabled ? 'Random Shuffled' : 'Original Order';
        }
        resetExam();
      });
    }
  }

  // Helpers
  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function formatTime(seconds) {
    if (!seconds || seconds <= 0) return '0s';
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    if (m === 0) return `${s}s`;
    return `${m}m ${s}s`;
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
