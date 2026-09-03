# Script to generate complete, high-yield reviewer data for BSIT MELEC 9 (Modules 1 to 4)
import json

module_1 = {
    "id": "module-1-sad",
    "title": "Module 1: Intro to Systems Analysis & Design (SAD)",
    "subtitle": "Foundations, System Components, Roles & Core Skills",
    "description": "Comprehensive guide covering the 5 system components (Input, Process, Output, Feedback, Control), Analysis vs Design boundary, System Analyst bridge role & 4 core skill sets, and 10 strategic benefits of SAD.",
    "icon": "fa-diagram-project",
    "badge": "MELEC 9: System Need Analysis",
    "themeColor": "#3b82f6", # Vibrant Blue
    "accentGradient": "linear-gradient(135deg, #2563eb 0%, #38bdf8 100%)",
    "study": [
        {
            "id": "m1-part1",
            "title": "I. Core Concepts & Foundations",
            "icon": "fa-cubes",
            "sections": [
                {
                    "subtitle": "1. What is a System?",
                    "content": """
A **system** is a collection of interrelated components working together toward a common goal by accepting inputs, processing them, and producing structured outputs.

Information systems combine hardware, software, data, procedures, and people to collect, store, process, and distribute information to support decision-making and operational control.
"""
                },
                {
                    "subtitle": "The Five (5) Components of a System",
                    "table": {
                        "headers": ["Component", "Core Function / Definition", "School Enrollment System Example"],
                        "rows": [
                            ["1. Input", "Data, materials, or resources entered into the system.", "Student personal info, selected subjects, payment slips."],
                            ["2. Process", "Activities and transformations applied to input data.", "Validating credentials, calculating tuition, assigning subjects."],
                            ["3. Output", "The resulting information, reports, or services produced.", "Certificate of Registration (COR), class schedule, official receipt."],
                            ["4. Feedback", "Evaluation data used to assess performance and make adjustments.", "Student verifies enrollment details; system logs error prompts."],
                            ["5. Control", "Rules, permissions, and procedures that govern correct operations.", "Only authorized registrar/cashier staff can approve enrollment transactions."]
                        ]
                    }
                },
                {
                    "subtitle": "Exam Tip / Critical Concept: Input vs. Output vs. Control",
                    "content": """
- **Input**: Raw data and resources injected into the system.
- **Process**: Computation, transformation logic, algorithms, and business rules.
- **Output**: Finished information, printable documents, receipts, dashboards, and reports.
- **Feedback**: Reactive signals, user validation, telemetry, and error logging used to adjust performance.
- **Control**: Security policies, user role privileges (RBAC), auditing, and approval safeguards.
"""
                }
            ]
        },
        {
            "id": "m1-part2",
            "title": "II. Differentiating Analysis from Design",
            "icon": "fa-code-compare",
            "sections": [
                {
                    "subtitle": "The Analysis (What?) vs. Design (How?) Boundary",
                    "content": """
Understanding the fundamental boundary between the **Analysis** phase and the **Design** phase is one of the most critical exam topics:
"""
                },
                {
                    "subtitle": "Comprehensive Comparison Matrix",
                    "table": {
                        "headers": ["Criterion", "System Analysis (What?)", "System Design (How?)"],
                        "rows": [
                            ["Core Focus", "Understanding the problem, existing processes, and business requirements.", "Creating the technical blueprint and specification for the solution."],
                            ["Guiding Question", "\"What does the organization and user need the system to do?\"", "\"How will the system physically fulfill those requirements?\""],
                            ["Primary Activities", "Interviews, observations, surveys, analyzing legacy documents, workflows.", "Designing user interfaces (UI), database schemas (ERD), process models, security."],
                            ["Primary Deliverables", "Problem statement, Software Requirements Specification (SRS), user stories.", "Wireframes, mockups, data flow diagrams (DFD), database tables, architecture charts."],
                            ["Target Audience", "Business owners, end-users, domain specialists, management.", "Software engineers, database administrators, UI/UX designers, developers."]
                        ]
                    }
                }
            ]
        },
        {
            "id": "m1-part3",
            "title": "III. What is System Analysis and Design (SAD)?",
            "icon": "fa-sitemap",
            "sections": [
                {
                    "subtitle": "Definition and Importance of SAD",
                    "content": """
**System Analysis and Design (SAD)** is the systematic process of studying an existing or proposed business system, identifying user requirements, and designing an efficient computer-based solution to solve organizational problems.

#### The Danger of Skipping SAD vs. Benefits of Applying SAD:
- **Without SAD**: Programmers jump straight into coding without consulting stakeholders. Results: missing vital features, wrong reports, poor user adoption, massive budget overruns, and severe software bugs.
- **With SAD**: Thorough requirements elicitation occurs first. Results: clear roadmap, accurate data modeling, alignment with actual user workflows, robust security, lower maintenance costs, and high user satisfaction.
"""
                }
            ]
        },
        {
            "id": "m1-part4",
            "title": "IV. Role, Responsibilities, and Skills of a System Analyst",
            "icon": "fa-user-tie",
            "sections": [
                {
                    "subtitle": "The Analyst as a Bridge & Key Responsibilities",
                    "content": """
A **System Analyst** serves as a vital **bridge / translator** between non-technical business stakeholders (clients, managers, end-users) and technical personnel (programmers, database admins, network engineers).

#### Three (3) Core Responsibilities:
1. **Problem Identification**: Investigating business inefficiencies, bottlenecks, and user complaints in the current operational workflow.
2. **Requirements Elicitation**: Actively gathering, clarifying, and documenting functional and non-functional requirements from stakeholders.
3. **Solution Modeling**: Designing technical blueprints, Data Flow Diagrams (DFDs), Entity-Relationship Diagrams (ERDs), and workflow models for developers.
"""
                },
                {
                    "subtitle": "Four (4) Core Skill Sets of a System Analyst",
                    "table": {
                        "headers": ["Skill Category", "Core Focus & Description", "Real-World Application"],
                        "rows": [
                            ["1. Analytical Skills", "Systems thinking, problem-solving, decomposing complex workflows into logical components.", "Diagnosing why enrollment queues take 4 hours and mapping data bottlenecks."],
                            ["2. Technical Skills", "Understanding databases, programming concepts, hardware architecture, networking, and APIs.", "Communicating effectively with database administrators about foreign keys and index performance."],
                            ["3. Management Skills", "Resource planning, project scheduling, risk mitigation, and budget tracking.", "Managing timeline milestones and keeping project tasks on schedule."],
                            ["4. Interpersonal Skills", "Communication, active listening, negotiation, diplomacy, and conflict resolution.", "Mediating between conflicting department heads demanding contradictory features."]
                        ]
                    }
                }
            ]
        },
        {
            "id": "m1-part5",
            "title": "V. Ten (10) Strategic Benefits of SAD",
            "icon": "fa-chart-line",
            "sections": [
                {
                    "subtitle": "10 Strategic Organizational Benefits",
                    "content": """
1. **Lower Cost of Changes**: Finding errors in the analysis phase is 10x to 50x cheaper than fixing bugs in production.
2. **Clear Project Scope**: Prevents uncontrolled feature expansion (Scope Creep).
3. **Higher Software Quality**: Systematic design leads to fewer logic flaws and crashes.
4. **Improved User Adoption**: Involving users early ensures the system matches daily workflows.
5. **Accurate Cost & Time Estimates**: Solid planning prevents surprise budget deficits.
6. **Optimized Resource Allocation**: Assigns personnel and hardware efficiently.
7. **Robust Documentation**: Enables future developers to maintain and update the codebase.
8. **Enhanced Data Security**: Identifies role-based access rules and data vulnerabilities during design.
9. **Better Regulatory Compliance**: Ensures systems meet privacy and accounting laws.
10. **Scalable Architecture**: Allows the software to grow alongside the business without rebuilding from scratch.
"""
                }
            ]
        },
        {
            "id": "m1-high-yield",
            "title": "VI. High-Yield Exam Summary Points",
            "icon": "fa-bolt",
            "sections": [
                {
                    "subtitle": "Quick Memory Anchors",
                    "content": """
- **System**: Interrelated components working toward a common goal (Input ➔ Process ➔ Output, regulated by Feedback & Control).
- **Analysis**: **WHAT** the system must do (User requirements, interviews, SRS document).
- **Design**: **HOW** the system will physically do it (Blueprints, ERDs, DFDs, database schemas, UI wireframes).
- **System Analyst**: The **bridge / translator** between business clients and software developers.
- **Interpersonal Skills**: Essential for conflict resolution and stakeholder consensus.
- **Cost of Fixing Errors**: Lowest during Analysis; highest during Maintenance.
- **Control Component**: Enforces authorization, permissions (RBAC), and security integrity.
"""
                }
            ]
        }
    ],
    "questions": [
        # Multiple Choice (1-10)
        {
            "id": "m1-q1",
            "number": 1,
            "type": "mcq",
            "category": "Multiple Choice",
            "question": "In a school grading system, which component ensures that only authorized faculty members can enter student grades?",
            "options": ["A. Input", "B. Process", "C. Control", "D. Feedback"],
            "answer": "C. Control",
            "explanation": "Control encompasses rules, authorization safeguards, and access privileges (such as RBAC) ensuring the system operates securely and validly."
        },
        {
            "id": "m1-q2",
            "number": 2,
            "type": "mcq",
            "category": "Multiple Choice",
            "question": "A student receives a printed Certificate of Registration (COR) after enrolling. In system terminology, this document is classified as:",
            "options": ["A. Input", "B. Output", "C. Process", "D. Feedback"],
            "answer": "B. Output",
            "explanation": "The Certificate of Registration (COR) is generated information produced by the system for the student and faculty."
        },
        {
            "id": "m1-q3",
            "number": 3,
            "type": "mcq",
            "category": "Multiple Choice",
            "question": "A developer began coding a hospital billing application without consulting the billing staff or accounting officers. Which fundamental phase did the developer bypass?",
            "options": ["A. System Analysis", "B. Compilation", "C. Hardware Setup", "D. User Acceptance Testing"],
            "answer": "A. System Analysis",
            "explanation": "The developer bypassed analyzing the existing problem and eliciting user requirements directly from hospital stakeholders."
        },
        {
            "id": "m1-q4",
            "number": 4,
            "type": "mcq",
            "category": "Multiple Choice",
            "question": "Which of the following questions is primarily addressed during the System Design phase rather than the System Analysis phase?",
            "options": [
                "A. 'What are the organization's business requirements?'",
                "B. 'What problems do current employees encounter with legacy paperwork?'",
                "C. 'How will the computer-based system physically meet user requirements?'",
                "D. 'What information does management require in weekly reports?'"
            ],
            "answer": "C. 'How will the computer-based system physically meet user requirements?'",
            "explanation": "Analysis defines 'WHAT' must be solved; Design defines 'HOW' the technology will physically solve it."
        },
        {
            "id": "m1-q5",
            "number": 5,
            "type": "mcq",
            "category": "Multiple Choice",
            "question": "A System Analyst is frequently described as playing which central role in an IT organization?",
            "options": [
                "A. A hardware repair technician",
                "B. A bridge / translator between business users and programmers",
                "C. An executive solely deciding company salaries",
                "D. A full-time graphic illustrator"
            ],
            "answer": "B. A bridge / translator between business users and programmers",
            "explanation": "Analysts translate ambiguous operational needs into technical specifications and blueprints that coders can build."
        },
        {
            "id": "m1-q6",
            "number": 6,
            "type": "mcq",
            "category": "Multiple Choice",
            "question": "Which task is considered a primary daily responsibility of a System Analyst?",
            "options": [
                "A. Soldering circuit boards",
                "B. Understanding business problems and gathering requirements",
                "C. Writing back-end database stored procedures",
                "D. Performing automated integration testing"
            ],
            "answer": "B. Understanding business problems and gathering requirements",
            "explanation": "Interviewing frontline staff to discover operational pain points and compiling requirements is a core analyst responsibility."
        },
        {
            "id": "m1-q7",
            "number": 7,
            "type": "mcq",
            "category": "Multiple Choice",
            "question": "Which skill category enables an analyst to resolve disagreements between two department heads who demand conflicting system features?",
            "options": ["A. Technical Skills", "B. Interpersonal Skills", "C. Programming Skills", "D. Hardware Architecture Skills"],
            "answer": "B. Interpersonal Skills",
            "explanation": "Negotiation, diplomacy, conflict resolution, and active listening belong to the interpersonal skill domain."
        },
        {
            "id": "m1-q8",
            "number": 8,
            "type": "mcq",
            "category": "Multiple Choice",
            "question": "Data Flow Diagrams (DFDs) and Entity-Relationship Diagrams (ERDs) are primarily constructed during which phase?",
            "options": ["A. System Analysis and Design", "B. Hardware Procurement", "C. End-User Training", "D. Decommissioning"],
            "answer": "A. System Analysis and Design",
            "explanation": "DFDs and ERDs are standard analytical and design modeling tools used to map data flow and logical data structures."
        },
        {
            "id": "m1-q9",
            "number": 9,
            "type": "mcq",
            "category": "Multiple Choice",
            "question": "Why is detecting and correcting errors during the Analysis phase drastically better than during the Maintenance phase?",
            "options": [
                "A. Fixing errors during analysis costs a fraction of the time and money compared to post-deployment rework.",
                "B. Developers do not get paid during the analysis phase.",
                "C. Users are never affected by bugs in deployed software.",
                "D. Analysis is handled exclusively by automated AI tools."
            ],
            "answer": "A. Fixing errors during analysis costs a fraction of the time and money compared to post-deployment rework.",
            "explanation": "Software engineering studies show fixing defects post-release is 10x to 50x more expensive due to redesign, re-testing, and redeployment."
        },
        {
            "id": "m1-q10",
            "number": 10,
            "type": "mcq",
            "category": "Multiple Choice",
            "question": "Incorporating Role-Based Access Control (RBAC) so that only cashiers can accept tuition payments directly supports which system component?",
            "options": ["A. Control", "B. Input", "C. Feedback", "D. Output"],
            "answer": "A. Control",
            "explanation": "Role-based permissions (RBAC) restrict unauthorized actions, functioning as a vital system control mechanism."
        },
        # Part II: Identification / Terminology (11-15)
        {
            "id": "m1-q11",
            "number": 11,
            "type": "identification",
            "category": "Identification / Terminology",
            "question": "The component of a system consisting of information or signals used to make adjustments and evaluate system performance:",
            "options": ["Feedback", "Control", "Process", "Output"],
            "answer": "Feedback",
            "explanation": "Feedback consists of information returning from the environment or user to adjust, evaluate, or confirm system performance."
        },
        {
            "id": "m1-q12",
            "number": 12,
            "type": "identification",
            "category": "Identification / Terminology",
            "question": "The specific IT professional responsible for studying business problems, gathering user requirements, and designing solutions:",
            "options": ["System Analyst", "Database Administrator", "Network Engineer", "Hardware Technician"],
            "answer": "System Analyst",
            "explanation": "A System Analyst is the IT specialist who acts as a liaison and solution designer between business stakeholders and technical developers."
        },
        {
            "id": "m1-q13",
            "number": 13,
            "type": "identification",
            "category": "Identification / Terminology",
            "question": "The developmental phase that serves as the technical 'blueprint' detailing user interfaces, database tables, and system architecture:",
            "options": ["System Design", "System Analysis", "Maintenance", "Testing"],
            "answer": "System Design",
            "explanation": "System Design is the architectural and physical blueprint phase detailing how the software will physically meet user requirements."
        },
        {
            "id": "m1-q14",
            "number": 14,
            "type": "identification",
            "category": "Identification / Terminology",
            "question": "The term for data, resources, or raw facts entered into an information system:",
            "options": ["Input", "Output", "Feedback", "Control"],
            "answer": "Input",
            "explanation": "Input represents the raw data, transactions, and resources injected into the system for processing."
        },
        {
            "id": "m1-q15",
            "number": 15,
            "type": "identification",
            "category": "Identification / Terminology",
            "question": "The core framework / acronym that encompasses understanding organizational problems and architecting effective computer-based solutions:",
            "options": ["System Analysis and Design (SAD)", "SDLC", "RBAC", "ERD"],
            "answer": "System Analysis and Design (SAD)",
            "explanation": "System Analysis and Design (SAD) is the overall structured methodology of studying organizational problems and designing computer-based solutions."
        },
        # Part III: True or False (16-20)
        {
            "id": "m1-q16",
            "number": 16,
            "type": "tf",
            "category": "True or False",
            "question": "System Analysis focuses primarily on 'HOW' the software will be technically coded, while System Design focuses on 'WHAT' the business needs.",
            "options": ["True", "False"],
            "answer": "False",
            "explanation": "False — Analysis focuses on 'WHAT' the system must do; Design focuses on 'HOW' the technical solution will be constructed."
        },
        {
            "id": "m1-q17",
            "number": 17,
            "type": "tf",
            "category": "True or False",
            "question": "System Analysts require strong business acumen because software must strictly align with organizational goals and commercial workflows.",
            "options": ["True", "False"],
            "answer": "True",
            "explanation": "True — Analysts must understand business workflows, accounting, and organizational objectives to design practical, effective software."
        },
        {
            "id": "m1-q18",
            "number": 18,
            "type": "tf",
            "category": "True or False",
            "question": "Skipping System Analysis and Design usually accelerates total project completion and drastically reduces long-term software maintenance costs.",
            "options": ["True", "False"],
            "answer": "False",
            "explanation": "False — Skipping SAD leads to massive rework, feature omissions, budget overruns, and expensive post-release maintenance."
        },
        {
            "id": "m1-q19",
            "number": 19,
            "type": "tf",
            "category": "True or False",
            "question": "Control procedures in a system ensure that only authorized users can perform sensitive transactions such as updating grades or issuing refunds.",
            "options": ["True", "False"],
            "answer": "True",
            "explanation": "True — Control mechanisms enforce security, auditing, and authorization policies across system operations."
        },
        {
            "id": "m1-q20",
            "number": 20,
            "type": "tf",
            "category": "True or False",
            "question": "An effective System Analyst only needs programming knowledge; interpersonal and communication skills are completely optional.",
            "options": ["True", "False"],
            "answer": "False",
            "explanation": "False — Communication, negotiation, diplomacy, and interpersonal skills are equally or more critical than coding for an analyst."
        },
        # Part IV: Scenario Application (21-22)
        {
            "id": "m1-q21",
            "number": 21,
            "type": "scenario",
            "category": "Scenario Application",
            "question": "A programmer is hired to build a School Enrollment System. Eager to show progress, he immediately begins writing code in Visual Studio Code without speaking with the registrar, cashiers, teachers, or students. What is the most critical consequence of this mistake?",
            "options": [
                "A. The programmer will write faster code with no syntax errors.",
                "B. Crucial business rules (like prerequisites and scholarship discounts) will be missed, resulting in massive rework and user rejection.",
                "C. The school will save money because documentation is unnecessary.",
                "D. Hardware requirements will automatically decrease."
            ],
            "answer": "B. Crucial business rules (like prerequisites and scholarship discounts) will be missed, resulting in massive rework and user rejection.",
            "explanation": "Model Analysis: 1) Missing Crucial Features: Prerequisite checks, discounts, or specific report formats will be omitted without stakeholder consultation. 2) Usability Failure: Illogical UI for office staff. 3) Faulty Reporting: Non-compliance with regulatory standards. SAD prevents this by conducting stakeholder interviews first (requirements), constructing UI mockups (design), and setting validation rules before coding."
        },
        {
            "id": "m1-q22",
            "number": 22,
            "type": "scenario",
            "category": "Scenario Application",
            "question": "In an Online Food Delivery Application (e.g., GrabFood or Foodpanda), which pairing correctly identifies a system component and its real-world implementation?",
            "options": [
                "A. Input — A printed receipt handed to the customer",
                "B. Process — Customer address and credit card information typed into the app",
                "C. Feedback — Customer star rating (1-5 stars) and driver review submitted after delivery",
                "D. Control — Calculating the subtotal, delivery fee, and applicable discounts"
            ],
            "answer": "C. Feedback — Customer star rating (1-5 stars) and driver review submitted after delivery",
            "explanation": "Food Delivery App Components: 1. Input: Customer address, cart items, payment details. 2. Process: Computing subtotal/fees, matching nearest GPS rider. 3. Output: Digital order receipt, real-time rider tracking map. 4. Feedback: Star ratings and written reviews to evaluate service. 5. Control: OTP/2FA authentication and restaurant merchant verification."
        }
    ]
}

print("Module 1 defined successfully!")
