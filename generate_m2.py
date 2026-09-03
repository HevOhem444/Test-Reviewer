# Script to generate Module 2: Software Development Lifecycle (SDLC)
import json

module_2 = {
    "id": "module-2-sdlc",
    "title": "Module 2: Software Development Lifecycle (SDLC)",
    "subtitle": "7 Sequential Phases, Testing Methodologies & Lifecycle Pros/Cons",
    "description": "Complete guide covering the 7 SDLC phases (Planning, Analysis, Design, Coding, Testing, Deployment, Maintenance), key deliverables (SRS, SDD), the 4 core testing levels (Unit, Integration, System, UAT), and lifecycle pros/cons.",
    "icon": "fa-arrows-spin",
    "badge": "MELEC 9: System Need Analysis",
    "themeColor": "#10b981", # Emerald Green
    "accentGradient": "linear-gradient(135deg, #059669 0%, #10b981 100%)",
    "study": [
        {
            "id": "m2-part1",
            "title": "I. Definition and Core Purpose of the SDLC",
            "icon": "fa-circle-notch",
            "sections": [
                {
                    "subtitle": "What is the SDLC?",
                    "content": """
The **Software Development Life Cycle (SDLC)** is a structured, step-by-step framework used by software engineering teams to plan, design, build, test, deploy, and maintain information systems throughout their entire operational life.

#### Why is SDLC Indispensable?
Without a disciplined lifecycle, software development devolves into chaos — deadlines are missed, costs skyrocket, code is full of bugs, and the final application fails to solve the client's actual business problems. SDLC provides a predictable roadmap that guarantees quality, accountability, risk reduction, and cost control.
"""
                }
            ]
        },
        {
            "id": "m2-part2",
            "title": "II. The Seven (7) Sequential Phases of the SDLC",
            "icon": "fa-list-ol",
            "sections": [
                {
                    "subtitle": "Phases, Objectives & Key Deliverables",
                    "content": """
In foundational linear/sequential software development, each phase produces specific tangible deliverables that serve as mandatory prerequisites for the succeeding stage:
"""
                },
                {
                    "subtitle": "The 7 Phases Matrix",
                    "table": {
                        "headers": ["Phase No. & Name", "Primary Objective & Activities", "Key Deliverable / Output"],
                        "rows": [
                            ["1. Planning", "Determine project feasibility, estimate budget, establish timelines, identify risks, and assign team personnel.", "Project Charter, Feasibility Study, Budget & Schedule."],
                            ["2. Requirements Analysis", "Gather detailed business needs from stakeholders via interviews, surveys, and observation; clarify functional rules.", "Software Requirements Specification (SRS)."],
                            ["3. System Design", "Architect the technical blueprint: database ERDs, UI wireframes, process flowcharts, system architecture, and security rules.", "System Design Document (SDD), ERD, UI Mockups."],
                            ["4. Development (Coding)", "Programmers write source code, compile executable modules, build APIs, and construct the actual physical database tables.", "Source Code, Executable Application, Database Schema."],
                            ["5. Testing", "Execute test cases to detect logic flaws, security bugs, interface errors, and verify compliance with SRS requirements.", "Test Plan, Test Cases, Defect Log / Bug Reports."],
                            ["6. Deployment (Implementation)", "Install software on production servers, conduct user training, migrate legacy databases, and launch the system.", "User Manuals, Production Deployment, Live System."],
                            ["7. Maintenance", "Provide ongoing software support, patch security vulnerabilities, correct user-reported bugs, and implement feature upgrades.", "Change Requests, Bug Fixes, Patches, Version Updates."]
                        ]
                    }
                }
            ]
        },
        {
            "id": "m2-part3",
            "title": "III. Deep-Dive: Phase 5 Software Testing Methodologies",
            "icon": "fa-vial-circle-check",
            "sections": [
                {
                    "subtitle": "The Four (4) Critical Testing Levels",
                    "content": """
Testing occurs hierarchically from the smallest programmatic units up to real-world end-user acceptance:
"""
                },
                {
                    "subtitle": "Testing Hierarchy Matrix",
                    "table": {
                        "headers": ["Testing Level", "Scope & Objective", "Executed By", "Real-World Example"],
                        "rows": [
                            ["1. Unit Testing", "Testing individual functions, classes, or routines in total isolation.", "Software Developers", "Testing that `calculateDiscount()` correctly calculates a 10% student discount."],
                            ["2. Integration Testing", "Verifying that combined software units/modules exchange data accurately.", "Developers & QA Engineers", "Testing that Student Registration data successfully passes into the Billing module."],
                            ["3. System Testing", "Evaluating the complete, end-to-end integrated application against SRS specifications.", "Dedicated QA Team", "Simulating 1,000 simultaneous users logging in and testing full system workflows."],
                            ["4. User Acceptance Testing (UAT)", "Final verification by actual end-users in an operational environment before formal sign-off.", "Actual Clients & End-Users", "School registrar verifies that student records match university graduation policies."]
                        ]
                    }
                }
            ]
        },
        {
            "id": "m2-part4",
            "title": "IV. Advantages and Disadvantages of the SDLC",
            "icon": "fa-scale-balanced",
            "sections": [
                {
                    "subtitle": "Strategic Trade-Offs",
                    "table": {
                        "headers": ["Category", "Key Points & Details"],
                        "rows": [
                            ["Advantages", "• Structured, predictable roadmap with clear accountability and milestones.<br>• Thorough documentation ensures maintainability even if developers leave.<br>• Errors detected early in planning/analysis save up to 50x in repair costs.<br>• High-quality output with rigorous stage-gate verification."],
                            ["Disadvantages", "• Highly rigid: Backtracking to modify approved requirements mid-project is costly.<br>• Delayed working software: Working code is not delivered until late in the lifecycle.<br>• Heavy administrative overhead and documentation burden.<br>• Assumes requirements are completely known and unchanging upfront."]
                        ]
                    }
                }
            ]
        },
        {
            "id": "m2-high-yield",
            "title": "V. High-Yield Exam Summary Points",
            "icon": "fa-bolt",
            "sections": [
                {
                    "subtitle": "Quick Memory Anchors",
                    "content": """
- **SDLC Sequence**: Planning ➔ Analysis ➔ Design ➔ Coding ➔ Testing ➔ Deployment ➔ Maintenance.
- **SRS (Software Requirements Specification)**: Output of Phase 2 (Analysis); acts as a formal contract between client and developers.
- **Unit Testing**: Tests isolated functions/code units (conducted by developers).
- **Integration Testing**: Tests interfaces and data exchange between linked modules.
- **System Testing**: End-to-end full system testing by QA engineers.
- **UAT (User Acceptance Testing)**: Conducted by **actual end-users / clients** prior to production rollout.
- **Maintenance**: Typically the longest and most costly phase over the software's lifespan.
- **Backtracking**: Modifying requirements in later phases causes massive budget and time inflation.
"""
                }
            ]
        }
    ],
    "questions": [
        # Multiple Choice (1-10)
        {
            "id": "m2-q1",
            "number": 1,
            "type": "mcq",
            "category": "Multiple Choice",
            "question": "What is the official tangible deliverable produced at the conclusion of the Requirements Analysis phase?",
            "options": [
                "A. Entity-Relationship Diagram (ERD)",
                "B. Software Requirements Specification (SRS)",
                "C. Executable Application File (.exe)",
                "D. Post-Implementation Review Report"
            ],
            "answer": "B. Software Requirements Specification (SRS)",
            "explanation": "The Software Requirements Specification (SRS) is the formal document containing all functional and non-functional requirements compiled during requirements analysis."
        },
        {
            "id": "m2-q2",
            "number": 2,
            "type": "mcq",
            "category": "Multiple Choice",
            "question": "In which phase of the SDLC do programmers physically write application source code and configure databases?",
            "options": ["A. System Design", "B. Development (Coding)", "C. Requirements Analysis", "D. Deployment"],
            "answer": "B. Development (Coding)",
            "explanation": "Actual programming, scripting, database schema generation, and source code development occur during Phase 4: Development (Coding)."
        },
        {
            "id": "m2-q3",
            "number": 3,
            "type": "mcq",
            "category": "Multiple Choice",
            "question": "Testing an individual function in isolation (such as a discount calculation formula) is classified as:",
            "options": ["A. User Acceptance Testing (UAT)", "B. Integration Testing", "C. Unit Testing", "D. Stress Testing"],
            "answer": "C. Unit Testing",
            "explanation": "Unit testing verifies that individual functions, routines, methods, or components operate correctly in complete isolation."
        },
        {
            "id": "m2-q4",
            "number": 4,
            "type": "mcq",
            "category": "Multiple Choice",
            "question": "Which SDLC phase occurs immediately after System Design is officially approved?",
            "options": ["A. Testing", "B. Planning", "C. Development (Coding)", "D. Deployment"],
            "answer": "C. Development (Coding)",
            "explanation": "Once the architectural blueprint (System Design) is completed and approved, developers proceed to Phase 4: Development (Coding)."
        },
        {
            "id": "m2-q5",
            "number": 5,
            "type": "mcq",
            "category": "Multiple Choice",
            "question": "Conducting user training, migrating legacy databases to production servers, and officially launching the software belongs to:",
            "options": ["A. Maintenance", "B. Deployment", "C. System Design", "D. Feasibility Analysis"],
            "answer": "B. Deployment",
            "explanation": "Deployment encompasses server provisioning, data migration, user onboarding/training, and official live rollout."
        },
        {
            "id": "m2-q6",
            "number": 6,
            "type": "mcq",
            "category": "Multiple Choice",
            "question": "A university registrar officially validates that the enrollment system operates according to university policies before sign-off. What type of testing is this?",
            "options": ["A. Unit Testing", "B. Regression Testing", "C. User Acceptance Testing (UAT)", "D. Syntax Checking"],
            "answer": "C. User Acceptance Testing (UAT)",
            "explanation": "User Acceptance Testing (UAT) is the critical final verification where actual end-users/clients confirm the software fulfills business requirements."
        },
        {
            "id": "m2-q7",
            "number": 7,
            "type": "mcq",
            "category": "Multiple Choice",
            "question": "Six months after deployment, a university decides to add an automated GCash payment gateway. Which phase manages this modification?",
            "options": ["A. Maintenance", "B. System Design", "C. Planning", "D. Unit Testing"],
            "answer": "A. Maintenance",
            "explanation": "Post-launch software enhancements, new API integrations, and bug fixes belong exclusively to the Maintenance phase."
        },
        {
            "id": "m2-q8",
            "number": 8,
            "type": "mcq",
            "category": "Multiple Choice",
            "question": "Creating UI wireframes, page mockups, and database table structures occurs during which phase?",
            "options": ["A. System Design", "B. Requirements Analysis", "C. Development", "D. Maintenance"],
            "answer": "A. System Design",
            "explanation": "System Design constructs the architectural blueprints: ERDs, UI mockups, interface layouts, and technical data schemas."
        },
        {
            "id": "m2-q9",
            "number": 9,
            "type": "mcq",
            "category": "Multiple Choice",
            "question": "Which phase is widely recognized as the foundational phase determining project viability and budget constraints?",
            "options": ["A. Planning", "B. Coding", "C. Testing", "D. Deployment"],
            "answer": "A. Planning",
            "explanation": "Planning establishes project feasibility, resource allocations, timeline schedules, risk assessments, and financial budgets."
        },
        {
            "id": "m2-q10",
            "number": 10,
            "type": "mcq",
            "category": "Multiple Choice",
            "question": "Testing whether the Student Registration module correctly transfers student data into the Billing module is an example of:",
            "options": ["A. Unit Testing", "B. Integration Testing", "C. Acceptance Testing", "D. Alpha Testing"],
            "answer": "B. Integration Testing",
            "explanation": "Integration testing verifies that distinct software units or sub-systems interface and exchange data seamlessly without errors."
        },
        # Part II: Identification / Sequence (11-15)
        {
            "id": "m2-q11",
            "number": 11,
            "type": "identification",
            "category": "Identification / Sequence",
            "question": "The type of testing conducted to ensure that distinct software modules interface and exchange data seamlessly:",
            "options": ["Integration Testing", "Unit Testing", "System Testing", "User Acceptance Testing (UAT)"],
            "answer": "Integration Testing",
            "explanation": "Integration Testing verifies communication, protocols, and data exchange across module boundaries."
        },
        {
            "id": "m2-q12",
            "number": 12,
            "type": "identification",
            "category": "Identification / Sequence",
            "question": "The final phase of the SDLC where software is continuously patched, enhanced, and supported post-launch:",
            "options": ["Maintenance", "Deployment", "Testing", "Planning"],
            "answer": "Maintenance",
            "explanation": "Maintenance is the ongoing, long-term phase dedicated to bug fixes, system updates, and feature enhancements."
        },
        {
            "id": "m2-q13",
            "number": 13,
            "type": "identification",
            "category": "Identification / Sequence",
            "question": "The deliverable produced during the System Design phase that outlines database tables and relationships:",
            "options": ["Entity-Relationship Diagram (ERD) / Database Schema", "SRS", "Test Cases", "Project Charter"],
            "answer": "Entity-Relationship Diagram (ERD) / Database Schema",
            "explanation": "An Entity-Relationship Diagram (ERD) or Database Schema maps entities, attributes, primary/foreign keys, and data relationships."
        },
        {
            "id": "m2-q14",
            "number": 14,
            "type": "identification",
            "category": "Identification / Sequence",
            "question": "The phase that answers the core question: 'What should the software actually do from the user's perspective?':",
            "options": ["Requirements Analysis", "System Design", "Coding", "Testing"],
            "answer": "Requirements Analysis",
            "explanation": "Requirements Analysis focuses on uncovering and detailing stakeholder needs and defining 'WHAT' the system must accomplish."
        },
        {
            "id": "m2-q15",
            "number": 15,
            "type": "identification",
            "category": "Identification / Sequence",
            "question": "The phase during which end-users undergo formal training and the software is installed onto operational servers:",
            "options": ["Deployment", "Planning", "System Design", "Testing"],
            "answer": "Deployment",
            "explanation": "Deployment (Implementation) encompasses server rollout, data migration, user onboarding/training, and go-live operations."
        },
        # Part III: True or False (16-20)
        {
            "id": "m2-q16",
            "number": 16,
            "type": "tf",
            "category": "True or False",
            "question": "In standard SDLC methodology, programmers should begin writing code prior to finalizing system requirements and design blueprints.",
            "options": ["True", "False"],
            "answer": "False",
            "explanation": "False — Coding before requirements and architecture are established causes severe defects, misaligned features, and costly redesign."
        },
        {
            "id": "m2-q17",
            "number": 17,
            "type": "tf",
            "category": "True or False",
            "question": "User Acceptance Testing (UAT) is performed exclusively by internal software developers without involving any actual end-users.",
            "options": ["True", "False"],
            "answer": "False",
            "explanation": "False — UAT must be performed by actual clients and end-users to confirm the system solves real-world workflow needs."
        },
        {
            "id": "m2-q18",
            "number": 18,
            "type": "tf",
            "category": "True or False",
            "question": "The Software Requirements Specification (SRS) acts as an agreed-upon contract between the client and the development team.",
            "options": ["True", "False"],
            "answer": "True",
            "explanation": "True — The SRS establishes a binding, agreed baseline of functional and non-functional requirements between clients and engineers."
        },
        {
            "id": "m2-q19",
            "number": 19,
            "type": "tf",
            "category": "True or False",
            "question": "Maintenance is often the longest and most resource-intensive phase across the full operational life of enterprise software.",
            "options": ["True", "False"],
            "answer": "True",
            "explanation": "True — While development takes months, maintenance typically spans 5 to 15+ years throughout the software's active operational life."
        },
        {
            "id": "m2-q20",
            "number": 20,
            "type": "tf",
            "category": "True or False",
            "question": "One recognized drawback of the traditional SDLC is that changing requirements mid-development can significantly escalate costs.",
            "options": ["True", "False"],
            "answer": "True",
            "explanation": "True — In sequential SDLC models, late requirement changes force extensive backtracking through design, code, and test cases."
        },
        # Part IV: Scenario Application (21-22)
        {
            "id": "m2-q21",
            "number": 21,
            "type": "scenario",
            "category": "Scenario Application",
            "question": "In an Online Library Management System for a college, which set represents valid functional user requirements documented during Requirements Analysis?",
            "options": [
                "A. Book search & real-time cataloging, automated reservations, overdue fine computation, borrowing history, and inventory management",
                "B. Choosing between PostgreSQL and MySQL for database clustering",
                "C. Soldering network cables and purchasing server rack chassis",
                "D. Writing unit tests in Jest for mathematical functions"
            ],
            "answer": "A. Book search & real-time cataloging, automated reservations, overdue fine computation, borrowing history, and inventory management",
            "explanation": "Model Answer: Functional requirements define what capabilities users need: 1) Book search/cataloging, 2) Online borrowing/reservation, 3) Automated overdue fine computation (e.g., Php 10/day), 4) Account borrowing history, 5) Librarian acquisition and inventory management. (Options B, C, and D represent design, hardware procurement, and testing)."
        },
        {
            "id": "m2-q22",
            "number": 22,
            "type": "scenario",
            "category": "Scenario Application",
            "question": "A team manager suggests skipping the Testing phase to release an enterprise student portal two weeks early. What catastrophic consequences does this risk?",
            "options": [
                "A. Developers will get bored with no code to write.",
                "B. Production crashes under enrollment traffic, data corruption in tuition balances, and critical security vulnerabilities like SQL injection.",
                "C. The server CPU usage will permanently drop to zero.",
                "D. Users will praise the speed of the deployment."
            ],
            "answer": "B. Production crashes under enrollment traffic, data corruption in tuition balances, and critical security vulnerabilities like SQL injection.",
            "explanation": "Model Answer: Testing prevents three catastrophic production outcomes: 1) Data Corruption & Inaccurate Calculations (e.g., faulty tuition fees or dropped records), 2) High-Traffic Downtime & Server Crashes (failure to handle peak student traffic), and 3) Security Breaches & Data Leaks (unpatched SQL injection or broken authorization exposing student records)."
        }
    ]
}

print("Module 2 defined successfully!")
