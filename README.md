# 🎓 Smart Test Reviewer System

An interactive, modern web-based **Test Reviewer & Google Forms Style Exam System** built from official learning sheets and practice exam questionnaires for **BSIT MELEC 9: System Need Analysis**.

![Test Reviewer Banner](https://img.shields.io/badge/Status-Active-emerald?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## ✨ Features

- 📚 **Individual Modular Study Reviewers**:
  - **Module 1: Introduction to Systems Analysis and Design (SAD)** (5 System Components [Input, Process, Output, Feedback, Control], Analysis vs. Design matrix, Analyst roles & 4 skill sets, and 10 strategic benefits).
  - **Module 2: Software Development Lifecycle (SDLC)** (7 SDLC phases & deliverables, SRS & SDD specifications, 4 testing levels [Unit, Integration, System, UAT], and sequential lifecycle trade-offs).
  - **Module 3: Project Planning and Feasibility Study** (6 project plan components, project team roles, Scope Creep management, and the complete TELOS feasibility framework [Technical, Economic, Legal, Operational, Schedule]).
  - **Module 4: Requirements Gathering Techniques** (4 primary elicitation techniques [Interviews, Observation & Hawthorne Effect, Questionnaires, Document Analysis], selection matrices, and hybrid triangulation strategy).
  - Individual quick-filter chips so you can study each module independently or browse all combined.

- 📝 **100-Item Comprehensive Examination (Google Forms Style)**:
  - Unified board-style exam pooling all 4 modules (100 items total: 44 MCQs, 24 Identification/Matching/TELOS, 24 True/False, 8 Scenario/Case Studies).
  - **Exam Scope Selector**: Take the *Comprehensive Exam (All 4 Modules — 100 Items)* or isolate to *Module 1*, *Module 2*, *Module 3*, or *Module 4* (25 items each).
  - **Question Type Filter**: Practice *Multiple Choice*, *Identification / Matching / TELOS*, *True/False*, or *Scenario Applications*.
  - Sticky live progress bar, unanswered question alerts, and shuffle support.

- 📊 **Automated Score Grading & Module Mastery Breakdown**:
  - Instant score grading with circular SVG gauge and Pass/Fail benchmark.
  - **Module Mastery Breakdown Grid**: Visual performance breakdown per module (e.g. Module 1: 24/25, Module 2: 23/25, etc.) so you know exactly which module to re-study.
  - In-depth answer keys with model rationales, memory anchors, and review filters.
- 🌙 **Dark & Light Mode Support** with `localStorage` score history logs.

---

## 🚀 Live Usage / How to Run

Simply clone or download this repository and open `index.html` in any web browser!

```bash
# Clone the repository
git clone https://github.com/HevOhem444/Test-Reviewer.git

# Navigate into the project folder
cd Test-Reviewer

# Open index.html directly or serve using Python
python -m http.server 8080
```

Then visit `http://localhost:8080` in your web browser.

---

## 📁 Repository Structure

```
├── BSIT_LS_MELEC9_N01_Reviewer_and_Exam.pdf  # Module 1 Source PDF
├── BSIT_LS_MELEC9_N02_Reviewer_and_Exam.pdf  # Module 2 Source PDF
├── BSIT_LS_MELEC9_N03_Reviewer_and_Exam.pdf  # Module 3 Source PDF
├── BSIT_LS_MELEC9_N04_Reviewer_and_Exam.pdf  # Module 4 Source PDF
├── index.html                                # Web app markup & Google Forms UI layout
├── styles.css                                # Custom styling (dark/light themes, form cards, animations)
├── app.js                                    # Quiz engine, automated grading logic, and state management
├── data.js                                   # Full 88-question dataset + comprehensive study notes
├── generate_m1.py                            # Dataset generator for Module 1 (SAD)
├── generate_m2.py                            # Dataset generator for Module 2 (SDLC)
├── generate_m3.py                            # Dataset generator for Module 3 (Planning & Feasibility)
├── generate_m4.py                            # Dataset generator for Module 4 (Requirements)
└── combine_data.py                           # Central data compiler script
```

---

## 📜 License

Distributed under the MIT License.
