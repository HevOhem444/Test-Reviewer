# 🎓 Smart Test Reviewer System

An interactive, modern web-based **Test Reviewer & Google Forms Style Exam System** built from study materials and practice exam questionnaires for **Network Security** and **System Administration & Maintenance**.

![Test Reviewer Banner](https://img.shields.io/badge/Status-Active-emerald?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## ✨ Features

- 🛡️ **Two Isolated Modules**:
  - **Network Security Module** (35 Questions + Comprehensive Study Notes on CIA Triad, AAA, Perimeters, Threats, Security Controls, Cryptography & PKI).
  - **System Administration & Maintenance Module** (70 Questions + Comprehensive Study Notes on Admin Roles, Hardware Specs, Boot/PXE, MBR/GPT Partitioning, NTFS/ext4 File Systems, Principle of Least Privilege, and System Logging).
- 📝 **Google Forms-Style Test Engine**:
  - Clean form cards, sticky progress bar, section headers, radio options, and identification text inputs.
  - Exam filter modes (*Full Exam*, *Multiple Choice*, *Identification*, *True/False*, *Scenario Analysis*) & question shuffling.
  - Floating unanswered question alert with smooth auto-scroll.
- 📊 **Automated Score Grading & Explanations**:
  - Real-time score calculation with percentage gauge circle and Pass/Fail status.
  - Question-by-question review displaying your answer, the correct answer, and **step-by-step detailed explanations**.
  - Review filters (*All Questions*, *Incorrect Only*, *Correct Only*).
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
├── index.html        # Web app markup & Google Forms UI layout
├── styles.css        # Custom CSS styling (dark/light themes, form cards, animations)
├── app.js            # Quiz engine, automated grading logic, and state management
├── data.js           # Full 105-question dataset + study notes
├── build_ns.py       # Dataset generator for Network Security
├── build_sam.py      # Dataset generator for System Administration
└── combine_data.py   # Data compiler script
```

---

## 📜 License

Distributed under the MIT License.
