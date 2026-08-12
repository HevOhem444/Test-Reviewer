/* ==========================================================================
   Smart Test Reviewer System - Application Logic
   Handles module isolation, study note rendering, Google Forms test taking,
   automated grading, detailed explanations reveal, and score history.
   ========================================================================== */

(function () {
  'use strict';

  // State Management
  const state = {
    activeModuleId: 'network-security', // 'network-security' or 'system-admin'
    activeTab: 'study', // 'study', 'exam', 'results'
    currentModuleData: null,
    
    // Exam state
    examQuestions: [],
    userAnswers: {}, // questionId -> selectedOption/text
    examStartTime: null,
    examEndTime: null,
    examFilter: 'all',
    shuffleEnabled: false,
    
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
    modBtnNs: document.getElementById('mod-btn-ns'),
    modBtnSam: document.getElementById('mod-btn-sam'),
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
    studySearch: document.getElementById('study-search'),
    studyFilterChips: document.querySelectorAll('[data-study-filter]'),
    collapseStudyBtn: document.getElementById('collapse-study-btn'),
    studySectionsList: document.getElementById('study-sections-list'),
    
    // Exam View
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
    applyTheme(state.theme);
    bindEvents();
    loadModule(state.activeModuleId);
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

  // Load Module Data
  function loadModule(moduleId) {
    state.activeModuleId = moduleId;
    const modules = window.REVIEWER_DATA ? window.REVIEWER_DATA.modules : [];
    state.currentModuleData = modules.find(m => m.id === moduleId) || modules[0];

    if (!state.currentModuleData) return;

    // Update Header Switcher Buttons
    DOM.modBtnNs.classList.toggle('active', moduleId === 'network-security');
    DOM.modBtnSam.classList.toggle('active', moduleId === 'system-admin');

    // Update Root Theme Colors
    document.documentElement.style.setProperty('--module-primary', state.currentModuleData.themeColor);
    document.documentElement.style.setProperty('--module-accent-gradient', state.currentModuleData.accentGradient);
    
    // Update Hero Content
    DOM.heroBadge.textContent = state.currentModuleData.badge;
    DOM.heroTitle.textContent = state.currentModuleData.title;
    DOM.heroSubtitle.textContent = state.currentModuleData.subtitle;
    DOM.statStudyCount.textContent = `${state.currentModuleData.study.length} Study Parts`;
    DOM.statExamCount.textContent = `${state.currentModuleData.questions.length} Questions`;
    
    updateBestScoreStat();

    // Render Study Notes
    renderStudySections();

    // Reset Exam State
    resetExam();

    // Reset Results Tab state if changing module
    DOM.tabResults.disabled = true;
    switchTab('study');
  }

  function updateBestScoreStat() {
    const history = getScoreHistory(state.activeModuleId);
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
  // STUDY MODULE LOGIC
  // ==========================================================================

  function renderStudySections() {
    if (!state.currentModuleData || !state.currentModuleData.study) return;
    
    let sections = state.currentModuleData.study;
    const query = state.studySearchQuery.toLowerCase().trim();

    if (state.studyFilter === 'high-yield') {
      sections = sections.filter(s => s.id.includes('high-yield'));
    }

    DOM.studySectionsList.innerHTML = '';

    sections.forEach(sec => {
      // Check search match
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

      // Collapse header click handler
      card.querySelector('.study-card-header').addEventListener('click', () => {
        card.classList.toggle('collapsed');
      });

      DOM.studySectionsList.appendChild(card);
    });

    if (DOM.studySectionsList.children.length === 0) {
      DOM.studySectionsList.innerHTML = `
        <div class="study-card" style="padding: 32px; text-align: center; color: var(--text-muted);">
          <i class="fa-solid fa-folder-open" style="font-size: 2rem; margin-bottom: 12px; display: block;"></i>
          <p>No study notes matching your search query.</p>
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
      if (trimmed.startswith && trimmed.startswith('- ') || trimmed.startsWith('- ') || trimmed.startsWith('• ')) {
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
          listHTML += `<h5 style="color: var(--text-main); font-size: 0.95rem; margin: 12px 0 6px 0;">${trimmed.replace('#### ', '')}</h5>`;
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
  // GOOGLE FORMS EXAM LOGIC
  // ==========================================================================

  function resetExam() {
    if (!state.currentModuleData) return;

    let qList = [...state.currentModuleData.questions];

    // Filter questions if requested
    if (state.examFilter !== 'all') {
      qList = qList.filter(q => q.type === state.examFilter);
    }

    // Shuffle if requested
    if (state.shuffleEnabled) {
      qList = shuffleArray(qList);
    }

    state.examQuestions = qList;
    state.userAnswers = {};
    state.examStartTime = null;

    DOM.formDocTitle.textContent = `${state.currentModuleData.title} Practice Examination`;
    DOM.formDocDescription.textContent = `Google Forms style interactive test containing ${state.examQuestions.length} questions. Complete each question and click Submit Test at the end.`;

    updateFormProgress();
    renderGoogleFormsQuestions();
  }

  function renderGoogleFormsQuestions() {
    DOM.googleExamForm.innerHTML = '';

    if (state.examQuestions.length === 0) {
      DOM.googleExamForm.innerHTML = `
        <div class="form-question-card" style="text-align: center; color: var(--text-muted);">
          <p>No questions available for the selected filter.</p>
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

      if (q.type === 'mcq' || q.type === 'tf' || q.type === 'scenario') {
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
      } else if (q.type === 'identification') {
        const val = state.userAnswers[q.id] || '';
        optionsHTML = `
          <div class="form-text-input-group">
            <input type="text" 
                   class="google-text-input" 
                   name="${q.id}" 
                   placeholder="Your answer..." 
                   value="${val}"
                   autocomplete="off">
          </div>
        `;
      }

      qCard.innerHTML = `
        <div class="question-header">
          <div class="question-meta">
            <span class="q-number">Question ${idx + 1} of ${state.examQuestions.length}</span>
            <span class="q-category-tag">${categoryBadge}</span>
          </div>
          <div class="q-title">${q.question} <span class="req-star">*</span></div>
        </div>
        ${optionsHTML}
      `;

      // Event listeners for choices / inputs
      if (q.type === 'identification') {
        const input = qCard.querySelector('input[type="text"]');
        input.addEventListener('input', (e) => {
          onAnswerInput(q.id, e.target.value);
        });
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

    state.lastResults = {
      moduleId: state.activeModuleId,
      moduleTitle: state.currentModuleData.title,
      date: new Date().toISOString(),
      totalQuestions,
      correctCount,
      incorrectCount,
      skippedCount,
      percentage,
      timeSpentSeconds,
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

    if (q.type === 'mcq' || q.type === 'tf' || q.type === 'scenario') {
      // Clean string comparison (e.g. "B. System Administrator" vs "B. System Administrator")
      return cleanText(userAns) === cleanText(q.answer);
    } else if (q.type === 'identification') {
      // Fuzzy string comparison for identification questions
      const userClean = cleanText(userAns);
      const targetClean = cleanText(q.answer);

      if (userClean === targetClean) return true;

      // Allow key sub-phrase matches (e.g., "System Admin" matches "System Administrator")
      if (targetClean.includes(userClean) && userClean.length >= 4) return true;
      if (userClean.includes(targetClean) && targetClean.length >= 4) return true;

      return false;
    }
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
      let userAnsClass = d.isCorrect ? 'correct-text' : (d.isAnswered ? 'wrong-text' : 'wrong-text');

      rCard.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
          <div class="question-meta">
            <span class="q-number">Question #${q.number || (idx + 1)}</span>
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

  function getScoreHistory(moduleId) {
    try {
      const histories = JSON.parse(localStorage.getItem('reviewer_score_history') || '{}');
      return histories[moduleId] || [];
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
    const history = getScoreHistory(state.activeModuleId);
    DOM.historyListContainer.innerHTML = '';

    if (history.length === 0) {
      DOM.historyListContainer.innerHTML = `
        <div style="text-align: center; color: var(--text-muted); padding: 24px;">
          <i class="fa-solid fa-history" style="font-size: 2rem; margin-bottom: 10px;"></i>
          <p>No score history logged for this module yet. Take a test to record your score!</p>
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
          <h4>${item.percentage >= 70 ? 'Passed' : 'Needs Practice'} (${item.correctCount}/${item.totalQuestions} Correct)</h4>
          <span><i class="fa-solid fa-calendar"></i> ${formattedDate} &bull; <i class="fa-solid fa-clock"></i> ${formatTime(item.timeSpentSeconds)}</span>
        </div>
        <div class="history-score">${item.percentage}%</div>
      `;
      DOM.historyListContainer.appendChild(el);
    });
  }

  function clearHistory() {
    try {
      const histories = JSON.parse(localStorage.getItem('reviewer_score_history') || '{}');
      delete histories[state.activeModuleId];
      localStorage.setItem('reviewer_score_history', JSON.stringify(histories));
      renderHistoryModal();
      updateBestScoreStat();
    } catch (e) {}
  }

  function formatTime(totalSeconds) {
    if (!totalSeconds) return '0s';
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return m > 0 ? `${m}m ${s}s` : `${s}s`;
  }

  function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  // ==========================================================================
  // EVENT BINDINGS
  // ==========================================================================

  function bindEvents() {
    // Theme Toggle
    DOM.themeBtn.addEventListener('click', () => {
      applyTheme(state.theme === 'dark' ? 'light' : 'dark');
    });

    // Module Switchers
    DOM.modBtnNs.addEventListener('click', () => loadModule('network-security'));
    DOM.modBtnSam.addEventListener('click', () => loadModule('system-admin'));

    // Navigation Tabs
    DOM.tabStudy.addEventListener('click', () => switchTab('study'));
    DOM.tabExam.addEventListener('click', () => switchTab('exam'));
    DOM.tabResults.addEventListener('click', () => switchTab('results'));

    // Study Controls
    DOM.studySearch.addEventListener('input', (e) => {
      state.studySearchQuery = e.target.value;
      renderStudySections();
    });

    DOM.studyFilterChips.forEach(chip => {
      chip.addEventListener('click', () => {
        DOM.studyFilterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        state.studyFilter = chip.dataset.studyFilter;
        renderStudySections();
      });
    });

    DOM.collapseStudyBtn.addEventListener('click', () => {
      const cards = document.querySelectorAll('.study-card');
      const allCollapsed = Array.from(cards).every(c => c.classList.contains('collapsed'));
      cards.forEach(c => c.classList.toggle('collapsed', !allCollapsed));
    });

    // Exam Controls
    DOM.examFilterSelect.addEventListener('change', (e) => {
      state.examFilter = e.target.value;
      resetExam();
    });

    DOM.shuffleToggle.addEventListener('change', (e) => {
      state.shuffleEnabled = e.target.checked;
      DOM.shuffleLabel.textContent = state.shuffleEnabled ? 'Shuffled' : 'Original Order';
      resetExam();
    });

    DOM.startResetExamBtn.addEventListener('click', () => {
      if (confirm('Reset form and restart exam?')) {
        resetExam();
      }
    });

    DOM.clearFormBtn.addEventListener('click', () => {
      if (confirm('Clear all answered questions?')) {
        state.userAnswers = {};
        updateFormProgress();
        renderGoogleFormsQuestions();
      }
    });

    DOM.jumpUnansweredBtn.addEventListener('click', jumpToFirstUnanswered);

    // Form Submit
    DOM.googleExamForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const unansweredCount = state.examQuestions.length - Object.keys(state.userAnswers).length;
      
      if (unansweredCount > 0) {
        if (!confirm(`You still have ${unansweredCount} unanswered question(s). Are you sure you want to submit?`)) {
          jumpToFirstUnanswered();
          return;
        }
      }
      submitExam();
    });

    DOM.submitExamBtn.addEventListener('click', () => {
      DOM.googleExamForm.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    });

    // Results Actions
    DOM.retakeTestBtn.addEventListener('click', () => {
      resetExam();
      switchTab('exam');
    });

    DOM.studyReviewBtn.addEventListener('click', () => {
      switchTab('study');
    });

    DOM.reviewFilterChips.forEach(chip => {
      chip.addEventListener('click', () => {
        DOM.reviewFilterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        state.reviewFilter = chip.dataset.reviewFilter;
        renderReviewQuestions();
      });
    });

    // History Modal
    DOM.historyModalBtn.addEventListener('click', () => {
      renderHistoryModal();
      DOM.historyModal.classList.add('active');
    });

    DOM.closeModalBtn.addEventListener('click', () => {
      DOM.historyModal.classList.remove('active');
    });

    DOM.clearHistoryBtn.addEventListener('click', () => {
      if (confirm('Clear all recorded score history for this module?')) {
        clearHistory();
      }
    });

    DOM.historyModal.addEventListener('click', (e) => {
      if (e.target === DOM.historyModal) {
        DOM.historyModal.classList.remove('active');
      }
    });
  }

  // Run Init when DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
