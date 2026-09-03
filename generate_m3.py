# Script to generate Module 3: Project Planning and Feasibility Study
import json

module_3 = {
    "id": "module-3-planning",
    "title": "Module 3: Project Planning & Feasibility Study",
    "subtitle": "6 Core Plan Components, Team Roles & The TELOS Framework",
    "description": "Master project planning fundamentals, the 6 core components (Objectives, Scope, Budget, Schedule, Resources, Risk), team roles (PM, Analyst, Dev, QA, Sponsor), and the complete TELOS feasibility evaluation framework.",
    "icon": "fa-list-check",
    "badge": "MELEC 9: System Need Analysis",
    "themeColor": "#f59e0b", # Amber Gold
    "accentGradient": "linear-gradient(135deg, #d97706 0%, #fbbf24 100%)",
    "study": [
        {
            "id": "m3-part1",
            "title": "I. Understanding Project Planning",
            "icon": "fa-compass",
            "sections": [
                {
                    "subtitle": "What is Project Planning?",
                    "content": """
**Project Planning** is the foundational process of organizing, estimating, and scheduling everything needed before software construction begins. It serves as the master roadmap that guides developers, management, and clients throughout the software lifecycle.

#### Fundamental Planning Inquiries:
- **What** specific system will be built?
- **Who** will develop, test, and manage it?
- **How much** capital/funding is required?
- **How long** will development take?
- **What resources** (hardware, software, personnel) are required?
"""
                }
            ]
        },
        {
            "id": "m3-part2",
            "title": "II. Six (6) Core Components of a Project Plan",
            "icon": "fa-layer-group",
            "sections": [
                {
                    "subtitle": "The 6 Essential Plan Elements",
                    "content": """
Every enterprise software project plan requires six mutually reinforcing components:
"""
                },
                {
                    "subtitle": "Project Plan Components Matrix",
                    "table": {
                        "headers": ["Component", "Core Purpose & Definition", "School Enrollment System Example"],
                        "rows": [
                            ["1. Project Objectives", "The explicit, high-level business goals and deliverables of the initiative.", "Develop and deploy a cloud-based Online Enrollment and Grading System for the university."],
                            ["2. Scope", "Defines the precise boundaries: what is explicitly INCLUDED and what is EXCLUDED.", "Included: Student registration, subject enrollment, grade viewing.<br>Excluded: Payroll, HR, and bookstore inventory."],
                            ["3. Budget", "Detailed financial estimates required to procure equipment, pay talent, and test.", "Total: Php 800,000 (Php 500k dev salaries, Php 200k cloud servers, Php 100k contingency)."],
                            ["4. Schedule & Milestones", "Timelines, deadlines, and key stage-gate completion dates (Gantt chart).", "Requirements: Month 1 | Design: Month 2 | Coding: Month 3 | UAT: Month 4 | Launch: Month 5."],
                            ["5. Resource Allocation", "Assigning Human (analysts, devs), Hardware (servers, PCs), and Software (IDEs, DBMS).", "3 Developers, 1 Analyst, 1 QA Tester, AWS Cloud Instance, MySQL Database."],
                            ["6. Risk Management", "Identifying potential threats and formulating contingency and mitigation strategies.", "Risk: Campus internet failure during finals.<br>Mitigation: Implement offline local cache and redundant 4G/5G backup."]
                        ]
                    }
                },
                {
                    "subtitle": "Critical Warning: Scope Creep",
                    "content": """
**Scope Creep** refers to the uncontrolled, gradual addition of new features or demands without corresponding increases in budget, time, or resources. Clearly documenting what is **OUT OF SCOPE** is just as important as documenting what is IN SCOPE.
"""
                }
            ]
        },
        {
            "id": "m3-part3",
            "title": "III. Project Team Roles and Responsibilities",
            "icon": "fa-users-gear",
            "sections": [
                {
                    "subtitle": "Team Member Matrix",
                    "table": {
                        "headers": ["Role", "Primary Responsibilities", "Core Deliverables"],
                        "rows": [
                            ["Project Manager (PM)", "Overall project leadership, budget tracking, milestone monitoring, risk management, and client coordination.", "Project Charter, Gantt Chart, Status Reports, Budget Ledger."],
                            ["System Analyst", "Requirements elicitation, business process analysis, and architectural system blueprint design.", "SRS Document, DFDs, ERDs, UI Mockups."],
                            ["Software Developer / Programmer", "Writing clean source code, building APIs, compiling applications, and creating database tables.", "Application Code, Database Schema, Executable Builds."],
                            ["Quality Assurance (QA) Tester", "Designing and executing test plans, logging defects, verifying fixes, and stress-testing performance.", "Test Plan, Test Scripts, Defect / Bug Log."],
                            ["End-User / Client Sponsor", "Providing domain requirements, clarifying operational rules, and performing final acceptance testing.", "Business Needs, Feedback, UAT Sign-Off."]
                        ]
                    }
                }
            ]
        },
        {
            "id": "m3-part4",
            "title": "IV. Feasibility Study: The TELOS Framework",
            "icon": "fa-magnifying-glass-chart",
            "sections": [
                {
                    "subtitle": "What is a Feasibility Study?",
                    "content": """
A **Feasibility Study** answers the pivotal question: **\"Should we build this project?\"** It evaluates the technical, financial, and organizational viability before significant capital and labor are committed.
"""
                },
                {
                    "subtitle": "The TELOS Framework Matrix",
                    "table": {
                        "headers": ["TELOS Dimension", "Key Inquiry & Scope", "Evaluation Focus"],
                        "rows": [
                            ["T - Technical Feasibility", "\"Do we have the technology and expertise?\"", "Assesses team technical skills, hardware capability, network stability, and software compatibility."],
                            ["E - Economic Feasibility", "\"Is the project financially worthwhile?\"", "Cost-Benefit Analysis, Return on Investment (ROI), ongoing operational maintenance expenses vs savings."],
                            ["L - Legal Feasibility", "\"Does the project comply with laws and contracts?\"", "Data privacy laws (e.g. Philippine DPA of 2012), open-source license compliance, copyright, and industry regulations."],
                            ["O - Operational Feasibility", "\"Will the organization actually adopt and use it?\"", "Staff acceptance, organizational culture, ease of use, training needs, and resistance to change."],
                            ["S - Schedule Feasibility", "\"Can we finish within the required timeframe?\"", "Milestone timelines, development velocity, hard deadlines (e.g., semester opening, tax season)."]
                        ]
                    }
                }
            ]
        },
        {
            "id": "m3-high-yield",
            "title": "V. High-Yield Exam Summary Points",
            "icon": "fa-bolt",
            "sections": [
                {
                    "subtitle": "Quick Memory Anchors",
                    "content": """
- **Project Plan Components**: Objectives, Scope, Budget, Schedule, Resources, Risk Management.
- **Scope Creep**: Uncontrolled feature additions without budget/timeline adjustments.
- **Project Manager (PM)**: Directs budget, milestones, timeline pacing, and resource allocations.
- **TELOS Framework**:
  - **T (Technical)**: Hardware, software, infrastructure, team technical skills.
  - **E (Economic)**: Costs, ROI, Cost-Benefit Analysis.
  - **L (Legal)**: Regulatory laws, Data Privacy Act (DPA 2012), licenses, copyright.
  - **O (Operational)**: User willingness, job workflow fit, training, change resistance.
  - **S (Schedule)**: Completion deadlines, time constraints.
- **Failure in Operational Feasibility**: Software can be technically flawless and profitable, but fail completely because staff refuse to use it.
"""
                }
            ]
        }
    ],
    "questions": [
        # Multiple Choice (1-10)
        {
            "id": "m3-q1",
            "number": 1,
            "type": "mcq",
            "category": "Multiple Choice",
            "question": "What is the fundamental question answered by a Feasibility Study prior to starting a software project?",
            "options": [
                "A. 'How many lines of code can we write in one day?'",
                "B. 'Should we build this project?'",
                "C. 'Which programming font is most aesthetic?'",
                "D. 'How many monitors does each developer need?'"
            ],
            "answer": "B. 'Should we build this project?'",
            "explanation": "A feasibility study establishes overall viability, risk, and strategic justification before an organization commits funding and human resources."
        },
        {
            "id": "m3-q2",
            "number": 2,
            "type": "mcq",
            "category": "Multiple Choice",
            "question": "An analyst checks whether the school's existing computer hardware and campus Wi-Fi can run a proposed cloud portal. Which feasibility type is this?",
            "options": ["A. Legal Feasibility", "B. Technical Feasibility", "C. Economic Feasibility", "D. Schedule Feasibility"],
            "answer": "B. Technical Feasibility",
            "explanation": "Evaluating existing physical hardware, Wi-Fi networks, server capacities, and technical tools falls directly under Technical Feasibility."
        },
        {
            "id": "m3-q3",
            "number": 3,
            "type": "mcq",
            "category": "Multiple Choice",
            "question": "Calculating Return on Investment (ROI) by comparing an initial cost of Php 500,000 against projected savings of Php 900,000 is evaluated under:",
            "options": ["A. Operational Feasibility", "B. Economic Feasibility", "C. Technical Feasibility", "D. Schedule Feasibility"],
            "answer": "B. Economic Feasibility",
            "explanation": "Cost-Benefit Analysis, ROI calculations, and capital expenditure forecasts are evaluated under Economic Feasibility."
        },
        {
            "id": "m3-q4",
            "number": 4,
            "type": "mcq",
            "category": "Multiple Choice",
            "question": "Ensuring that a student portal strictly adheres to the Philippine Data Privacy Act of 2012 is a primary concern of:",
            "options": ["A. Schedule Feasibility", "B. Legal Feasibility", "C. Technical Feasibility", "D. Operational Feasibility"],
            "answer": "B. Legal Feasibility",
            "explanation": "Statutory privacy regulations, copyright laws, and intellectual property compliance are assessed under Legal Feasibility."
        },
        {
            "id": "m3-q5",
            "number": 5,
            "type": "mcq",
            "category": "Multiple Choice",
            "question": "If teachers refuse to use a newly deployed grading system because they find it too difficult and complicated, which feasibility dimension failed?",
            "options": ["A. Operational Feasibility", "B. Legal Feasibility", "C. Technical Feasibility", "D. Economic Feasibility"],
            "answer": "A. Operational Feasibility",
            "explanation": "Operational Feasibility gauges whether end-users will accept, embrace, and easily operate the system within organizational workflows."
        },
        {
            "id": "m3-q6",
            "number": 6,
            "type": "mcq",
            "category": "Multiple Choice",
            "question": "A university mandates that the new enrollment portal must be 100% operational before the August semester opens. Assessing if this can be achieved is:",
            "options": ["A. Technical Feasibility", "B. Operational Feasibility", "C. Schedule Feasibility", "D. Economic Feasibility"],
            "answer": "C. Schedule Feasibility",
            "explanation": "Schedule Feasibility evaluates whether the project can be planned, built, tested, and rolled out within strict timeline deadlines."
        },
        {
            "id": "m3-q7",
            "number": 7,
            "type": "mcq",
            "category": "Multiple Choice",
            "question": "In a Project Plan, clearly identifying that the system will handle 'Student Enrollment' but will NOT include 'Payroll' defines the project's:",
            "options": ["A. Scope", "B. Schedule", "C. Budget", "D. Resources"],
            "answer": "A. Scope",
            "explanation": "The Project Scope establishes explicit boundaries by declaring what deliverables are included and what are excluded."
        },
        {
            "id": "m3-q8",
            "number": 8,
            "type": "mcq",
            "category": "Multiple Choice",
            "question": "Which software team role is primarily responsible for tracking project milestones, controlling budgets, and coordinating team activities?",
            "options": ["A. System Analyst", "B. Database Administrator", "C. Project Manager (PM)", "D. QA Tester"],
            "answer": "C. Project Manager (PM)",
            "explanation": "The Project Manager (PM) oversees resource allocation, timeline adherence, budget tracking, risk response, and team coordination."
        },
        {
            "id": "m3-q9",
            "number": 9,
            "type": "mcq",
            "category": "Multiple Choice",
            "question": "Which tool is categorized as a Software Resource in a software development project plan?",
            "options": ["A. Dell PowerEdge Server", "B. MySQL Database / Visual Studio Code", "C. Quality Assurance Tester", "D. Core i7 Laptop"],
            "answer": "B. MySQL Database / Visual Studio Code",
            "explanation": "DBMS software (MySQL), IDEs (VS Code), and compilers are classified as Software Resources. (Servers and laptops are Hardware; testers are Human Resources)."
        },
        {
            "id": "m3-q10",
            "number": 10,
            "type": "mcq",
            "category": "Multiple Choice",
            "question": "What undesirable phenomenon occurs when extra features are continuously added to a project without expanding budget or timeline?",
            "options": ["A. Scope Creep", "B. Refactoring", "C. Regression Testing", "D. Feasibility Expansion"],
            "answer": "A. Scope Creep",
            "explanation": "Scope Creep is the uncontrolled, creeping expansion of product features without necessary adjustments to budget, time, or resources."
        },
        # Part II: TELOS Classification (11-15)
        {
            "id": "m3-q11",
            "number": 11,
            "type": "identification",
            "category": "TELOS Classification",
            "question": "Assessing whether the school has sufficient funds to hire three senior Python developers and buy enterprise cloud licenses:",
            "options": ["Economic Feasibility", "Technical Feasibility", "Legal Feasibility", "Operational Feasibility", "Schedule Feasibility"],
            "answer": "Economic Feasibility",
            "explanation": "Economic Feasibility — Evaluates financial costs, funding availability, salaries, cloud licenses, and projected financial return."
        },
        {
            "id": "m3-q12",
            "number": 12,
            "type": "identification",
            "category": "TELOS Classification",
            "question": "Evaluating whether existing clinic staff have the basic computer literacy needed to operate an electronic health records system:",
            "options": ["Operational Feasibility", "Technical Feasibility", "Economic Feasibility", "Legal Feasibility", "Schedule Feasibility"],
            "answer": "Operational Feasibility",
            "explanation": "Operational Feasibility — Evaluates staff competence, user readiness, training overhead, and workplace workflow integration."
        },
        {
            "id": "m3-q13",
            "number": 13,
            "type": "identification",
            "category": "TELOS Classification",
            "question": "Checking if third-party open-source libraries used in the software require royalty fees or violate proprietary copyright agreements:",
            "options": ["Legal Feasibility", "Technical Feasibility", "Economic Feasibility", "Operational Feasibility", "Schedule Feasibility"],
            "answer": "Legal Feasibility",
            "explanation": "Legal Feasibility — Assesses software licensing, copyright, open-source constraints, and regulatory liabilities."
        },
        {
            "id": "m3-q14",
            "number": 14,
            "type": "identification",
            "category": "TELOS Classification",
            "question": "Investigating if the development team has enough specialized knowledge in biometric facial recognition algorithms:",
            "options": ["Technical Feasibility", "Economic Feasibility", "Legal Feasibility", "Operational Feasibility", "Schedule Feasibility"],
            "answer": "Technical Feasibility",
            "explanation": "Technical Feasibility — Evaluates technical engineering expertise, algorithmic competence, and hardware/software capabilities."
        },
        {
            "id": "m3-q15",
            "number": 15,
            "type": "identification",
            "category": "TELOS Classification",
            "question": "Determining whether a 16-week timeline is adequate to complete coding, testing, and deployment before annual accreditation:",
            "options": ["Schedule Feasibility", "Technical Feasibility", "Economic Feasibility", "Legal Feasibility", "Operational Feasibility"],
            "answer": "Schedule Feasibility",
            "explanation": "Schedule Feasibility — Evaluates project milestones against rigid external deadlines and calendar constraints."
        },
        # Part III: True or False (16-20)
        {
            "id": "m3-q16",
            "number": 16,
            "type": "tf",
            "category": "True or False",
            "question": "A project can be technically feasible and economically attractive, yet still fail completely due to poor operational feasibility.",
            "options": ["True", "False"],
            "answer": "True",
            "explanation": "True — Even technically sophisticated and profitable systems fail if end-users resist adoption or find them too disruptive to use."
        },
        {
            "id": "m3-q17",
            "number": 17,
            "type": "tf",
            "category": "True or False",
            "question": "The project scope should only describe features that are included; documenting excluded features is considered bad practice.",
            "options": ["True", "False"],
            "answer": "False",
            "explanation": "False — Documenting out-of-scope (excluded) features is mandatory to manage stakeholder expectations and prevent scope creep."
        },
        {
            "id": "m3-q18",
            "number": 18,
            "type": "tf",
            "category": "True or False",
            "question": "Economic feasibility focuses solely on software purchase price and ignores developer salaries, hardware, and ongoing maintenance.",
            "options": ["True", "False"],
            "answer": "False",
            "explanation": "False — Economic feasibility must evaluate Total Cost of Ownership (TCO), including salaries, training, hardware, and maintenance."
        },
        {
            "id": "m3-q19",
            "number": 19,
            "type": "tf",
            "category": "True or False",
            "question": "Legal feasibility includes ensuring that user data handling conforms to data privacy, confidentiality, and statutory guidelines.",
            "options": ["True", "False"],
            "answer": "True",
            "explanation": "True — Legal feasibility guarantees adherence to statutory privacy legislation (such as the DPA of 2012) and contractual rules."
        },
        {
            "id": "m3-q20",
            "number": 20,
            "type": "tf",
            "category": "True or False",
            "question": "Conducting a feasibility study guarantees that a project will have zero technical challenges during programming.",
            "options": ["True", "False"],
            "answer": "False",
            "explanation": "False — A feasibility study identifies risks and viable pathways; it cannot eliminate standard programming bugs or technical challenges."
        },
        # Part IV: Case Study & Scenario Analysis (21-22)
        {
            "id": "m3-q21",
            "number": 21,
            "type": "scenario",
            "category": "Case Study / Scenario",
            "question": "City General Hospital evaluates an AI Triage System: Development cost is Php 1.2M; projected savings is Php 2.8M over 4 years. However, senior nurses actively refuse to use tablets, and emergency ward Wi-Fi is unstable. What is the soundest recommendation?",
            "options": [
                "A. Proceed with deployment immediately because the project has positive ROI.",
                "B. Do NOT proceed as-is. Upgrade emergency room network infrastructure (Technical) and conduct change management, ergonomic tablet testing, and nurse training (Operational) first.",
                "C. Fire all senior nurses and replace them with programmers.",
                "D. Cancel the project permanently and prohibit all hospital software forever."
            ],
            "answer": "B. Do NOT proceed as-is. Upgrade emergency room network infrastructure (Technical) and conduct change management, ergonomic tablet testing, and nurse training (Operational) first.",
            "explanation": "Model Analysis: • Economic: Feasible (Php 1.6M net savings = excellent ROI). • Technical: Not currently feasible due to unstable ER Wi-Fi causing life-or-death disconnections. • Operational: Not currently feasible due to senior nurse resistance. Recommendation: Do NOT proceed as-is. Remediate technical network bottlenecks and conduct change management/training first."
        },
        {
            "id": "m3-q22",
            "number": 22,
            "type": "scenario",
            "category": "Case Study / Scenario",
            "question": "Why is defining the Project Scope regarded as one of the most critical steps in project planning? What happens when scope is ambiguous?",
            "options": [
                "A. Ambiguous scope results in Scope Creep, missed deadlines, budget overruns, and disputed deliverables at launch.",
                "B. Ambiguous scope makes programmers write code in faster languages.",
                "C. Scope only matters for small freelance projects, not enterprise systems.",
                "D. Defining scope automatically generates all SQL tables."
            ],
            "answer": "A. Ambiguous scope results in Scope Creep, missed deadlines, budget overruns, and disputed deliverables at launch.",
            "explanation": "Model Analysis: Project scope defines the explicit boundary agreement between developers and stakeholders. Poorly communicated scope leads to: 1) Scope Creep (unending unbudgeted requests), 2) Schedule Delays & Cost Overruns (building unapproved features), and 3) Disputed Deliverables (clients withholding payment because divergent expectations were not aligned)."
        }
    ]
}

print("Module 3 defined successfully!")
