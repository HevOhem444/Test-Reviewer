window.REVIEWER_DATA = {
  "subject": {
    "id": "melec-9",
    "code": "BSIT MELEC 9",
    "title": "System Need Analysis",
    "subtitle": "Comprehensive Prelim Examination & Modular Study Reviewers",
    "description": "Comprehensive unified study reviewers and 100-item practice examination covering Systems Analysis & Design (SAD), SDLC Phases & Testing, Project Planning & TELOS Feasibility, and Requirements Gathering Techniques.",
    "badge": "BSIT MELEC 9 • Prelim Examination",
    "themeColor": "#6366f1",
    "accentGradient": "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #06b6d4 100%)"
  },
  "modules": [
    {
      "id": "module-1-sad",
      "title": "Module 1: Intro to Systems Analysis & Design (SAD)",
      "subtitle": "Foundations, System Components, Roles & Core Skills",
      "description": "Comprehensive guide covering the 5 system components (Input, Process, Output, Feedback, Control), Analysis vs Design boundary, System Analyst bridge role & 4 core skill sets, and 10 strategic benefits of SAD.",
      "icon": "fa-diagram-project",
      "badge": "MELEC 9: System Need Analysis",
      "themeColor": "#3b82f6",
      "accentGradient": "linear-gradient(135deg, #2563eb 0%, #38bdf8 100%)",
      "study": [
        {
          "id": "m1-part1",
          "title": "I. Core Concepts & Foundations",
          "icon": "fa-cubes",
          "sections": [
            {
              "subtitle": "1. What is a System?",
              "content": "\nA **system** is a collection of interrelated components working together toward a common goal by accepting inputs, processing them, and producing structured outputs.\n\nInformation systems combine hardware, software, data, procedures, and people to collect, store, process, and distribute information to support decision-making and operational control.\n"
            },
            {
              "subtitle": "The Five (5) Components of a System",
              "table": {
                "headers": [
                  "Component",
                  "Core Function / Definition",
                  "School Enrollment System Example"
                ],
                "rows": [
                  [
                    "1. Input",
                    "Data, materials, or resources entered into the system.",
                    "Student personal info, selected subjects, payment slips."
                  ],
                  [
                    "2. Process",
                    "Activities and transformations applied to input data.",
                    "Validating credentials, calculating tuition, assigning subjects."
                  ],
                  [
                    "3. Output",
                    "The resulting information, reports, or services produced.",
                    "Certificate of Registration (COR), class schedule, official receipt."
                  ],
                  [
                    "4. Feedback",
                    "Evaluation data used to assess performance and make adjustments.",
                    "Student verifies enrollment details; system logs error prompts."
                  ],
                  [
                    "5. Control",
                    "Rules, permissions, and procedures that govern correct operations.",
                    "Only authorized registrar/cashier staff can approve enrollment transactions."
                  ]
                ]
              }
            },
            {
              "subtitle": "Exam Tip / Critical Concept: Input vs. Output vs. Control",
              "content": "\n- **Input**: Raw data and resources injected into the system.\n- **Process**: Computation, transformation logic, algorithms, and business rules.\n- **Output**: Finished information, printable documents, receipts, dashboards, and reports.\n- **Feedback**: Reactive signals, user validation, telemetry, and error logging used to adjust performance.\n- **Control**: Security policies, user role privileges (RBAC), auditing, and approval safeguards.\n"
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
              "content": "\nUnderstanding the fundamental boundary between the **Analysis** phase and the **Design** phase is one of the most critical exam topics:\n"
            },
            {
              "subtitle": "Comprehensive Comparison Matrix",
              "table": {
                "headers": [
                  "Criterion",
                  "System Analysis (What?)",
                  "System Design (How?)"
                ],
                "rows": [
                  [
                    "Core Focus",
                    "Understanding the problem, existing processes, and business requirements.",
                    "Creating the technical blueprint and specification for the solution."
                  ],
                  [
                    "Guiding Question",
                    "\"What does the organization and user need the system to do?\"",
                    "\"How will the system physically fulfill those requirements?\""
                  ],
                  [
                    "Primary Activities",
                    "Interviews, observations, surveys, analyzing legacy documents, workflows.",
                    "Designing user interfaces (UI), database schemas (ERD), process models, security."
                  ],
                  [
                    "Primary Deliverables",
                    "Problem statement, Software Requirements Specification (SRS), user stories.",
                    "Wireframes, mockups, data flow diagrams (DFD), database tables, architecture charts."
                  ],
                  [
                    "Target Audience",
                    "Business owners, end-users, domain specialists, management.",
                    "Software engineers, database administrators, UI/UX designers, developers."
                  ]
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
              "content": "\n**System Analysis and Design (SAD)** is the systematic process of studying an existing or proposed business system, identifying user requirements, and designing an efficient computer-based solution to solve organizational problems.\n\n#### The Danger of Skipping SAD vs. Benefits of Applying SAD:\n- **Without SAD**: Programmers jump straight into coding without consulting stakeholders. Results: missing vital features, wrong reports, poor user adoption, massive budget overruns, and severe software bugs.\n- **With SAD**: Thorough requirements elicitation occurs first. Results: clear roadmap, accurate data modeling, alignment with actual user workflows, robust security, lower maintenance costs, and high user satisfaction.\n"
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
              "content": "\nA **System Analyst** serves as a vital **bridge / translator** between non-technical business stakeholders (clients, managers, end-users) and technical personnel (programmers, database admins, network engineers).\n\n#### Three (3) Core Responsibilities:\n1. **Problem Identification**: Investigating business inefficiencies, bottlenecks, and user complaints in the current operational workflow.\n2. **Requirements Elicitation**: Actively gathering, clarifying, and documenting functional and non-functional requirements from stakeholders.\n3. **Solution Modeling**: Designing technical blueprints, Data Flow Diagrams (DFDs), Entity-Relationship Diagrams (ERDs), and workflow models for developers.\n"
            },
            {
              "subtitle": "Four (4) Core Skill Sets of a System Analyst",
              "table": {
                "headers": [
                  "Skill Category",
                  "Core Focus & Description",
                  "Real-World Application"
                ],
                "rows": [
                  [
                    "1. Analytical Skills",
                    "Systems thinking, problem-solving, decomposing complex workflows into logical components.",
                    "Diagnosing why enrollment queues take 4 hours and mapping data bottlenecks."
                  ],
                  [
                    "2. Technical Skills",
                    "Understanding databases, programming concepts, hardware architecture, networking, and APIs.",
                    "Communicating effectively with database administrators about foreign keys and index performance."
                  ],
                  [
                    "3. Management Skills",
                    "Resource planning, project scheduling, risk mitigation, and budget tracking.",
                    "Managing timeline milestones and keeping project tasks on schedule."
                  ],
                  [
                    "4. Interpersonal Skills",
                    "Communication, active listening, negotiation, diplomacy, and conflict resolution.",
                    "Mediating between conflicting department heads demanding contradictory features."
                  ]
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
              "content": "\n1. **Lower Cost of Changes**: Finding errors in the analysis phase is 10x to 50x cheaper than fixing bugs in production.\n2. **Clear Project Scope**: Prevents uncontrolled feature expansion (Scope Creep).\n3. **Higher Software Quality**: Systematic design leads to fewer logic flaws and crashes.\n4. **Improved User Adoption**: Involving users early ensures the system matches daily workflows.\n5. **Accurate Cost & Time Estimates**: Solid planning prevents surprise budget deficits.\n6. **Optimized Resource Allocation**: Assigns personnel and hardware efficiently.\n7. **Robust Documentation**: Enables future developers to maintain and update the codebase.\n8. **Enhanced Data Security**: Identifies role-based access rules and data vulnerabilities during design.\n9. **Better Regulatory Compliance**: Ensures systems meet privacy and accounting laws.\n10. **Scalable Architecture**: Allows the software to grow alongside the business without rebuilding from scratch.\n"
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
              "content": "\n- **System**: Interrelated components working toward a common goal (Input ➔ Process ➔ Output, regulated by Feedback & Control).\n- **Analysis**: **WHAT** the system must do (User requirements, interviews, SRS document).\n- **Design**: **HOW** the system will physically do it (Blueprints, ERDs, DFDs, database schemas, UI wireframes).\n- **System Analyst**: The **bridge / translator** between business clients and software developers.\n- **Interpersonal Skills**: Essential for conflict resolution and stakeholder consensus.\n- **Cost of Fixing Errors**: Lowest during Analysis; highest during Maintenance.\n- **Control Component**: Enforces authorization, permissions (RBAC), and security integrity.\n"
            }
          ]
        }
      ],
      "questions": [
        {
          "id": "m1-q1",
          "number": 1,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "In a school grading system, which component ensures that only authorized faculty members can enter student grades?",
          "options": [
            "A. Input",
            "B. Process",
            "C. Control",
            "D. Feedback"
          ],
          "answer": "C. Control",
          "explanation": "Control encompasses rules, authorization safeguards, and access privileges (such as RBAC) ensuring the system operates securely and validly.",
          "moduleId": "module-1-sad",
          "moduleTitle": "Module 1: SAD"
        },
        {
          "id": "m1-q2",
          "number": 2,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "A student receives a printed Certificate of Registration (COR) after enrolling. In system terminology, this document is classified as:",
          "options": [
            "A. Input",
            "B. Output",
            "C. Process",
            "D. Feedback"
          ],
          "answer": "B. Output",
          "explanation": "The Certificate of Registration (COR) is generated information produced by the system for the student and faculty.",
          "moduleId": "module-1-sad",
          "moduleTitle": "Module 1: SAD"
        },
        {
          "id": "m1-q3",
          "number": 3,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "A developer began coding a hospital billing application without consulting the billing staff or accounting officers. Which fundamental phase did the developer bypass?",
          "options": [
            "A. System Analysis",
            "B. Compilation",
            "C. Hardware Setup",
            "D. User Acceptance Testing"
          ],
          "answer": "A. System Analysis",
          "explanation": "The developer bypassed analyzing the existing problem and eliciting user requirements directly from hospital stakeholders.",
          "moduleId": "module-1-sad",
          "moduleTitle": "Module 1: SAD"
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
          "explanation": "Analysis defines 'WHAT' must be solved; Design defines 'HOW' the technology will physically solve it.",
          "moduleId": "module-1-sad",
          "moduleTitle": "Module 1: SAD"
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
          "explanation": "Analysts translate ambiguous operational needs into technical specifications and blueprints that coders can build.",
          "moduleId": "module-1-sad",
          "moduleTitle": "Module 1: SAD"
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
          "explanation": "Interviewing frontline staff to discover operational pain points and compiling requirements is a core analyst responsibility.",
          "moduleId": "module-1-sad",
          "moduleTitle": "Module 1: SAD"
        },
        {
          "id": "m1-q7",
          "number": 7,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Which skill category enables an analyst to resolve disagreements between two department heads who demand conflicting system features?",
          "options": [
            "A. Technical Skills",
            "B. Interpersonal Skills",
            "C. Programming Skills",
            "D. Hardware Architecture Skills"
          ],
          "answer": "B. Interpersonal Skills",
          "explanation": "Negotiation, diplomacy, conflict resolution, and active listening belong to the interpersonal skill domain.",
          "moduleId": "module-1-sad",
          "moduleTitle": "Module 1: SAD"
        },
        {
          "id": "m1-q8",
          "number": 8,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Data Flow Diagrams (DFDs) and Entity-Relationship Diagrams (ERDs) are primarily constructed during which phase?",
          "options": [
            "A. System Analysis and Design",
            "B. Hardware Procurement",
            "C. End-User Training",
            "D. Decommissioning"
          ],
          "answer": "A. System Analysis and Design",
          "explanation": "DFDs and ERDs are standard analytical and design modeling tools used to map data flow and logical data structures.",
          "moduleId": "module-1-sad",
          "moduleTitle": "Module 1: SAD"
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
          "explanation": "Software engineering studies show fixing defects post-release is 10x to 50x more expensive due to redesign, re-testing, and redeployment.",
          "moduleId": "module-1-sad",
          "moduleTitle": "Module 1: SAD"
        },
        {
          "id": "m1-q10",
          "number": 10,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Incorporating Role-Based Access Control (RBAC) so that only cashiers can accept tuition payments directly supports which system component?",
          "options": [
            "A. Control",
            "B. Input",
            "C. Feedback",
            "D. Output"
          ],
          "answer": "A. Control",
          "explanation": "Role-based permissions (RBAC) restrict unauthorized actions, functioning as a vital system control mechanism.",
          "moduleId": "module-1-sad",
          "moduleTitle": "Module 1: SAD"
        },
        {
          "id": "m1-q11",
          "number": 11,
          "type": "identification",
          "category": "Identification / Terminology",
          "question": "The component of a system consisting of information or signals used to make adjustments and evaluate system performance:",
          "options": [
            "Feedback",
            "Control",
            "Process",
            "Output"
          ],
          "answer": "Feedback",
          "explanation": "Feedback consists of information returning from the environment or user to adjust, evaluate, or confirm system performance.",
          "moduleId": "module-1-sad",
          "moduleTitle": "Module 1: SAD"
        },
        {
          "id": "m1-q12",
          "number": 12,
          "type": "identification",
          "category": "Identification / Terminology",
          "question": "The specific IT professional responsible for studying business problems, gathering user requirements, and designing solutions:",
          "options": [
            "System Analyst",
            "Database Administrator",
            "Network Engineer",
            "Hardware Technician"
          ],
          "answer": "System Analyst",
          "explanation": "A System Analyst is the IT specialist who acts as a liaison and solution designer between business stakeholders and technical developers.",
          "moduleId": "module-1-sad",
          "moduleTitle": "Module 1: SAD"
        },
        {
          "id": "m1-q13",
          "number": 13,
          "type": "identification",
          "category": "Identification / Terminology",
          "question": "The developmental phase that serves as the technical 'blueprint' detailing user interfaces, database tables, and system architecture:",
          "options": [
            "System Design",
            "System Analysis",
            "Maintenance",
            "Testing"
          ],
          "answer": "System Design",
          "explanation": "System Design is the architectural and physical blueprint phase detailing how the software will physically meet user requirements.",
          "moduleId": "module-1-sad",
          "moduleTitle": "Module 1: SAD"
        },
        {
          "id": "m1-q14",
          "number": 14,
          "type": "identification",
          "category": "Identification / Terminology",
          "question": "The term for data, resources, or raw facts entered into an information system:",
          "options": [
            "Input",
            "Output",
            "Feedback",
            "Control"
          ],
          "answer": "Input",
          "explanation": "Input represents the raw data, transactions, and resources injected into the system for processing.",
          "moduleId": "module-1-sad",
          "moduleTitle": "Module 1: SAD"
        },
        {
          "id": "m1-q15",
          "number": 15,
          "type": "identification",
          "category": "Identification / Terminology",
          "question": "The core framework / acronym that encompasses understanding organizational problems and architecting effective computer-based solutions:",
          "options": [
            "System Analysis and Design (SAD)",
            "SDLC",
            "RBAC",
            "ERD"
          ],
          "answer": "System Analysis and Design (SAD)",
          "explanation": "System Analysis and Design (SAD) is the overall structured methodology of studying organizational problems and designing computer-based solutions.",
          "moduleId": "module-1-sad",
          "moduleTitle": "Module 1: SAD"
        },
        {
          "id": "m1-q16",
          "number": 16,
          "type": "tf",
          "category": "True or False",
          "question": "System Analysis focuses primarily on 'HOW' the software will be technically coded, while System Design focuses on 'WHAT' the business needs.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False",
          "explanation": "False — Analysis focuses on 'WHAT' the system must do; Design focuses on 'HOW' the technical solution will be constructed.",
          "moduleId": "module-1-sad",
          "moduleTitle": "Module 1: SAD"
        },
        {
          "id": "m1-q17",
          "number": 17,
          "type": "tf",
          "category": "True or False",
          "question": "System Analysts require strong business acumen because software must strictly align with organizational goals and commercial workflows.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True",
          "explanation": "True — Analysts must understand business workflows, accounting, and organizational objectives to design practical, effective software.",
          "moduleId": "module-1-sad",
          "moduleTitle": "Module 1: SAD"
        },
        {
          "id": "m1-q18",
          "number": 18,
          "type": "tf",
          "category": "True or False",
          "question": "Skipping System Analysis and Design usually accelerates total project completion and drastically reduces long-term software maintenance costs.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False",
          "explanation": "False — Skipping SAD leads to massive rework, feature omissions, budget overruns, and expensive post-release maintenance.",
          "moduleId": "module-1-sad",
          "moduleTitle": "Module 1: SAD"
        },
        {
          "id": "m1-q19",
          "number": 19,
          "type": "tf",
          "category": "True or False",
          "question": "Control procedures in a system ensure that only authorized users can perform sensitive transactions such as updating grades or issuing refunds.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True",
          "explanation": "True — Control mechanisms enforce security, auditing, and authorization policies across system operations.",
          "moduleId": "module-1-sad",
          "moduleTitle": "Module 1: SAD"
        },
        {
          "id": "m1-q20",
          "number": 20,
          "type": "tf",
          "category": "True or False",
          "question": "An effective System Analyst only needs programming knowledge; interpersonal and communication skills are completely optional.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False",
          "explanation": "False — Communication, negotiation, diplomacy, and interpersonal skills are equally or more critical than coding for an analyst.",
          "moduleId": "module-1-sad",
          "moduleTitle": "Module 1: SAD"
        },
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
          "explanation": "Model Analysis: 1) Missing Crucial Features: Prerequisite checks, discounts, or specific report formats will be omitted without stakeholder consultation. 2) Usability Failure: Illogical UI for office staff. 3) Faulty Reporting: Non-compliance with regulatory standards. SAD prevents this by conducting stakeholder interviews first (requirements), constructing UI mockups (design), and setting validation rules before coding.",
          "moduleId": "module-1-sad",
          "moduleTitle": "Module 1: SAD"
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
          "explanation": "Food Delivery App Components: 1. Input: Customer address, cart items, payment details. 2. Process: Computing subtotal/fees, matching nearest GPS rider. 3. Output: Digital order receipt, real-time rider tracking map. 4. Feedback: Star ratings and written reviews to evaluate service. 5. Control: OTP/2FA authentication and restaurant merchant verification.",
          "moduleId": "module-1-sad",
          "moduleTitle": "Module 1: SAD"
        },
        {
          "id": "m1-q23",
          "number": 23,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Which strategic benefit of System Analysis and Design ensures that an information system can easily accommodate expanding student populations and transactions without requiring complete architectural replacement?",
          "options": [
            "A. Scalable Architecture",
            "B. Eliminating all need for servers",
            "C. Replacing all human employees",
            "D. Allowing unverified public database writes"
          ],
          "answer": "A. Scalable Architecture",
          "explanation": "Scalable architecture allows an information system to grow gracefully in data volume and traffic load over time without catastrophic architectural rebuilds.",
          "moduleId": "module-1-sad",
          "moduleTitle": "Module 1: SAD"
        },
        {
          "id": "m1-q24",
          "number": 24,
          "type": "identification",
          "category": "Identification / Core Skills",
          "question": "The specific skill set of a System Analyst encompassing project scheduling, resource allocation, and risk mitigation:",
          "options": [
            "Management Skills",
            "Analytical Skills",
            "Technical Skills",
            "Interpersonal Skills"
          ],
          "answer": "Management Skills",
          "explanation": "Management skills involve resource planning, scheduling milestones, controlling budget, and mitigating project risks.",
          "moduleId": "module-1-sad",
          "moduleTitle": "Module 1: SAD"
        },
        {
          "id": "m1-q25",
          "number": 25,
          "type": "tf",
          "category": "True or False",
          "question": "The primary tangible deliverable produced at the culmination of the System Analysis phase is the Software Requirements Specification (SRS).",
          "options": [
            "True",
            "False"
          ],
          "answer": "True",
          "explanation": "True — The SRS document formally captures the verified business and user requirements compiled during system analysis.",
          "moduleId": "module-1-sad",
          "moduleTitle": "Module 1: SAD"
        }
      ]
    },
    {
      "id": "module-2-sdlc",
      "title": "Module 2: Software Development Lifecycle (SDLC)",
      "subtitle": "7 Sequential Phases, Testing Methodologies & Lifecycle Pros/Cons",
      "description": "Complete guide covering the 7 SDLC phases (Planning, Analysis, Design, Coding, Testing, Deployment, Maintenance), key deliverables (SRS, SDD), the 4 core testing levels (Unit, Integration, System, UAT), and lifecycle pros/cons.",
      "icon": "fa-arrows-spin",
      "badge": "MELEC 9: System Need Analysis",
      "themeColor": "#10b981",
      "accentGradient": "linear-gradient(135deg, #059669 0%, #10b981 100%)",
      "study": [
        {
          "id": "m2-part1",
          "title": "I. Definition and Core Purpose of the SDLC",
          "icon": "fa-circle-notch",
          "sections": [
            {
              "subtitle": "What is the SDLC?",
              "content": "\nThe **Software Development Life Cycle (SDLC)** is a structured, step-by-step framework used by software engineering teams to plan, design, build, test, deploy, and maintain information systems throughout their entire operational life.\n\n#### Why is SDLC Indispensable?\nWithout a disciplined lifecycle, software development devolves into chaos — deadlines are missed, costs skyrocket, code is full of bugs, and the final application fails to solve the client's actual business problems. SDLC provides a predictable roadmap that guarantees quality, accountability, risk reduction, and cost control.\n"
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
              "content": "\nIn foundational linear/sequential software development, each phase produces specific tangible deliverables that serve as mandatory prerequisites for the succeeding stage:\n"
            },
            {
              "subtitle": "The 7 Phases Matrix",
              "table": {
                "headers": [
                  "Phase No. & Name",
                  "Primary Objective & Activities",
                  "Key Deliverable / Output"
                ],
                "rows": [
                  [
                    "1. Planning",
                    "Determine project feasibility, estimate budget, establish timelines, identify risks, and assign team personnel.",
                    "Project Charter, Feasibility Study, Budget & Schedule."
                  ],
                  [
                    "2. Requirements Analysis",
                    "Gather detailed business needs from stakeholders via interviews, surveys, and observation; clarify functional rules.",
                    "Software Requirements Specification (SRS)."
                  ],
                  [
                    "3. System Design",
                    "Architect the technical blueprint: database ERDs, UI wireframes, process flowcharts, system architecture, and security rules.",
                    "System Design Document (SDD), ERD, UI Mockups."
                  ],
                  [
                    "4. Development (Coding)",
                    "Programmers write source code, compile executable modules, build APIs, and construct the actual physical database tables.",
                    "Source Code, Executable Application, Database Schema."
                  ],
                  [
                    "5. Testing",
                    "Execute test cases to detect logic flaws, security bugs, interface errors, and verify compliance with SRS requirements.",
                    "Test Plan, Test Cases, Defect Log / Bug Reports."
                  ],
                  [
                    "6. Deployment (Implementation)",
                    "Install software on production servers, conduct user training, migrate legacy databases, and launch the system.",
                    "User Manuals, Production Deployment, Live System."
                  ],
                  [
                    "7. Maintenance",
                    "Provide ongoing software support, patch security vulnerabilities, correct user-reported bugs, and implement feature upgrades.",
                    "Change Requests, Bug Fixes, Patches, Version Updates."
                  ]
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
              "content": "\nTesting occurs hierarchically from the smallest programmatic units up to real-world end-user acceptance:\n"
            },
            {
              "subtitle": "Testing Hierarchy Matrix",
              "table": {
                "headers": [
                  "Testing Level",
                  "Scope & Objective",
                  "Executed By",
                  "Real-World Example"
                ],
                "rows": [
                  [
                    "1. Unit Testing",
                    "Testing individual functions, classes, or routines in total isolation.",
                    "Software Developers",
                    "Testing that `calculateDiscount()` correctly calculates a 10% student discount."
                  ],
                  [
                    "2. Integration Testing",
                    "Verifying that combined software units/modules exchange data accurately.",
                    "Developers & QA Engineers",
                    "Testing that Student Registration data successfully passes into the Billing module."
                  ],
                  [
                    "3. System Testing",
                    "Evaluating the complete, end-to-end integrated application against SRS specifications.",
                    "Dedicated QA Team",
                    "Simulating 1,000 simultaneous users logging in and testing full system workflows."
                  ],
                  [
                    "4. User Acceptance Testing (UAT)",
                    "Final verification by actual end-users in an operational environment before formal sign-off.",
                    "Actual Clients & End-Users",
                    "School registrar verifies that student records match university graduation policies."
                  ]
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
                "headers": [
                  "Category",
                  "Key Points & Details"
                ],
                "rows": [
                  [
                    "Advantages",
                    "• Structured, predictable roadmap with clear accountability and milestones.<br>• Thorough documentation ensures maintainability even if developers leave.<br>• Errors detected early in planning/analysis save up to 50x in repair costs.<br>• High-quality output with rigorous stage-gate verification."
                  ],
                  [
                    "Disadvantages",
                    "• Highly rigid: Backtracking to modify approved requirements mid-project is costly.<br>• Delayed working software: Working code is not delivered until late in the lifecycle.<br>• Heavy administrative overhead and documentation burden.<br>• Assumes requirements are completely known and unchanging upfront."
                  ]
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
              "content": "\n- **SDLC Sequence**: Planning ➔ Analysis ➔ Design ➔ Coding ➔ Testing ➔ Deployment ➔ Maintenance.\n- **SRS (Software Requirements Specification)**: Output of Phase 2 (Analysis); acts as a formal contract between client and developers.\n- **Unit Testing**: Tests isolated functions/code units (conducted by developers).\n- **Integration Testing**: Tests interfaces and data exchange between linked modules.\n- **System Testing**: End-to-end full system testing by QA engineers.\n- **UAT (User Acceptance Testing)**: Conducted by **actual end-users / clients** prior to production rollout.\n- **Maintenance**: Typically the longest and most costly phase over the software's lifespan.\n- **Backtracking**: Modifying requirements in later phases causes massive budget and time inflation.\n"
            }
          ]
        }
      ],
      "questions": [
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
          "explanation": "The Software Requirements Specification (SRS) is the formal document containing all functional and non-functional requirements compiled during requirements analysis.",
          "moduleId": "module-2-sdlc",
          "moduleTitle": "Module 2: SDLC"
        },
        {
          "id": "m2-q2",
          "number": 2,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "In which phase of the SDLC do programmers physically write application source code and configure databases?",
          "options": [
            "A. System Design",
            "B. Development (Coding)",
            "C. Requirements Analysis",
            "D. Deployment"
          ],
          "answer": "B. Development (Coding)",
          "explanation": "Actual programming, scripting, database schema generation, and source code development occur during Phase 4: Development (Coding).",
          "moduleId": "module-2-sdlc",
          "moduleTitle": "Module 2: SDLC"
        },
        {
          "id": "m2-q3",
          "number": 3,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Testing an individual function in isolation (such as a discount calculation formula) is classified as:",
          "options": [
            "A. User Acceptance Testing (UAT)",
            "B. Integration Testing",
            "C. Unit Testing",
            "D. Stress Testing"
          ],
          "answer": "C. Unit Testing",
          "explanation": "Unit testing verifies that individual functions, routines, methods, or components operate correctly in complete isolation.",
          "moduleId": "module-2-sdlc",
          "moduleTitle": "Module 2: SDLC"
        },
        {
          "id": "m2-q4",
          "number": 4,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Which SDLC phase occurs immediately after System Design is officially approved?",
          "options": [
            "A. Testing",
            "B. Planning",
            "C. Development (Coding)",
            "D. Deployment"
          ],
          "answer": "C. Development (Coding)",
          "explanation": "Once the architectural blueprint (System Design) is completed and approved, developers proceed to Phase 4: Development (Coding).",
          "moduleId": "module-2-sdlc",
          "moduleTitle": "Module 2: SDLC"
        },
        {
          "id": "m2-q5",
          "number": 5,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Conducting user training, migrating legacy databases to production servers, and officially launching the software belongs to:",
          "options": [
            "A. Maintenance",
            "B. Deployment",
            "C. System Design",
            "D. Feasibility Analysis"
          ],
          "answer": "B. Deployment",
          "explanation": "Deployment encompasses server provisioning, data migration, user onboarding/training, and official live rollout.",
          "moduleId": "module-2-sdlc",
          "moduleTitle": "Module 2: SDLC"
        },
        {
          "id": "m2-q6",
          "number": 6,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "A university registrar officially validates that the enrollment system operates according to university policies before sign-off. What type of testing is this?",
          "options": [
            "A. Unit Testing",
            "B. Regression Testing",
            "C. User Acceptance Testing (UAT)",
            "D. Syntax Checking"
          ],
          "answer": "C. User Acceptance Testing (UAT)",
          "explanation": "User Acceptance Testing (UAT) is the critical final verification where actual end-users/clients confirm the software fulfills business requirements.",
          "moduleId": "module-2-sdlc",
          "moduleTitle": "Module 2: SDLC"
        },
        {
          "id": "m2-q7",
          "number": 7,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Six months after deployment, a university decides to add an automated GCash payment gateway. Which phase manages this modification?",
          "options": [
            "A. Maintenance",
            "B. System Design",
            "C. Planning",
            "D. Unit Testing"
          ],
          "answer": "A. Maintenance",
          "explanation": "Post-launch software enhancements, new API integrations, and bug fixes belong exclusively to the Maintenance phase.",
          "moduleId": "module-2-sdlc",
          "moduleTitle": "Module 2: SDLC"
        },
        {
          "id": "m2-q8",
          "number": 8,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Creating UI wireframes, page mockups, and database table structures occurs during which phase?",
          "options": [
            "A. System Design",
            "B. Requirements Analysis",
            "C. Development",
            "D. Maintenance"
          ],
          "answer": "A. System Design",
          "explanation": "System Design constructs the architectural blueprints: ERDs, UI mockups, interface layouts, and technical data schemas.",
          "moduleId": "module-2-sdlc",
          "moduleTitle": "Module 2: SDLC"
        },
        {
          "id": "m2-q9",
          "number": 9,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Which phase is widely recognized as the foundational phase determining project viability and budget constraints?",
          "options": [
            "A. Planning",
            "B. Coding",
            "C. Testing",
            "D. Deployment"
          ],
          "answer": "A. Planning",
          "explanation": "Planning establishes project feasibility, resource allocations, timeline schedules, risk assessments, and financial budgets.",
          "moduleId": "module-2-sdlc",
          "moduleTitle": "Module 2: SDLC"
        },
        {
          "id": "m2-q10",
          "number": 10,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Testing whether the Student Registration module correctly transfers student data into the Billing module is an example of:",
          "options": [
            "A. Unit Testing",
            "B. Integration Testing",
            "C. Acceptance Testing",
            "D. Alpha Testing"
          ],
          "answer": "B. Integration Testing",
          "explanation": "Integration testing verifies that distinct software units or sub-systems interface and exchange data seamlessly without errors.",
          "moduleId": "module-2-sdlc",
          "moduleTitle": "Module 2: SDLC"
        },
        {
          "id": "m2-q11",
          "number": 11,
          "type": "identification",
          "category": "Identification / Sequence",
          "question": "The type of testing conducted to ensure that distinct software modules interface and exchange data seamlessly:",
          "options": [
            "Integration Testing",
            "Unit Testing",
            "System Testing",
            "User Acceptance Testing (UAT)"
          ],
          "answer": "Integration Testing",
          "explanation": "Integration Testing verifies communication, protocols, and data exchange across module boundaries.",
          "moduleId": "module-2-sdlc",
          "moduleTitle": "Module 2: SDLC"
        },
        {
          "id": "m2-q12",
          "number": 12,
          "type": "identification",
          "category": "Identification / Sequence",
          "question": "The final phase of the SDLC where software is continuously patched, enhanced, and supported post-launch:",
          "options": [
            "Maintenance",
            "Deployment",
            "Testing",
            "Planning"
          ],
          "answer": "Maintenance",
          "explanation": "Maintenance is the ongoing, long-term phase dedicated to bug fixes, system updates, and feature enhancements.",
          "moduleId": "module-2-sdlc",
          "moduleTitle": "Module 2: SDLC"
        },
        {
          "id": "m2-q13",
          "number": 13,
          "type": "identification",
          "category": "Identification / Sequence",
          "question": "The deliverable produced during the System Design phase that outlines database tables and relationships:",
          "options": [
            "Entity-Relationship Diagram (ERD) / Database Schema",
            "SRS",
            "Test Cases",
            "Project Charter"
          ],
          "answer": "Entity-Relationship Diagram (ERD) / Database Schema",
          "explanation": "An Entity-Relationship Diagram (ERD) or Database Schema maps entities, attributes, primary/foreign keys, and data relationships.",
          "moduleId": "module-2-sdlc",
          "moduleTitle": "Module 2: SDLC"
        },
        {
          "id": "m2-q14",
          "number": 14,
          "type": "identification",
          "category": "Identification / Sequence",
          "question": "The phase that answers the core question: 'What should the software actually do from the user's perspective?':",
          "options": [
            "Requirements Analysis",
            "System Design",
            "Coding",
            "Testing"
          ],
          "answer": "Requirements Analysis",
          "explanation": "Requirements Analysis focuses on uncovering and detailing stakeholder needs and defining 'WHAT' the system must accomplish.",
          "moduleId": "module-2-sdlc",
          "moduleTitle": "Module 2: SDLC"
        },
        {
          "id": "m2-q15",
          "number": 15,
          "type": "identification",
          "category": "Identification / Sequence",
          "question": "The phase during which end-users undergo formal training and the software is installed onto operational servers:",
          "options": [
            "Deployment",
            "Planning",
            "System Design",
            "Testing"
          ],
          "answer": "Deployment",
          "explanation": "Deployment (Implementation) encompasses server rollout, data migration, user onboarding/training, and go-live operations.",
          "moduleId": "module-2-sdlc",
          "moduleTitle": "Module 2: SDLC"
        },
        {
          "id": "m2-q16",
          "number": 16,
          "type": "tf",
          "category": "True or False",
          "question": "In standard SDLC methodology, programmers should begin writing code prior to finalizing system requirements and design blueprints.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False",
          "explanation": "False — Coding before requirements and architecture are established causes severe defects, misaligned features, and costly redesign.",
          "moduleId": "module-2-sdlc",
          "moduleTitle": "Module 2: SDLC"
        },
        {
          "id": "m2-q17",
          "number": 17,
          "type": "tf",
          "category": "True or False",
          "question": "User Acceptance Testing (UAT) is performed exclusively by internal software developers without involving any actual end-users.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False",
          "explanation": "False — UAT must be performed by actual clients and end-users to confirm the system solves real-world workflow needs.",
          "moduleId": "module-2-sdlc",
          "moduleTitle": "Module 2: SDLC"
        },
        {
          "id": "m2-q18",
          "number": 18,
          "type": "tf",
          "category": "True or False",
          "question": "The Software Requirements Specification (SRS) acts as an agreed-upon contract between the client and the development team.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True",
          "explanation": "True — The SRS establishes a binding, agreed baseline of functional and non-functional requirements between clients and engineers.",
          "moduleId": "module-2-sdlc",
          "moduleTitle": "Module 2: SDLC"
        },
        {
          "id": "m2-q19",
          "number": 19,
          "type": "tf",
          "category": "True or False",
          "question": "Maintenance is often the longest and most resource-intensive phase across the full operational life of enterprise software.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True",
          "explanation": "True — While development takes months, maintenance typically spans 5 to 15+ years throughout the software's active operational life.",
          "moduleId": "module-2-sdlc",
          "moduleTitle": "Module 2: SDLC"
        },
        {
          "id": "m2-q20",
          "number": 20,
          "type": "tf",
          "category": "True or False",
          "question": "One recognized drawback of the traditional SDLC is that changing requirements mid-development can significantly escalate costs.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True",
          "explanation": "True — In sequential SDLC models, late requirement changes force extensive backtracking through design, code, and test cases.",
          "moduleId": "module-2-sdlc",
          "moduleTitle": "Module 2: SDLC"
        },
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
          "explanation": "Model Answer: Functional requirements define what capabilities users need: 1) Book search/cataloging, 2) Online borrowing/reservation, 3) Automated overdue fine computation (e.g., Php 10/day), 4) Account borrowing history, 5) Librarian acquisition and inventory management. (Options B, C, and D represent design, hardware procurement, and testing).",
          "moduleId": "module-2-sdlc",
          "moduleTitle": "Module 2: SDLC"
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
          "explanation": "Model Answer: Testing prevents three catastrophic production outcomes: 1) Data Corruption & Inaccurate Calculations (e.g., faulty tuition fees or dropped records), 2) High-Traffic Downtime & Server Crashes (failure to handle peak student traffic), and 3) Security Breaches & Data Leaks (unpatched SQL injection or broken authorization exposing student records).",
          "moduleId": "module-2-sdlc",
          "moduleTitle": "Module 2: SDLC"
        },
        {
          "id": "m2-q23",
          "number": 23,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "In which testing methodology is the full, integrated system rigorously evaluated from end to end by a dedicated QA team against SRS specifications?",
          "options": [
            "A. Unit Testing",
            "B. System Testing",
            "C. Component Testing",
            "D. Code Syntax Verification"
          ],
          "answer": "B. System Testing",
          "explanation": "System Testing evaluates the entire compiled application as a complete system to ensure it strictly meets all functional and non-functional SRS requirements.",
          "moduleId": "module-2-sdlc",
          "moduleTitle": "Module 2: SDLC"
        },
        {
          "id": "m2-q24",
          "number": 24,
          "type": "identification",
          "category": "Identification / Deliverables",
          "question": "The formal document created in Phase 3 that specifies user interface wireframes, network architecture, and database tables:",
          "options": [
            "System Design Document (SDD)",
            "Project Charter",
            "Test Plan",
            "Bug Report"
          ],
          "answer": "System Design Document (SDD)",
          "explanation": "The System Design Document (SDD) serves as the technical blueprint outlining the technical architecture, UI layouts, and database schemas.",
          "moduleId": "module-2-sdlc",
          "moduleTitle": "Module 2: SDLC"
        },
        {
          "id": "m2-q25",
          "number": 25,
          "type": "tf",
          "category": "True or False",
          "question": "The traditional sequential SDLC easily accommodates major client requirement changes during Phase 5 (Testing) without significant cost inflation.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False",
          "explanation": "False — Making major requirement changes during testing forces backward iteration through design and coding, which inflates project expenses and timelines.",
          "moduleId": "module-2-sdlc",
          "moduleTitle": "Module 2: SDLC"
        }
      ]
    },
    {
      "id": "module-3-planning",
      "title": "Module 3: Project Planning & Feasibility Study",
      "subtitle": "6 Core Plan Components, Team Roles & The TELOS Framework",
      "description": "Master project planning fundamentals, the 6 core components (Objectives, Scope, Budget, Schedule, Resources, Risk), team roles (PM, Analyst, Dev, QA, Sponsor), and the complete TELOS feasibility evaluation framework.",
      "icon": "fa-list-check",
      "badge": "MELEC 9: System Need Analysis",
      "themeColor": "#f59e0b",
      "accentGradient": "linear-gradient(135deg, #d97706 0%, #fbbf24 100%)",
      "study": [
        {
          "id": "m3-part1",
          "title": "I. Understanding Project Planning",
          "icon": "fa-compass",
          "sections": [
            {
              "subtitle": "What is Project Planning?",
              "content": "\n**Project Planning** is the foundational process of organizing, estimating, and scheduling everything needed before software construction begins. It serves as the master roadmap that guides developers, management, and clients throughout the software lifecycle.\n\n#### Fundamental Planning Inquiries:\n- **What** specific system will be built?\n- **Who** will develop, test, and manage it?\n- **How much** capital/funding is required?\n- **How long** will development take?\n- **What resources** (hardware, software, personnel) are required?\n"
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
              "content": "\nEvery enterprise software project plan requires six mutually reinforcing components:\n"
            },
            {
              "subtitle": "Project Plan Components Matrix",
              "table": {
                "headers": [
                  "Component",
                  "Core Purpose & Definition",
                  "School Enrollment System Example"
                ],
                "rows": [
                  [
                    "1. Project Objectives",
                    "The explicit, high-level business goals and deliverables of the initiative.",
                    "Develop and deploy a cloud-based Online Enrollment and Grading System for the university."
                  ],
                  [
                    "2. Scope",
                    "Defines the precise boundaries: what is explicitly INCLUDED and what is EXCLUDED.",
                    "Included: Student registration, subject enrollment, grade viewing.<br>Excluded: Payroll, HR, and bookstore inventory."
                  ],
                  [
                    "3. Budget",
                    "Detailed financial estimates required to procure equipment, pay talent, and test.",
                    "Total: Php 800,000 (Php 500k dev salaries, Php 200k cloud servers, Php 100k contingency)."
                  ],
                  [
                    "4. Schedule & Milestones",
                    "Timelines, deadlines, and key stage-gate completion dates (Gantt chart).",
                    "Requirements: Month 1 | Design: Month 2 | Coding: Month 3 | UAT: Month 4 | Launch: Month 5."
                  ],
                  [
                    "5. Resource Allocation",
                    "Assigning Human (analysts, devs), Hardware (servers, PCs), and Software (IDEs, DBMS).",
                    "3 Developers, 1 Analyst, 1 QA Tester, AWS Cloud Instance, MySQL Database."
                  ],
                  [
                    "6. Risk Management",
                    "Identifying potential threats and formulating contingency and mitigation strategies.",
                    "Risk: Campus internet failure during finals.<br>Mitigation: Implement offline local cache and redundant 4G/5G backup."
                  ]
                ]
              }
            },
            {
              "subtitle": "Critical Warning: Scope Creep",
              "content": "\n**Scope Creep** refers to the uncontrolled, gradual addition of new features or demands without corresponding increases in budget, time, or resources. Clearly documenting what is **OUT OF SCOPE** is just as important as documenting what is IN SCOPE.\n"
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
                "headers": [
                  "Role",
                  "Primary Responsibilities",
                  "Core Deliverables"
                ],
                "rows": [
                  [
                    "Project Manager (PM)",
                    "Overall project leadership, budget tracking, milestone monitoring, risk management, and client coordination.",
                    "Project Charter, Gantt Chart, Status Reports, Budget Ledger."
                  ],
                  [
                    "System Analyst",
                    "Requirements elicitation, business process analysis, and architectural system blueprint design.",
                    "SRS Document, DFDs, ERDs, UI Mockups."
                  ],
                  [
                    "Software Developer / Programmer",
                    "Writing clean source code, building APIs, compiling applications, and creating database tables.",
                    "Application Code, Database Schema, Executable Builds."
                  ],
                  [
                    "Quality Assurance (QA) Tester",
                    "Designing and executing test plans, logging defects, verifying fixes, and stress-testing performance.",
                    "Test Plan, Test Scripts, Defect / Bug Log."
                  ],
                  [
                    "End-User / Client Sponsor",
                    "Providing domain requirements, clarifying operational rules, and performing final acceptance testing.",
                    "Business Needs, Feedback, UAT Sign-Off."
                  ]
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
              "content": "\nA **Feasibility Study** answers the pivotal question: **\"Should we build this project?\"** It evaluates the technical, financial, and organizational viability before significant capital and labor are committed.\n"
            },
            {
              "subtitle": "The TELOS Framework Matrix",
              "table": {
                "headers": [
                  "TELOS Dimension",
                  "Key Inquiry & Scope",
                  "Evaluation Focus"
                ],
                "rows": [
                  [
                    "T - Technical Feasibility",
                    "\"Do we have the technology and expertise?\"",
                    "Assesses team technical skills, hardware capability, network stability, and software compatibility."
                  ],
                  [
                    "E - Economic Feasibility",
                    "\"Is the project financially worthwhile?\"",
                    "Cost-Benefit Analysis, Return on Investment (ROI), ongoing operational maintenance expenses vs savings."
                  ],
                  [
                    "L - Legal Feasibility",
                    "\"Does the project comply with laws and contracts?\"",
                    "Data privacy laws (e.g. Philippine DPA of 2012), open-source license compliance, copyright, and industry regulations."
                  ],
                  [
                    "O - Operational Feasibility",
                    "\"Will the organization actually adopt and use it?\"",
                    "Staff acceptance, organizational culture, ease of use, training needs, and resistance to change."
                  ],
                  [
                    "S - Schedule Feasibility",
                    "\"Can we finish within the required timeframe?\"",
                    "Milestone timelines, development velocity, hard deadlines (e.g., semester opening, tax season)."
                  ]
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
              "content": "\n- **Project Plan Components**: Objectives, Scope, Budget, Schedule, Resources, Risk Management.\n- **Scope Creep**: Uncontrolled feature additions without budget/timeline adjustments.\n- **Project Manager (PM)**: Directs budget, milestones, timeline pacing, and resource allocations.\n- **TELOS Framework**:\n  - **T (Technical)**: Hardware, software, infrastructure, team technical skills.\n  - **E (Economic)**: Costs, ROI, Cost-Benefit Analysis.\n  - **L (Legal)**: Regulatory laws, Data Privacy Act (DPA 2012), licenses, copyright.\n  - **O (Operational)**: User willingness, job workflow fit, training, change resistance.\n  - **S (Schedule)**: Completion deadlines, time constraints.\n- **Failure in Operational Feasibility**: Software can be technically flawless and profitable, but fail completely because staff refuse to use it.\n"
            }
          ]
        }
      ],
      "questions": [
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
          "explanation": "A feasibility study establishes overall viability, risk, and strategic justification before an organization commits funding and human resources.",
          "moduleId": "module-3-planning",
          "moduleTitle": "Module 3: Project Planning"
        },
        {
          "id": "m3-q2",
          "number": 2,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "An analyst checks whether the school's existing computer hardware and campus Wi-Fi can run a proposed cloud portal. Which feasibility type is this?",
          "options": [
            "A. Legal Feasibility",
            "B. Technical Feasibility",
            "C. Economic Feasibility",
            "D. Schedule Feasibility"
          ],
          "answer": "B. Technical Feasibility",
          "explanation": "Evaluating existing physical hardware, Wi-Fi networks, server capacities, and technical tools falls directly under Technical Feasibility.",
          "moduleId": "module-3-planning",
          "moduleTitle": "Module 3: Project Planning"
        },
        {
          "id": "m3-q3",
          "number": 3,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Calculating Return on Investment (ROI) by comparing an initial cost of Php 500,000 against projected savings of Php 900,000 is evaluated under:",
          "options": [
            "A. Operational Feasibility",
            "B. Economic Feasibility",
            "C. Technical Feasibility",
            "D. Schedule Feasibility"
          ],
          "answer": "B. Economic Feasibility",
          "explanation": "Cost-Benefit Analysis, ROI calculations, and capital expenditure forecasts are evaluated under Economic Feasibility.",
          "moduleId": "module-3-planning",
          "moduleTitle": "Module 3: Project Planning"
        },
        {
          "id": "m3-q4",
          "number": 4,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Ensuring that a student portal strictly adheres to the Philippine Data Privacy Act of 2012 is a primary concern of:",
          "options": [
            "A. Schedule Feasibility",
            "B. Legal Feasibility",
            "C. Technical Feasibility",
            "D. Operational Feasibility"
          ],
          "answer": "B. Legal Feasibility",
          "explanation": "Statutory privacy regulations, copyright laws, and intellectual property compliance are assessed under Legal Feasibility.",
          "moduleId": "module-3-planning",
          "moduleTitle": "Module 3: Project Planning"
        },
        {
          "id": "m3-q5",
          "number": 5,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "If teachers refuse to use a newly deployed grading system because they find it too difficult and complicated, which feasibility dimension failed?",
          "options": [
            "A. Operational Feasibility",
            "B. Legal Feasibility",
            "C. Technical Feasibility",
            "D. Economic Feasibility"
          ],
          "answer": "A. Operational Feasibility",
          "explanation": "Operational Feasibility gauges whether end-users will accept, embrace, and easily operate the system within organizational workflows.",
          "moduleId": "module-3-planning",
          "moduleTitle": "Module 3: Project Planning"
        },
        {
          "id": "m3-q6",
          "number": 6,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "A university mandates that the new enrollment portal must be 100% operational before the August semester opens. Assessing if this can be achieved is:",
          "options": [
            "A. Technical Feasibility",
            "B. Operational Feasibility",
            "C. Schedule Feasibility",
            "D. Economic Feasibility"
          ],
          "answer": "C. Schedule Feasibility",
          "explanation": "Schedule Feasibility evaluates whether the project can be planned, built, tested, and rolled out within strict timeline deadlines.",
          "moduleId": "module-3-planning",
          "moduleTitle": "Module 3: Project Planning"
        },
        {
          "id": "m3-q7",
          "number": 7,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "In a Project Plan, clearly identifying that the system will handle 'Student Enrollment' but will NOT include 'Payroll' defines the project's:",
          "options": [
            "A. Scope",
            "B. Schedule",
            "C. Budget",
            "D. Resources"
          ],
          "answer": "A. Scope",
          "explanation": "The Project Scope establishes explicit boundaries by declaring what deliverables are included and what are excluded.",
          "moduleId": "module-3-planning",
          "moduleTitle": "Module 3: Project Planning"
        },
        {
          "id": "m3-q8",
          "number": 8,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Which software team role is primarily responsible for tracking project milestones, controlling budgets, and coordinating team activities?",
          "options": [
            "A. System Analyst",
            "B. Database Administrator",
            "C. Project Manager (PM)",
            "D. QA Tester"
          ],
          "answer": "C. Project Manager (PM)",
          "explanation": "The Project Manager (PM) oversees resource allocation, timeline adherence, budget tracking, risk response, and team coordination.",
          "moduleId": "module-3-planning",
          "moduleTitle": "Module 3: Project Planning"
        },
        {
          "id": "m3-q9",
          "number": 9,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Which tool is categorized as a Software Resource in a software development project plan?",
          "options": [
            "A. Dell PowerEdge Server",
            "B. MySQL Database / Visual Studio Code",
            "C. Quality Assurance Tester",
            "D. Core i7 Laptop"
          ],
          "answer": "B. MySQL Database / Visual Studio Code",
          "explanation": "DBMS software (MySQL), IDEs (VS Code), and compilers are classified as Software Resources. (Servers and laptops are Hardware; testers are Human Resources).",
          "moduleId": "module-3-planning",
          "moduleTitle": "Module 3: Project Planning"
        },
        {
          "id": "m3-q10",
          "number": 10,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "What undesirable phenomenon occurs when extra features are continuously added to a project without expanding budget or timeline?",
          "options": [
            "A. Scope Creep",
            "B. Refactoring",
            "C. Regression Testing",
            "D. Feasibility Expansion"
          ],
          "answer": "A. Scope Creep",
          "explanation": "Scope Creep is the uncontrolled, creeping expansion of product features without necessary adjustments to budget, time, or resources.",
          "moduleId": "module-3-planning",
          "moduleTitle": "Module 3: Project Planning"
        },
        {
          "id": "m3-q11",
          "number": 11,
          "type": "identification",
          "category": "TELOS Classification",
          "question": "Assessing whether the school has sufficient funds to hire three senior Python developers and buy enterprise cloud licenses:",
          "options": [
            "Economic Feasibility",
            "Technical Feasibility",
            "Legal Feasibility",
            "Operational Feasibility",
            "Schedule Feasibility"
          ],
          "answer": "Economic Feasibility",
          "explanation": "Economic Feasibility — Evaluates financial costs, funding availability, salaries, cloud licenses, and projected financial return.",
          "moduleId": "module-3-planning",
          "moduleTitle": "Module 3: Project Planning"
        },
        {
          "id": "m3-q12",
          "number": 12,
          "type": "identification",
          "category": "TELOS Classification",
          "question": "Evaluating whether existing clinic staff have the basic computer literacy needed to operate an electronic health records system:",
          "options": [
            "Operational Feasibility",
            "Technical Feasibility",
            "Economic Feasibility",
            "Legal Feasibility",
            "Schedule Feasibility"
          ],
          "answer": "Operational Feasibility",
          "explanation": "Operational Feasibility — Evaluates staff competence, user readiness, training overhead, and workplace workflow integration.",
          "moduleId": "module-3-planning",
          "moduleTitle": "Module 3: Project Planning"
        },
        {
          "id": "m3-q13",
          "number": 13,
          "type": "identification",
          "category": "TELOS Classification",
          "question": "Checking if third-party open-source libraries used in the software require royalty fees or violate proprietary copyright agreements:",
          "options": [
            "Legal Feasibility",
            "Technical Feasibility",
            "Economic Feasibility",
            "Operational Feasibility",
            "Schedule Feasibility"
          ],
          "answer": "Legal Feasibility",
          "explanation": "Legal Feasibility — Assesses software licensing, copyright, open-source constraints, and regulatory liabilities.",
          "moduleId": "module-3-planning",
          "moduleTitle": "Module 3: Project Planning"
        },
        {
          "id": "m3-q14",
          "number": 14,
          "type": "identification",
          "category": "TELOS Classification",
          "question": "Investigating if the development team has enough specialized knowledge in biometric facial recognition algorithms:",
          "options": [
            "Technical Feasibility",
            "Economic Feasibility",
            "Legal Feasibility",
            "Operational Feasibility",
            "Schedule Feasibility"
          ],
          "answer": "Technical Feasibility",
          "explanation": "Technical Feasibility — Evaluates technical engineering expertise, algorithmic competence, and hardware/software capabilities.",
          "moduleId": "module-3-planning",
          "moduleTitle": "Module 3: Project Planning"
        },
        {
          "id": "m3-q15",
          "number": 15,
          "type": "identification",
          "category": "TELOS Classification",
          "question": "Determining whether a 16-week timeline is adequate to complete coding, testing, and deployment before annual accreditation:",
          "options": [
            "Schedule Feasibility",
            "Technical Feasibility",
            "Economic Feasibility",
            "Legal Feasibility",
            "Operational Feasibility"
          ],
          "answer": "Schedule Feasibility",
          "explanation": "Schedule Feasibility — Evaluates project milestones against rigid external deadlines and calendar constraints.",
          "moduleId": "module-3-planning",
          "moduleTitle": "Module 3: Project Planning"
        },
        {
          "id": "m3-q16",
          "number": 16,
          "type": "tf",
          "category": "True or False",
          "question": "A project can be technically feasible and economically attractive, yet still fail completely due to poor operational feasibility.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True",
          "explanation": "True — Even technically sophisticated and profitable systems fail if end-users resist adoption or find them too disruptive to use.",
          "moduleId": "module-3-planning",
          "moduleTitle": "Module 3: Project Planning"
        },
        {
          "id": "m3-q17",
          "number": 17,
          "type": "tf",
          "category": "True or False",
          "question": "The project scope should only describe features that are included; documenting excluded features is considered bad practice.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False",
          "explanation": "False — Documenting out-of-scope (excluded) features is mandatory to manage stakeholder expectations and prevent scope creep.",
          "moduleId": "module-3-planning",
          "moduleTitle": "Module 3: Project Planning"
        },
        {
          "id": "m3-q18",
          "number": 18,
          "type": "tf",
          "category": "True or False",
          "question": "Economic feasibility focuses solely on software purchase price and ignores developer salaries, hardware, and ongoing maintenance.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False",
          "explanation": "False — Economic feasibility must evaluate Total Cost of Ownership (TCO), including salaries, training, hardware, and maintenance.",
          "moduleId": "module-3-planning",
          "moduleTitle": "Module 3: Project Planning"
        },
        {
          "id": "m3-q19",
          "number": 19,
          "type": "tf",
          "category": "True or False",
          "question": "Legal feasibility includes ensuring that user data handling conforms to data privacy, confidentiality, and statutory guidelines.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True",
          "explanation": "True — Legal feasibility guarantees adherence to statutory privacy legislation (such as the DPA of 2012) and contractual rules.",
          "moduleId": "module-3-planning",
          "moduleTitle": "Module 3: Project Planning"
        },
        {
          "id": "m3-q20",
          "number": 20,
          "type": "tf",
          "category": "True or False",
          "question": "Conducting a feasibility study guarantees that a project will have zero technical challenges during programming.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False",
          "explanation": "False — A feasibility study identifies risks and viable pathways; it cannot eliminate standard programming bugs or technical challenges.",
          "moduleId": "module-3-planning",
          "moduleTitle": "Module 3: Project Planning"
        },
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
          "explanation": "Model Analysis: • Economic: Feasible (Php 1.6M net savings = excellent ROI). • Technical: Not currently feasible due to unstable ER Wi-Fi causing life-or-death disconnections. • Operational: Not currently feasible due to senior nurse resistance. Recommendation: Do NOT proceed as-is. Remediate technical network bottlenecks and conduct change management/training first.",
          "moduleId": "module-3-planning",
          "moduleTitle": "Module 3: Project Planning"
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
          "explanation": "Model Analysis: Project scope defines the explicit boundary agreement between developers and stakeholders. Poorly communicated scope leads to: 1) Scope Creep (unending unbudgeted requests), 2) Schedule Delays & Cost Overruns (building unapproved features), and 3) Disputed Deliverables (clients withholding payment because divergent expectations were not aligned).",
          "moduleId": "module-3-planning",
          "moduleTitle": "Module 3: Project Planning"
        },
        {
          "id": "m3-q23",
          "number": 23,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "In a software project plan, which core component identifies external threats (e.g., campus power failure or server downtime) and defines contingency actions?",
          "options": [
            "A. Risk Management",
            "B. Scope Statement",
            "C. Financial Invoice",
            "D. Syntax Checker"
          ],
          "answer": "A. Risk Management",
          "explanation": "Risk management systematically identifies project risks, evaluates their impact, and establishes mitigation and recovery protocols.",
          "moduleId": "module-3-planning",
          "moduleTitle": "Module 3: Project Planning"
        },
        {
          "id": "m3-q24",
          "number": 24,
          "type": "identification",
          "category": "TELOS Classification",
          "question": "Determining whether an organization's existing servers have enough CPU cores, RAM, and SSD storage to host a new DBMS cluster:",
          "options": [
            "Technical Feasibility",
            "Economic Feasibility",
            "Legal Feasibility",
            "Operational Feasibility",
            "Schedule Feasibility"
          ],
          "answer": "Technical Feasibility",
          "explanation": "Assessing physical server hardware, memory capacity, and computing infrastructure falls under Technical Feasibility.",
          "moduleId": "module-3-planning",
          "moduleTitle": "Module 3: Project Planning"
        },
        {
          "id": "m3-q25",
          "number": 25,
          "type": "tf",
          "category": "True or False",
          "question": "Evaluating Total Cost of Ownership (TCO) in Economic Feasibility requires accounting for recurring software maintenance, cloud hosting, and staff training expenses.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True",
          "explanation": "True — Economic feasibility must evaluate total lifecycle costs, not merely initial development expenditures.",
          "moduleId": "module-3-planning",
          "moduleTitle": "Module 3: Project Planning"
        }
      ]
    },
    {
      "id": "module-4-requirements",
      "title": "Module 4: Requirements Gathering Techniques",
      "subtitle": "Interviews, Observation, Questionnaires & Document Analysis",
      "description": "Master the 4 primary elicitation techniques: Interviews (Structured, Unstructured, Semi-structured), Observation (Passive vs Active, Hawthorne Effect), Questionnaires (Open vs Closed-ended), and Document Analysis; strengths, weaknesses, and hybrid strategies.",
      "icon": "fa-comments",
      "badge": "MELEC 9: System Need Analysis",
      "themeColor": "#8b5cf6",
      "accentGradient": "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
      "study": [
        {
          "id": "m4-part1",
          "title": "I. Concept and Critical Importance of Requirements Gathering",
          "icon": "fa-lightbulb",
          "sections": [
            {
              "subtitle": "What is Requirements Gathering?",
              "content": "\n**Requirements Gathering (Elicitation)** is the systematic process of collecting, discovering, analyzing, and refining information from stakeholders to determine exactly what a new software system must accomplish and how it should perform.\n\n#### Why is it Considered the Most Critical Phase?\nRequirements errors represent over **50% of all software project failures**. Building the wrong system perfectly is completely useless. Requirements gathering ensures developers solve the real business problems, prevent feature bloat (gold plating), and avoid catastrophic post-release redesigns.\n"
            }
          ]
        },
        {
          "id": "m4-part2",
          "title": "II. The Four (4) Primary Elicitation Techniques",
          "icon": "fa-toolbox",
          "sections": [
            {
              "subtitle": "Comparison of Elicitation Techniques",
              "content": "\nAnalysts utilize four primary methodologies to extract requirements, each tailored for different stakeholder types and operational contexts:\n"
            },
            {
              "subtitle": "The 4 Primary Techniques Matrix",
              "table": {
                "headers": [
                  "Technique",
                  "Core Definition & Subtypes",
                  "Key Advantages",
                  "Key Limitations"
                ],
                "rows": [
                  [
                    "1. Interview",
                    "Direct conversation (face-to-face, video, phone) between analyst and stakeholder.<br>• Structured: Scripted, identical question order.<br>• Unstructured: Free-flowing, open discussion.<br>• Semi-Structured: Core questions + flexible probes (Most common).",
                    "• Rich qualitative depth.<br>• Immediate clarification.<br>• Uncovers political/hidden concerns.<br>• Builds stakeholder trust.",
                    "• Highly time-consuming.<br>• Expensive per participant.<br>• Reaches small sample size.<br>• Interviewer bias can skew answers."
                  ],
                  [
                    "2. Observation",
                    "Watching end-users execute their real daily workflow in their natural work environment.<br>• Passive: Watching silently without interrupting.<br>• Active: Asking real-time questions while the user performs tasks.",
                    "• Uncovers undocumented shortcuts & unofficial workarounds.<br>• Captures high physical fidelity.<br>• Verifies statements from interviews.",
                    "• Hawthorne Effect (subjects alter behavior when observed).<br>• Unusual/rare edge-case scenarios may not occur during observation window."
                  ],
                  [
                    "3. Questionnaire / Survey",
                    "Distributing a standardized set of written or online questions to a large population of respondents.<br>• Closed-ended: Predefined choices (Yes/No, Rating 1-5, Multiple Choice).<br>• Open-ended: Free-text subjective input.",
                    "• Massive sample reach (thousands of users).<br>• Extremely low marginal cost per respondent.<br>• Rapid statistical & quantitative analysis.<br>• Anonymity encourages honest answers.",
                    "• Rigid: Cannot probe unexpected insights or clarify misunderstandings.<br>• Low response rates.<br>• Superficial qualitative depth."
                  ],
                  [
                    "4. Document Analysis",
                    "Systematic review of existing organizational documentation, forms, invoices, SOPs, legacy code, and user manuals.",
                    "• Extracts formal business rules & data entities.<br>• Zero interruption of busy employees.<br>• Reveals historical context & regulatory requirements.",
                    "• Documents often reflect idealized policies rather than messy actual reality.<br>• Outdated or obsolete documentation can mislead analysts."
                  ]
                ]
              }
            }
          ]
        },
        {
          "id": "m4-part3",
          "title": "III. Strategic Technique Selection: When to Use Which?",
          "icon": "fa-bullseye",
          "sections": [
            {
              "subtitle": "Context-Driven Selection Matrix",
              "table": {
                "headers": [
                  "Target Stakeholder / Scenario",
                  "Recommended Technique",
                  "Strategic Rationale"
                ],
                "rows": [
                  [
                    "Senior Executives & Top Leadership",
                    "Semi-Structured Interview",
                    "Executives have high strategic insights and low availability; 1-on-1 dialogue extracts strategic priorities efficiently."
                  ],
                  [
                    "Mass End-User Base (e.g., 5,000 students)",
                    "Online Questionnaire / Survey",
                    "Surveys are the only cost-effective way to gather broad quantitative feedback across large dispersed populations."
                  ],
                  [
                    "Uncovering Workarounds & Operational Bottlenecks",
                    "Observation (Passive / Active)",
                    "Employees rarely confess to violating official protocols in interviews; watching them reveals real physical shortcuts."
                  ],
                  [
                    "Extracting Hard Formulas & Legal Data Entities",
                    "Document Analysis",
                    "Tax codes, invoice fields, and accounting validation rules are accurately captured in paper records without interrupting staff."
                  ]
                ]
              }
            },
            {
              "subtitle": "The Hybrid Triangulation Strategy",
              "content": "\nNo single technique is sufficient on its own. Seasoned system analysts employ **methodological triangulation**:\n1. **Document Analysis First**: Learn institutional vocabulary, paper forms, and business rules without wasting staff time.\n2. **Surveys / Questionnaires Second**: Gather high-level quantitative trends and pain points from the general user base.\n3. **Targeted Interviews Third**: Drill down into conflicting issues, edge-cases, and strategic goals with department heads.\n4. **Observation Fourth**: Shadow frontline workers to verify that interview statements match daily physical operational reality.\n"
            }
          ]
        },
        {
          "id": "m4-high-yield",
          "title": "IV. High-Yield Exam Summary Points",
          "icon": "fa-bolt",
          "sections": [
            {
              "subtitle": "Quick Memory Anchors",
              "content": "\n- **Hawthorne Effect**: Workers alter their behavior when they know they are being observed.\n- **Semi-Structured Interview**: Most common interview style in SAD; blends mandatory questions with spontaneous follow-up probes.\n- **Passive Observation**: Silent watching; **Active Observation**: Interrupting the worker to ask real-time questions.\n- **Closed-Ended Questions**: Predefined choices (Yes/No, Likert scale); easy to analyze statistically.\n- **Document Analysis**: Best for discovering database entities and formal rules, but misses informal employee workarounds.\n- **Triangulation**: Combining multiple elicitation methods to validate requirements and eliminate blind spots.\n"
            }
          ]
        }
      ],
      "questions": [
        {
          "id": "m4-q1",
          "number": 1,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Which requirements elicitation technique is most effective when an analyst needs to gather opinions from 5,000 enrolled university students?",
          "options": [
            "A. In-depth face-to-face interviews",
            "B. Online questionnaire / survey",
            "C. Active observation of every student",
            "D. Reviewing university financial ledgers"
          ],
          "answer": "B. Online questionnaire / survey",
          "explanation": "Surveys provide rapid, low-cost distribution across thousands of respondents, making them the only scalable option for large populations like 5,000 students.",
          "moduleId": "module-4-requirements",
          "moduleTitle": "Module 4: Requirements Gathering"
        },
        {
          "id": "m4-q2",
          "number": 2,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "An analyst sits silently beside a billing clerk for two hours without asking questions or speaking. This is an example of:",
          "options": [
            "A. Active Observation",
            "B. Passive Observation",
            "C. Structured Interview",
            "D. Document Sampling"
          ],
          "answer": "B. Passive Observation",
          "explanation": "Passive observation requires the analyst to watch silently without engaging, interrupting, or interacting with the subject.",
          "moduleId": "module-4-requirements",
          "moduleTitle": "Module 4: Requirements Gathering"
        },
        {
          "id": "m4-q3",
          "number": 3,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "What major psychological phenomenon describes users altering their regular work behavior because they know an analyst is watching them?",
          "options": [
            "A. Placebo Effect",
            "B. Hawthorne Effect",
            "C. Halo Effect",
            "D. Murphy's Law"
          ],
          "answer": "B. Hawthorne Effect",
          "explanation": "The Hawthorne Effect is the documented psychological phenomenon where individuals modify or improve an aspect of their behavior in response to being observed.",
          "moduleId": "module-4-requirements",
          "moduleTitle": "Module 4: Requirements Gathering"
        },
        {
          "id": "m4-q4",
          "number": 4,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Which interview type utilizes a fixed, pre-written list of questions asked in identical sequence to all interviewees to facilitate direct comparison?",
          "options": [
            "A. Unstructured Interview",
            "B. Structured Interview",
            "C. Semi-structured Interview",
            "D. Focus Group Discussion"
          ],
          "answer": "B. Structured Interview",
          "explanation": "Structured interviews use a rigid, pre-defined question sequence to standardize responses and allow direct comparative analysis across subjects.",
          "moduleId": "module-4-requirements",
          "moduleTitle": "Module 4: Requirements Gathering"
        },
        {
          "id": "m4-q5",
          "number": 5,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "If an analyst wants to uncover the exact fields printed on a school's official billing invoice without interrupting employees, which technique is ideal?",
          "options": [
            "A. Document Analysis",
            "B. Student Survey",
            "C. Active Observation",
            "D. Brainstorming Session"
          ],
          "answer": "A. Document Analysis",
          "explanation": "Document analysis inspects invoices, forms, receipts, and reports to establish exact data entity specifications without taking up employee time.",
          "moduleId": "module-4-requirements",
          "moduleTitle": "Module 4: Requirements Gathering"
        },
        {
          "id": "m4-q6",
          "number": 6,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "What is the single most commonly used interview style in modern systems analysis because it balances structure with conversational flexibility?",
          "options": [
            "A. Completely Unstructured",
            "B. Semi-Structured",
            "C. Strictly Scripted",
            "D. Cross-Examination"
          ],
          "answer": "B. Semi-Structured",
          "explanation": "Semi-structured interviews allow an analyst to cover mandatory agenda items while freely investigating unexpected insights through adaptive follow-up probes.",
          "moduleId": "module-4-requirements",
          "moduleTitle": "Module 4: Requirements Gathering"
        },
        {
          "id": "m4-q7",
          "number": 7,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Which of the following is a recognized disadvantage of distributing questionnaires?",
          "options": [
            "A. Extremely high cost per respondent",
            "B. Cannot clarify questions that respondents misunderstand",
            "C. Requires the analyst to travel to every respondent",
            "D. Impossible to analyze statistically"
          ],
          "answer": "B. Cannot clarify questions that respondents misunderstand",
          "explanation": "Once distributed, ambiguous survey questions cannot be re-explained in real-time, risking skewed or flawed responses.",
          "moduleId": "module-4-requirements",
          "moduleTitle": "Module 4: Requirements Gathering"
        },
        {
          "id": "m4-q8",
          "number": 8,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "During requirements gathering, an analyst asks a cashier: 'Why do you re-write this student number on paper before typing it into the computer?' Which technique is this?",
          "options": [
            "A. Passive Observation",
            "B. Active Observation",
            "C. Document Archival",
            "D. Closed Survey"
          ],
          "answer": "B. Active Observation",
          "explanation": "Active observation involves conversing with and interrupting the user during their workflow to ask immediate clarifying questions.",
          "moduleId": "module-4-requirements",
          "moduleTitle": "Module 4: Requirements Gathering"
        },
        {
          "id": "m4-q9",
          "number": 9,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Why is reviewing organizational documents alone insufficient for gathering all system requirements?",
          "options": [
            "A. Documents are illegal to read without a court warrant.",
            "B. Documents often describe idealized formal policies rather than actual day-to-day workarounds.",
            "C. Documents cannot contain numbers.",
            "D. Modern systems never use paper records."
          ],
          "answer": "B. Documents often describe idealized formal policies rather than actual day-to-day workarounds.",
          "explanation": "Documents describe what should happen formally on paper; observation and interviews are required to discover how work is actually conducted in practice.",
          "moduleId": "module-4-requirements",
          "moduleTitle": "Module 4: Requirements Gathering"
        },
        {
          "id": "m4-q10",
          "number": 10,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "In requirements gathering, questions where respondents must choose from predefined choices (e.g. Yes/No or Rating 1-5) are called:",
          "options": [
            "A. Open-ended questions",
            "B. Closed-ended questions",
            "C. Rhetorical questions",
            "D. Exploratory questions"
          ],
          "answer": "B. Closed-ended questions",
          "explanation": "Closed-ended questions limit respondents to predefined selections, making them easy to quantify and analyze statistically.",
          "moduleId": "module-4-requirements",
          "moduleTitle": "Module 4: Requirements Gathering"
        },
        {
          "id": "m4-q11",
          "number": 11,
          "type": "identification",
          "category": "Technique Matching",
          "question": "Eliciting deeply nuanced, strategic project expectations and institutional goals directly from the University President:",
          "options": [
            "Interview",
            "Observation",
            "Questionnaire",
            "Document Analysis"
          ],
          "answer": "Interview",
          "explanation": "Interview — Strategic executive direction and high-level priorities require direct, nuanced one-on-one dialogue with top leadership.",
          "moduleId": "module-4-requirements",
          "moduleTitle": "Module 4: Requirements Gathering"
        },
        {
          "id": "m4-q12",
          "number": 12,
          "type": "identification",
          "category": "Technique Matching",
          "question": "Discovering that warehouse staff regularly bypass an error message by unplugging the barcode scanner:",
          "options": [
            "Observation",
            "Interview",
            "Questionnaire",
            "Document Analysis"
          ],
          "answer": "Observation",
          "explanation": "Observation — Workers rarely report breaking protocols during interviews; shadowing them physically reveals real-world shortcuts and workarounds.",
          "moduleId": "module-4-requirements",
          "moduleTitle": "Module 4: Requirements Gathering"
        },
        {
          "id": "m4-q13",
          "number": 13,
          "type": "identification",
          "category": "Technique Matching",
          "question": "Extracting statutory tax calculation formulas and deduction rules from the national employee benefits manual:",
          "options": [
            "Document Analysis",
            "Interview",
            "Observation",
            "Questionnaire"
          ],
          "answer": "Document Analysis",
          "explanation": "Document Analysis — Formal tax formulas, legal deduction percentages, and company policies are documented in written manuals with legal accuracy.",
          "moduleId": "module-4-requirements",
          "moduleTitle": "Module 4: Requirements Gathering"
        },
        {
          "id": "m4-q14",
          "number": 14,
          "type": "identification",
          "category": "Technique Matching",
          "question": "Measuring overall customer satisfaction with a banking mobile app across 10,000 nationwide mobile app users:",
          "options": [
            "Questionnaire",
            "Interview",
            "Observation",
            "Document Analysis"
          ],
          "answer": "Questionnaire",
          "explanation": "Questionnaire — Reaching 10,000 dispersed users nationwide requires an automated, low-cost digital survey.",
          "moduleId": "module-4-requirements",
          "moduleTitle": "Module 4: Requirements Gathering"
        },
        {
          "id": "m4-q15",
          "number": 15,
          "type": "identification",
          "category": "Technique Matching",
          "question": "Reconciling a situation where two senior managers provide contradictory descriptions of the approval chain:",
          "options": [
            "Interview",
            "Observation",
            "Questionnaire",
            "Document Analysis"
          ],
          "answer": "Interview",
          "explanation": "Interview — Diplomatic, private one-on-one interviews are needed to uncover reasons behind conflicting managerial viewpoints and negotiate alignment.",
          "moduleId": "module-4-requirements",
          "moduleTitle": "Module 4: Requirements Gathering"
        },
        {
          "id": "m4-q16",
          "number": 16,
          "type": "tf",
          "category": "True or False",
          "question": "Closed-ended questions in questionnaires provide rich qualitative descriptions but are nearly impossible to analyze statistically.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False",
          "explanation": "False — Closed-ended questions produce quantitative numerical data that is very easy to compile and analyze statistically.",
          "moduleId": "module-4-requirements",
          "moduleTitle": "Module 4: Requirements Gathering"
        },
        {
          "id": "m4-q17",
          "number": 17,
          "type": "tf",
          "category": "True or False",
          "question": "The primary reason for combining multiple requirements gathering techniques is that each technique has unique blind spots and limitations.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True",
          "explanation": "True — Methodological triangulation combines multiple techniques to cross-verify data and eliminate individual weaknesses.",
          "moduleId": "module-4-requirements",
          "moduleTitle": "Module 4: Requirements Gathering"
        },
        {
          "id": "m4-q18",
          "number": 18,
          "type": "tf",
          "category": "True or False",
          "question": "In active observation, the system analyst never speaks to or interrupts the employee while they work.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False",
          "explanation": "False — In active observation, the analyst specifically interrupts the worker to ask real-time questions about their process.",
          "moduleId": "module-4-requirements",
          "moduleTitle": "Module 4: Requirements Gathering"
        },
        {
          "id": "m4-q19",
          "number": 19,
          "type": "tf",
          "category": "True or False",
          "question": "Document analysis can reveal official business rules, but it often fails to uncover unofficial employee shortcuts.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True",
          "explanation": "True — Written records describe the ideal formal policy; employees frequently devise informal shortcuts not documented in manuals.",
          "moduleId": "module-4-requirements",
          "moduleTitle": "Module 4: Requirements Gathering"
        },
        {
          "id": "m4-q20",
          "number": 20,
          "type": "tf",
          "category": "True or False",
          "question": "Requirements gathering is only necessary if the software developers are completely unfamiliar with the programming language.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False",
          "explanation": "False — Requirements gathering is vital for every project to ensure the software solves the actual operational business needs of users.",
          "moduleId": "module-4-requirements",
          "moduleTitle": "Module 4: Requirements Gathering"
        },
        {
          "id": "m4-q21",
          "number": 21,
          "type": "scenario",
          "category": "Scenario Application",
          "question": "You are appointed Lead Analyst for a university Online Enrollment System. Which requirements gathering technique should you execute FIRST, and why?",
          "options": [
            "A. Document Analysis — Collect and inspect current forms, syllabi, fee slips, and prerequisite guidelines first to build domain vocabulary and avoid asking redundant questions.",
            "B. Immediately interview the university president without reading any documents.",
            "C. Conduct observation of 10,000 students while taking exams.",
            "D. Send a survey asking students how to write SQL databases."
          ],
          "answer": "A. Document Analysis — Collect and inspect current forms, syllabi, fee slips, and prerequisite guidelines first to build domain vocabulary and avoid asking redundant questions.",
          "explanation": "Model Answer: Recommended First Technique: Document Analysis. Justification: Studying existing enrollment forms, subject evaluation sheets, billing slips, and course catalogs enables the analyst to: 1) Master university terminology and data entities without wasting staff time, 2) Avoid asking basic, repetitive questions in upcoming stakeholder interviews, and 3) Target confusing paperwork in subsequent interviews.",
          "moduleId": "module-4-requirements",
          "moduleTitle": "Module 4: Requirements Gathering"
        },
        {
          "id": "m4-q22",
          "number": 22,
          "type": "scenario",
          "category": "Scenario Application",
          "question": "When comparing Interviews against Questionnaires, in which circumstance is an Interview clearly the superior elicitation technique?",
          "options": [
            "A. When you need to survey 50,000 remote customers on a $100 budget.",
            "B. When exploring complex, sensitive, or political problems with top executives and seeking deep, nuanced explanations of conflicting workflows.",
            "C. When you only need basic quantitative ratings on a scale of 1 to 5.",
            "D. When you want complete anonymity and zero verbal dialogue."
          ],
          "answer": "B. When exploring complex, sensitive, or political problems with top executives and seeking deep, nuanced explanations of conflicting workflows.",
          "explanation": "Model Answer: Comparison: • Depth: Interviews provide rich qualitative depth; surveys provide broad, shallow quantitative data. • Cost & Time: Interviews are costly and time-intensive; questionnaires have low marginal cost per respondent. • Flexibility: Interviews allow spontaneous follow-ups; surveys are rigid. When to Choose Interviews: When engaging senior leaders, reconciling disputed processes, or probing complex business rules.",
          "moduleId": "module-4-requirements",
          "moduleTitle": "Module 4: Requirements Gathering"
        },
        {
          "id": "m4-q23",
          "number": 23,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Why do system analysts commonly prefer Semi-Structured Interviews over Strictly Scripted Interviews?",
          "options": [
            "A. Semi-structured interviews take zero preparation time.",
            "B. They balance covering mandatory agenda questions with the agility to probe unexpected user insights.",
            "C. They allow the analyst to skip meeting the client.",
            "D. They can be answered by automated software scripts."
          ],
          "answer": "B. They balance covering mandatory agenda questions with the agility to probe unexpected user insights.",
          "explanation": "Semi-structured interviews ensure standard core requirements are explored while giving the interviewer freedom to probe unanticipated discoveries.",
          "moduleId": "module-4-requirements",
          "moduleTitle": "Module 4: Requirements Gathering"
        },
        {
          "id": "m4-q24",
          "number": 24,
          "type": "identification",
          "category": "Technique Matching",
          "question": "Watching a cashier in real time to count how many seconds each student transaction takes and noticing manual calculator steps:",
          "options": [
            "Observation",
            "Questionnaire",
            "Document Analysis",
            "Literature Review"
          ],
          "answer": "Observation",
          "explanation": "Observation involves watching workers perform actual physical tasks in their workplace environment to detect timing and undocumented steps.",
          "moduleId": "module-4-requirements",
          "moduleTitle": "Module 4: Requirements Gathering"
        },
        {
          "id": "m4-q25",
          "number": 25,
          "type": "tf",
          "category": "True or False",
          "question": "In requirements gathering, methodological triangulation means combining multiple elicitation techniques to cross-verify findings and eliminate blind spots.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True",
          "explanation": "True — Methodological triangulation uses multiple techniques (e.g., documents + surveys + interviews + observation) to validate requirements.",
          "moduleId": "module-4-requirements",
          "moduleTitle": "Module 4: Requirements Gathering"
        }
      ]
    }
  ],
  "comprehensiveQuestions": [
    {
      "id": "m1-q1",
      "number": 1,
      "type": "mcq",
      "category": "Multiple Choice",
      "question": "In a school grading system, which component ensures that only authorized faculty members can enter student grades?",
      "options": [
        "A. Input",
        "B. Process",
        "C. Control",
        "D. Feedback"
      ],
      "answer": "C. Control",
      "explanation": "Control encompasses rules, authorization safeguards, and access privileges (such as RBAC) ensuring the system operates securely and validly.",
      "moduleId": "module-1-sad",
      "moduleTitle": "Module 1: SAD"
    },
    {
      "id": "m1-q2",
      "number": 2,
      "type": "mcq",
      "category": "Multiple Choice",
      "question": "A student receives a printed Certificate of Registration (COR) after enrolling. In system terminology, this document is classified as:",
      "options": [
        "A. Input",
        "B. Output",
        "C. Process",
        "D. Feedback"
      ],
      "answer": "B. Output",
      "explanation": "The Certificate of Registration (COR) is generated information produced by the system for the student and faculty.",
      "moduleId": "module-1-sad",
      "moduleTitle": "Module 1: SAD"
    },
    {
      "id": "m1-q3",
      "number": 3,
      "type": "mcq",
      "category": "Multiple Choice",
      "question": "A developer began coding a hospital billing application without consulting the billing staff or accounting officers. Which fundamental phase did the developer bypass?",
      "options": [
        "A. System Analysis",
        "B. Compilation",
        "C. Hardware Setup",
        "D. User Acceptance Testing"
      ],
      "answer": "A. System Analysis",
      "explanation": "The developer bypassed analyzing the existing problem and eliciting user requirements directly from hospital stakeholders.",
      "moduleId": "module-1-sad",
      "moduleTitle": "Module 1: SAD"
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
      "explanation": "Analysis defines 'WHAT' must be solved; Design defines 'HOW' the technology will physically solve it.",
      "moduleId": "module-1-sad",
      "moduleTitle": "Module 1: SAD"
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
      "explanation": "Analysts translate ambiguous operational needs into technical specifications and blueprints that coders can build.",
      "moduleId": "module-1-sad",
      "moduleTitle": "Module 1: SAD"
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
      "explanation": "Interviewing frontline staff to discover operational pain points and compiling requirements is a core analyst responsibility.",
      "moduleId": "module-1-sad",
      "moduleTitle": "Module 1: SAD"
    },
    {
      "id": "m1-q7",
      "number": 7,
      "type": "mcq",
      "category": "Multiple Choice",
      "question": "Which skill category enables an analyst to resolve disagreements between two department heads who demand conflicting system features?",
      "options": [
        "A. Technical Skills",
        "B. Interpersonal Skills",
        "C. Programming Skills",
        "D. Hardware Architecture Skills"
      ],
      "answer": "B. Interpersonal Skills",
      "explanation": "Negotiation, diplomacy, conflict resolution, and active listening belong to the interpersonal skill domain.",
      "moduleId": "module-1-sad",
      "moduleTitle": "Module 1: SAD"
    },
    {
      "id": "m1-q8",
      "number": 8,
      "type": "mcq",
      "category": "Multiple Choice",
      "question": "Data Flow Diagrams (DFDs) and Entity-Relationship Diagrams (ERDs) are primarily constructed during which phase?",
      "options": [
        "A. System Analysis and Design",
        "B. Hardware Procurement",
        "C. End-User Training",
        "D. Decommissioning"
      ],
      "answer": "A. System Analysis and Design",
      "explanation": "DFDs and ERDs are standard analytical and design modeling tools used to map data flow and logical data structures.",
      "moduleId": "module-1-sad",
      "moduleTitle": "Module 1: SAD"
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
      "explanation": "Software engineering studies show fixing defects post-release is 10x to 50x more expensive due to redesign, re-testing, and redeployment.",
      "moduleId": "module-1-sad",
      "moduleTitle": "Module 1: SAD"
    },
    {
      "id": "m1-q10",
      "number": 10,
      "type": "mcq",
      "category": "Multiple Choice",
      "question": "Incorporating Role-Based Access Control (RBAC) so that only cashiers can accept tuition payments directly supports which system component?",
      "options": [
        "A. Control",
        "B. Input",
        "C. Feedback",
        "D. Output"
      ],
      "answer": "A. Control",
      "explanation": "Role-based permissions (RBAC) restrict unauthorized actions, functioning as a vital system control mechanism.",
      "moduleId": "module-1-sad",
      "moduleTitle": "Module 1: SAD"
    },
    {
      "id": "m1-q11",
      "number": 11,
      "type": "identification",
      "category": "Identification / Terminology",
      "question": "The component of a system consisting of information or signals used to make adjustments and evaluate system performance:",
      "options": [
        "Feedback",
        "Control",
        "Process",
        "Output"
      ],
      "answer": "Feedback",
      "explanation": "Feedback consists of information returning from the environment or user to adjust, evaluate, or confirm system performance.",
      "moduleId": "module-1-sad",
      "moduleTitle": "Module 1: SAD"
    },
    {
      "id": "m1-q12",
      "number": 12,
      "type": "identification",
      "category": "Identification / Terminology",
      "question": "The specific IT professional responsible for studying business problems, gathering user requirements, and designing solutions:",
      "options": [
        "System Analyst",
        "Database Administrator",
        "Network Engineer",
        "Hardware Technician"
      ],
      "answer": "System Analyst",
      "explanation": "A System Analyst is the IT specialist who acts as a liaison and solution designer between business stakeholders and technical developers.",
      "moduleId": "module-1-sad",
      "moduleTitle": "Module 1: SAD"
    },
    {
      "id": "m1-q13",
      "number": 13,
      "type": "identification",
      "category": "Identification / Terminology",
      "question": "The developmental phase that serves as the technical 'blueprint' detailing user interfaces, database tables, and system architecture:",
      "options": [
        "System Design",
        "System Analysis",
        "Maintenance",
        "Testing"
      ],
      "answer": "System Design",
      "explanation": "System Design is the architectural and physical blueprint phase detailing how the software will physically meet user requirements.",
      "moduleId": "module-1-sad",
      "moduleTitle": "Module 1: SAD"
    },
    {
      "id": "m1-q14",
      "number": 14,
      "type": "identification",
      "category": "Identification / Terminology",
      "question": "The term for data, resources, or raw facts entered into an information system:",
      "options": [
        "Input",
        "Output",
        "Feedback",
        "Control"
      ],
      "answer": "Input",
      "explanation": "Input represents the raw data, transactions, and resources injected into the system for processing.",
      "moduleId": "module-1-sad",
      "moduleTitle": "Module 1: SAD"
    },
    {
      "id": "m1-q15",
      "number": 15,
      "type": "identification",
      "category": "Identification / Terminology",
      "question": "The core framework / acronym that encompasses understanding organizational problems and architecting effective computer-based solutions:",
      "options": [
        "System Analysis and Design (SAD)",
        "SDLC",
        "RBAC",
        "ERD"
      ],
      "answer": "System Analysis and Design (SAD)",
      "explanation": "System Analysis and Design (SAD) is the overall structured methodology of studying organizational problems and designing computer-based solutions.",
      "moduleId": "module-1-sad",
      "moduleTitle": "Module 1: SAD"
    },
    {
      "id": "m1-q16",
      "number": 16,
      "type": "tf",
      "category": "True or False",
      "question": "System Analysis focuses primarily on 'HOW' the software will be technically coded, while System Design focuses on 'WHAT' the business needs.",
      "options": [
        "True",
        "False"
      ],
      "answer": "False",
      "explanation": "False — Analysis focuses on 'WHAT' the system must do; Design focuses on 'HOW' the technical solution will be constructed.",
      "moduleId": "module-1-sad",
      "moduleTitle": "Module 1: SAD"
    },
    {
      "id": "m1-q17",
      "number": 17,
      "type": "tf",
      "category": "True or False",
      "question": "System Analysts require strong business acumen because software must strictly align with organizational goals and commercial workflows.",
      "options": [
        "True",
        "False"
      ],
      "answer": "True",
      "explanation": "True — Analysts must understand business workflows, accounting, and organizational objectives to design practical, effective software.",
      "moduleId": "module-1-sad",
      "moduleTitle": "Module 1: SAD"
    },
    {
      "id": "m1-q18",
      "number": 18,
      "type": "tf",
      "category": "True or False",
      "question": "Skipping System Analysis and Design usually accelerates total project completion and drastically reduces long-term software maintenance costs.",
      "options": [
        "True",
        "False"
      ],
      "answer": "False",
      "explanation": "False — Skipping SAD leads to massive rework, feature omissions, budget overruns, and expensive post-release maintenance.",
      "moduleId": "module-1-sad",
      "moduleTitle": "Module 1: SAD"
    },
    {
      "id": "m1-q19",
      "number": 19,
      "type": "tf",
      "category": "True or False",
      "question": "Control procedures in a system ensure that only authorized users can perform sensitive transactions such as updating grades or issuing refunds.",
      "options": [
        "True",
        "False"
      ],
      "answer": "True",
      "explanation": "True — Control mechanisms enforce security, auditing, and authorization policies across system operations.",
      "moduleId": "module-1-sad",
      "moduleTitle": "Module 1: SAD"
    },
    {
      "id": "m1-q20",
      "number": 20,
      "type": "tf",
      "category": "True or False",
      "question": "An effective System Analyst only needs programming knowledge; interpersonal and communication skills are completely optional.",
      "options": [
        "True",
        "False"
      ],
      "answer": "False",
      "explanation": "False — Communication, negotiation, diplomacy, and interpersonal skills are equally or more critical than coding for an analyst.",
      "moduleId": "module-1-sad",
      "moduleTitle": "Module 1: SAD"
    },
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
      "explanation": "Model Analysis: 1) Missing Crucial Features: Prerequisite checks, discounts, or specific report formats will be omitted without stakeholder consultation. 2) Usability Failure: Illogical UI for office staff. 3) Faulty Reporting: Non-compliance with regulatory standards. SAD prevents this by conducting stakeholder interviews first (requirements), constructing UI mockups (design), and setting validation rules before coding.",
      "moduleId": "module-1-sad",
      "moduleTitle": "Module 1: SAD"
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
      "explanation": "Food Delivery App Components: 1. Input: Customer address, cart items, payment details. 2. Process: Computing subtotal/fees, matching nearest GPS rider. 3. Output: Digital order receipt, real-time rider tracking map. 4. Feedback: Star ratings and written reviews to evaluate service. 5. Control: OTP/2FA authentication and restaurant merchant verification.",
      "moduleId": "module-1-sad",
      "moduleTitle": "Module 1: SAD"
    },
    {
      "id": "m1-q23",
      "number": 23,
      "type": "mcq",
      "category": "Multiple Choice",
      "question": "Which strategic benefit of System Analysis and Design ensures that an information system can easily accommodate expanding student populations and transactions without requiring complete architectural replacement?",
      "options": [
        "A. Scalable Architecture",
        "B. Eliminating all need for servers",
        "C. Replacing all human employees",
        "D. Allowing unverified public database writes"
      ],
      "answer": "A. Scalable Architecture",
      "explanation": "Scalable architecture allows an information system to grow gracefully in data volume and traffic load over time without catastrophic architectural rebuilds.",
      "moduleId": "module-1-sad",
      "moduleTitle": "Module 1: SAD"
    },
    {
      "id": "m1-q24",
      "number": 24,
      "type": "identification",
      "category": "Identification / Core Skills",
      "question": "The specific skill set of a System Analyst encompassing project scheduling, resource allocation, and risk mitigation:",
      "options": [
        "Management Skills",
        "Analytical Skills",
        "Technical Skills",
        "Interpersonal Skills"
      ],
      "answer": "Management Skills",
      "explanation": "Management skills involve resource planning, scheduling milestones, controlling budget, and mitigating project risks.",
      "moduleId": "module-1-sad",
      "moduleTitle": "Module 1: SAD"
    },
    {
      "id": "m1-q25",
      "number": 25,
      "type": "tf",
      "category": "True or False",
      "question": "The primary tangible deliverable produced at the culmination of the System Analysis phase is the Software Requirements Specification (SRS).",
      "options": [
        "True",
        "False"
      ],
      "answer": "True",
      "explanation": "True — The SRS document formally captures the verified business and user requirements compiled during system analysis.",
      "moduleId": "module-1-sad",
      "moduleTitle": "Module 1: SAD"
    },
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
      "explanation": "The Software Requirements Specification (SRS) is the formal document containing all functional and non-functional requirements compiled during requirements analysis.",
      "moduleId": "module-2-sdlc",
      "moduleTitle": "Module 2: SDLC"
    },
    {
      "id": "m2-q2",
      "number": 2,
      "type": "mcq",
      "category": "Multiple Choice",
      "question": "In which phase of the SDLC do programmers physically write application source code and configure databases?",
      "options": [
        "A. System Design",
        "B. Development (Coding)",
        "C. Requirements Analysis",
        "D. Deployment"
      ],
      "answer": "B. Development (Coding)",
      "explanation": "Actual programming, scripting, database schema generation, and source code development occur during Phase 4: Development (Coding).",
      "moduleId": "module-2-sdlc",
      "moduleTitle": "Module 2: SDLC"
    },
    {
      "id": "m2-q3",
      "number": 3,
      "type": "mcq",
      "category": "Multiple Choice",
      "question": "Testing an individual function in isolation (such as a discount calculation formula) is classified as:",
      "options": [
        "A. User Acceptance Testing (UAT)",
        "B. Integration Testing",
        "C. Unit Testing",
        "D. Stress Testing"
      ],
      "answer": "C. Unit Testing",
      "explanation": "Unit testing verifies that individual functions, routines, methods, or components operate correctly in complete isolation.",
      "moduleId": "module-2-sdlc",
      "moduleTitle": "Module 2: SDLC"
    },
    {
      "id": "m2-q4",
      "number": 4,
      "type": "mcq",
      "category": "Multiple Choice",
      "question": "Which SDLC phase occurs immediately after System Design is officially approved?",
      "options": [
        "A. Testing",
        "B. Planning",
        "C. Development (Coding)",
        "D. Deployment"
      ],
      "answer": "C. Development (Coding)",
      "explanation": "Once the architectural blueprint (System Design) is completed and approved, developers proceed to Phase 4: Development (Coding).",
      "moduleId": "module-2-sdlc",
      "moduleTitle": "Module 2: SDLC"
    },
    {
      "id": "m2-q5",
      "number": 5,
      "type": "mcq",
      "category": "Multiple Choice",
      "question": "Conducting user training, migrating legacy databases to production servers, and officially launching the software belongs to:",
      "options": [
        "A. Maintenance",
        "B. Deployment",
        "C. System Design",
        "D. Feasibility Analysis"
      ],
      "answer": "B. Deployment",
      "explanation": "Deployment encompasses server provisioning, data migration, user onboarding/training, and official live rollout.",
      "moduleId": "module-2-sdlc",
      "moduleTitle": "Module 2: SDLC"
    },
    {
      "id": "m2-q6",
      "number": 6,
      "type": "mcq",
      "category": "Multiple Choice",
      "question": "A university registrar officially validates that the enrollment system operates according to university policies before sign-off. What type of testing is this?",
      "options": [
        "A. Unit Testing",
        "B. Regression Testing",
        "C. User Acceptance Testing (UAT)",
        "D. Syntax Checking"
      ],
      "answer": "C. User Acceptance Testing (UAT)",
      "explanation": "User Acceptance Testing (UAT) is the critical final verification where actual end-users/clients confirm the software fulfills business requirements.",
      "moduleId": "module-2-sdlc",
      "moduleTitle": "Module 2: SDLC"
    },
    {
      "id": "m2-q7",
      "number": 7,
      "type": "mcq",
      "category": "Multiple Choice",
      "question": "Six months after deployment, a university decides to add an automated GCash payment gateway. Which phase manages this modification?",
      "options": [
        "A. Maintenance",
        "B. System Design",
        "C. Planning",
        "D. Unit Testing"
      ],
      "answer": "A. Maintenance",
      "explanation": "Post-launch software enhancements, new API integrations, and bug fixes belong exclusively to the Maintenance phase.",
      "moduleId": "module-2-sdlc",
      "moduleTitle": "Module 2: SDLC"
    },
    {
      "id": "m2-q8",
      "number": 8,
      "type": "mcq",
      "category": "Multiple Choice",
      "question": "Creating UI wireframes, page mockups, and database table structures occurs during which phase?",
      "options": [
        "A. System Design",
        "B. Requirements Analysis",
        "C. Development",
        "D. Maintenance"
      ],
      "answer": "A. System Design",
      "explanation": "System Design constructs the architectural blueprints: ERDs, UI mockups, interface layouts, and technical data schemas.",
      "moduleId": "module-2-sdlc",
      "moduleTitle": "Module 2: SDLC"
    },
    {
      "id": "m2-q9",
      "number": 9,
      "type": "mcq",
      "category": "Multiple Choice",
      "question": "Which phase is widely recognized as the foundational phase determining project viability and budget constraints?",
      "options": [
        "A. Planning",
        "B. Coding",
        "C. Testing",
        "D. Deployment"
      ],
      "answer": "A. Planning",
      "explanation": "Planning establishes project feasibility, resource allocations, timeline schedules, risk assessments, and financial budgets.",
      "moduleId": "module-2-sdlc",
      "moduleTitle": "Module 2: SDLC"
    },
    {
      "id": "m2-q10",
      "number": 10,
      "type": "mcq",
      "category": "Multiple Choice",
      "question": "Testing whether the Student Registration module correctly transfers student data into the Billing module is an example of:",
      "options": [
        "A. Unit Testing",
        "B. Integration Testing",
        "C. Acceptance Testing",
        "D. Alpha Testing"
      ],
      "answer": "B. Integration Testing",
      "explanation": "Integration testing verifies that distinct software units or sub-systems interface and exchange data seamlessly without errors.",
      "moduleId": "module-2-sdlc",
      "moduleTitle": "Module 2: SDLC"
    },
    {
      "id": "m2-q11",
      "number": 11,
      "type": "identification",
      "category": "Identification / Sequence",
      "question": "The type of testing conducted to ensure that distinct software modules interface and exchange data seamlessly:",
      "options": [
        "Integration Testing",
        "Unit Testing",
        "System Testing",
        "User Acceptance Testing (UAT)"
      ],
      "answer": "Integration Testing",
      "explanation": "Integration Testing verifies communication, protocols, and data exchange across module boundaries.",
      "moduleId": "module-2-sdlc",
      "moduleTitle": "Module 2: SDLC"
    },
    {
      "id": "m2-q12",
      "number": 12,
      "type": "identification",
      "category": "Identification / Sequence",
      "question": "The final phase of the SDLC where software is continuously patched, enhanced, and supported post-launch:",
      "options": [
        "Maintenance",
        "Deployment",
        "Testing",
        "Planning"
      ],
      "answer": "Maintenance",
      "explanation": "Maintenance is the ongoing, long-term phase dedicated to bug fixes, system updates, and feature enhancements.",
      "moduleId": "module-2-sdlc",
      "moduleTitle": "Module 2: SDLC"
    },
    {
      "id": "m2-q13",
      "number": 13,
      "type": "identification",
      "category": "Identification / Sequence",
      "question": "The deliverable produced during the System Design phase that outlines database tables and relationships:",
      "options": [
        "Entity-Relationship Diagram (ERD) / Database Schema",
        "SRS",
        "Test Cases",
        "Project Charter"
      ],
      "answer": "Entity-Relationship Diagram (ERD) / Database Schema",
      "explanation": "An Entity-Relationship Diagram (ERD) or Database Schema maps entities, attributes, primary/foreign keys, and data relationships.",
      "moduleId": "module-2-sdlc",
      "moduleTitle": "Module 2: SDLC"
    },
    {
      "id": "m2-q14",
      "number": 14,
      "type": "identification",
      "category": "Identification / Sequence",
      "question": "The phase that answers the core question: 'What should the software actually do from the user's perspective?':",
      "options": [
        "Requirements Analysis",
        "System Design",
        "Coding",
        "Testing"
      ],
      "answer": "Requirements Analysis",
      "explanation": "Requirements Analysis focuses on uncovering and detailing stakeholder needs and defining 'WHAT' the system must accomplish.",
      "moduleId": "module-2-sdlc",
      "moduleTitle": "Module 2: SDLC"
    },
    {
      "id": "m2-q15",
      "number": 15,
      "type": "identification",
      "category": "Identification / Sequence",
      "question": "The phase during which end-users undergo formal training and the software is installed onto operational servers:",
      "options": [
        "Deployment",
        "Planning",
        "System Design",
        "Testing"
      ],
      "answer": "Deployment",
      "explanation": "Deployment (Implementation) encompasses server rollout, data migration, user onboarding/training, and go-live operations.",
      "moduleId": "module-2-sdlc",
      "moduleTitle": "Module 2: SDLC"
    },
    {
      "id": "m2-q16",
      "number": 16,
      "type": "tf",
      "category": "True or False",
      "question": "In standard SDLC methodology, programmers should begin writing code prior to finalizing system requirements and design blueprints.",
      "options": [
        "True",
        "False"
      ],
      "answer": "False",
      "explanation": "False — Coding before requirements and architecture are established causes severe defects, misaligned features, and costly redesign.",
      "moduleId": "module-2-sdlc",
      "moduleTitle": "Module 2: SDLC"
    },
    {
      "id": "m2-q17",
      "number": 17,
      "type": "tf",
      "category": "True or False",
      "question": "User Acceptance Testing (UAT) is performed exclusively by internal software developers without involving any actual end-users.",
      "options": [
        "True",
        "False"
      ],
      "answer": "False",
      "explanation": "False — UAT must be performed by actual clients and end-users to confirm the system solves real-world workflow needs.",
      "moduleId": "module-2-sdlc",
      "moduleTitle": "Module 2: SDLC"
    },
    {
      "id": "m2-q18",
      "number": 18,
      "type": "tf",
      "category": "True or False",
      "question": "The Software Requirements Specification (SRS) acts as an agreed-upon contract between the client and the development team.",
      "options": [
        "True",
        "False"
      ],
      "answer": "True",
      "explanation": "True — The SRS establishes a binding, agreed baseline of functional and non-functional requirements between clients and engineers.",
      "moduleId": "module-2-sdlc",
      "moduleTitle": "Module 2: SDLC"
    },
    {
      "id": "m2-q19",
      "number": 19,
      "type": "tf",
      "category": "True or False",
      "question": "Maintenance is often the longest and most resource-intensive phase across the full operational life of enterprise software.",
      "options": [
        "True",
        "False"
      ],
      "answer": "True",
      "explanation": "True — While development takes months, maintenance typically spans 5 to 15+ years throughout the software's active operational life.",
      "moduleId": "module-2-sdlc",
      "moduleTitle": "Module 2: SDLC"
    },
    {
      "id": "m2-q20",
      "number": 20,
      "type": "tf",
      "category": "True or False",
      "question": "One recognized drawback of the traditional SDLC is that changing requirements mid-development can significantly escalate costs.",
      "options": [
        "True",
        "False"
      ],
      "answer": "True",
      "explanation": "True — In sequential SDLC models, late requirement changes force extensive backtracking through design, code, and test cases.",
      "moduleId": "module-2-sdlc",
      "moduleTitle": "Module 2: SDLC"
    },
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
      "explanation": "Model Answer: Functional requirements define what capabilities users need: 1) Book search/cataloging, 2) Online borrowing/reservation, 3) Automated overdue fine computation (e.g., Php 10/day), 4) Account borrowing history, 5) Librarian acquisition and inventory management. (Options B, C, and D represent design, hardware procurement, and testing).",
      "moduleId": "module-2-sdlc",
      "moduleTitle": "Module 2: SDLC"
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
      "explanation": "Model Answer: Testing prevents three catastrophic production outcomes: 1) Data Corruption & Inaccurate Calculations (e.g., faulty tuition fees or dropped records), 2) High-Traffic Downtime & Server Crashes (failure to handle peak student traffic), and 3) Security Breaches & Data Leaks (unpatched SQL injection or broken authorization exposing student records).",
      "moduleId": "module-2-sdlc",
      "moduleTitle": "Module 2: SDLC"
    },
    {
      "id": "m2-q23",
      "number": 23,
      "type": "mcq",
      "category": "Multiple Choice",
      "question": "In which testing methodology is the full, integrated system rigorously evaluated from end to end by a dedicated QA team against SRS specifications?",
      "options": [
        "A. Unit Testing",
        "B. System Testing",
        "C. Component Testing",
        "D. Code Syntax Verification"
      ],
      "answer": "B. System Testing",
      "explanation": "System Testing evaluates the entire compiled application as a complete system to ensure it strictly meets all functional and non-functional SRS requirements.",
      "moduleId": "module-2-sdlc",
      "moduleTitle": "Module 2: SDLC"
    },
    {
      "id": "m2-q24",
      "number": 24,
      "type": "identification",
      "category": "Identification / Deliverables",
      "question": "The formal document created in Phase 3 that specifies user interface wireframes, network architecture, and database tables:",
      "options": [
        "System Design Document (SDD)",
        "Project Charter",
        "Test Plan",
        "Bug Report"
      ],
      "answer": "System Design Document (SDD)",
      "explanation": "The System Design Document (SDD) serves as the technical blueprint outlining the technical architecture, UI layouts, and database schemas.",
      "moduleId": "module-2-sdlc",
      "moduleTitle": "Module 2: SDLC"
    },
    {
      "id": "m2-q25",
      "number": 25,
      "type": "tf",
      "category": "True or False",
      "question": "The traditional sequential SDLC easily accommodates major client requirement changes during Phase 5 (Testing) without significant cost inflation.",
      "options": [
        "True",
        "False"
      ],
      "answer": "False",
      "explanation": "False — Making major requirement changes during testing forces backward iteration through design and coding, which inflates project expenses and timelines.",
      "moduleId": "module-2-sdlc",
      "moduleTitle": "Module 2: SDLC"
    },
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
      "explanation": "A feasibility study establishes overall viability, risk, and strategic justification before an organization commits funding and human resources.",
      "moduleId": "module-3-planning",
      "moduleTitle": "Module 3: Project Planning"
    },
    {
      "id": "m3-q2",
      "number": 2,
      "type": "mcq",
      "category": "Multiple Choice",
      "question": "An analyst checks whether the school's existing computer hardware and campus Wi-Fi can run a proposed cloud portal. Which feasibility type is this?",
      "options": [
        "A. Legal Feasibility",
        "B. Technical Feasibility",
        "C. Economic Feasibility",
        "D. Schedule Feasibility"
      ],
      "answer": "B. Technical Feasibility",
      "explanation": "Evaluating existing physical hardware, Wi-Fi networks, server capacities, and technical tools falls directly under Technical Feasibility.",
      "moduleId": "module-3-planning",
      "moduleTitle": "Module 3: Project Planning"
    },
    {
      "id": "m3-q3",
      "number": 3,
      "type": "mcq",
      "category": "Multiple Choice",
      "question": "Calculating Return on Investment (ROI) by comparing an initial cost of Php 500,000 against projected savings of Php 900,000 is evaluated under:",
      "options": [
        "A. Operational Feasibility",
        "B. Economic Feasibility",
        "C. Technical Feasibility",
        "D. Schedule Feasibility"
      ],
      "answer": "B. Economic Feasibility",
      "explanation": "Cost-Benefit Analysis, ROI calculations, and capital expenditure forecasts are evaluated under Economic Feasibility.",
      "moduleId": "module-3-planning",
      "moduleTitle": "Module 3: Project Planning"
    },
    {
      "id": "m3-q4",
      "number": 4,
      "type": "mcq",
      "category": "Multiple Choice",
      "question": "Ensuring that a student portal strictly adheres to the Philippine Data Privacy Act of 2012 is a primary concern of:",
      "options": [
        "A. Schedule Feasibility",
        "B. Legal Feasibility",
        "C. Technical Feasibility",
        "D. Operational Feasibility"
      ],
      "answer": "B. Legal Feasibility",
      "explanation": "Statutory privacy regulations, copyright laws, and intellectual property compliance are assessed under Legal Feasibility.",
      "moduleId": "module-3-planning",
      "moduleTitle": "Module 3: Project Planning"
    },
    {
      "id": "m3-q5",
      "number": 5,
      "type": "mcq",
      "category": "Multiple Choice",
      "question": "If teachers refuse to use a newly deployed grading system because they find it too difficult and complicated, which feasibility dimension failed?",
      "options": [
        "A. Operational Feasibility",
        "B. Legal Feasibility",
        "C. Technical Feasibility",
        "D. Economic Feasibility"
      ],
      "answer": "A. Operational Feasibility",
      "explanation": "Operational Feasibility gauges whether end-users will accept, embrace, and easily operate the system within organizational workflows.",
      "moduleId": "module-3-planning",
      "moduleTitle": "Module 3: Project Planning"
    },
    {
      "id": "m3-q6",
      "number": 6,
      "type": "mcq",
      "category": "Multiple Choice",
      "question": "A university mandates that the new enrollment portal must be 100% operational before the August semester opens. Assessing if this can be achieved is:",
      "options": [
        "A. Technical Feasibility",
        "B. Operational Feasibility",
        "C. Schedule Feasibility",
        "D. Economic Feasibility"
      ],
      "answer": "C. Schedule Feasibility",
      "explanation": "Schedule Feasibility evaluates whether the project can be planned, built, tested, and rolled out within strict timeline deadlines.",
      "moduleId": "module-3-planning",
      "moduleTitle": "Module 3: Project Planning"
    },
    {
      "id": "m3-q7",
      "number": 7,
      "type": "mcq",
      "category": "Multiple Choice",
      "question": "In a Project Plan, clearly identifying that the system will handle 'Student Enrollment' but will NOT include 'Payroll' defines the project's:",
      "options": [
        "A. Scope",
        "B. Schedule",
        "C. Budget",
        "D. Resources"
      ],
      "answer": "A. Scope",
      "explanation": "The Project Scope establishes explicit boundaries by declaring what deliverables are included and what are excluded.",
      "moduleId": "module-3-planning",
      "moduleTitle": "Module 3: Project Planning"
    },
    {
      "id": "m3-q8",
      "number": 8,
      "type": "mcq",
      "category": "Multiple Choice",
      "question": "Which software team role is primarily responsible for tracking project milestones, controlling budgets, and coordinating team activities?",
      "options": [
        "A. System Analyst",
        "B. Database Administrator",
        "C. Project Manager (PM)",
        "D. QA Tester"
      ],
      "answer": "C. Project Manager (PM)",
      "explanation": "The Project Manager (PM) oversees resource allocation, timeline adherence, budget tracking, risk response, and team coordination.",
      "moduleId": "module-3-planning",
      "moduleTitle": "Module 3: Project Planning"
    },
    {
      "id": "m3-q9",
      "number": 9,
      "type": "mcq",
      "category": "Multiple Choice",
      "question": "Which tool is categorized as a Software Resource in a software development project plan?",
      "options": [
        "A. Dell PowerEdge Server",
        "B. MySQL Database / Visual Studio Code",
        "C. Quality Assurance Tester",
        "D. Core i7 Laptop"
      ],
      "answer": "B. MySQL Database / Visual Studio Code",
      "explanation": "DBMS software (MySQL), IDEs (VS Code), and compilers are classified as Software Resources. (Servers and laptops are Hardware; testers are Human Resources).",
      "moduleId": "module-3-planning",
      "moduleTitle": "Module 3: Project Planning"
    },
    {
      "id": "m3-q10",
      "number": 10,
      "type": "mcq",
      "category": "Multiple Choice",
      "question": "What undesirable phenomenon occurs when extra features are continuously added to a project without expanding budget or timeline?",
      "options": [
        "A. Scope Creep",
        "B. Refactoring",
        "C. Regression Testing",
        "D. Feasibility Expansion"
      ],
      "answer": "A. Scope Creep",
      "explanation": "Scope Creep is the uncontrolled, creeping expansion of product features without necessary adjustments to budget, time, or resources.",
      "moduleId": "module-3-planning",
      "moduleTitle": "Module 3: Project Planning"
    },
    {
      "id": "m3-q11",
      "number": 11,
      "type": "identification",
      "category": "TELOS Classification",
      "question": "Assessing whether the school has sufficient funds to hire three senior Python developers and buy enterprise cloud licenses:",
      "options": [
        "Economic Feasibility",
        "Technical Feasibility",
        "Legal Feasibility",
        "Operational Feasibility",
        "Schedule Feasibility"
      ],
      "answer": "Economic Feasibility",
      "explanation": "Economic Feasibility — Evaluates financial costs, funding availability, salaries, cloud licenses, and projected financial return.",
      "moduleId": "module-3-planning",
      "moduleTitle": "Module 3: Project Planning"
    },
    {
      "id": "m3-q12",
      "number": 12,
      "type": "identification",
      "category": "TELOS Classification",
      "question": "Evaluating whether existing clinic staff have the basic computer literacy needed to operate an electronic health records system:",
      "options": [
        "Operational Feasibility",
        "Technical Feasibility",
        "Economic Feasibility",
        "Legal Feasibility",
        "Schedule Feasibility"
      ],
      "answer": "Operational Feasibility",
      "explanation": "Operational Feasibility — Evaluates staff competence, user readiness, training overhead, and workplace workflow integration.",
      "moduleId": "module-3-planning",
      "moduleTitle": "Module 3: Project Planning"
    },
    {
      "id": "m3-q13",
      "number": 13,
      "type": "identification",
      "category": "TELOS Classification",
      "question": "Checking if third-party open-source libraries used in the software require royalty fees or violate proprietary copyright agreements:",
      "options": [
        "Legal Feasibility",
        "Technical Feasibility",
        "Economic Feasibility",
        "Operational Feasibility",
        "Schedule Feasibility"
      ],
      "answer": "Legal Feasibility",
      "explanation": "Legal Feasibility — Assesses software licensing, copyright, open-source constraints, and regulatory liabilities.",
      "moduleId": "module-3-planning",
      "moduleTitle": "Module 3: Project Planning"
    },
    {
      "id": "m3-q14",
      "number": 14,
      "type": "identification",
      "category": "TELOS Classification",
      "question": "Investigating if the development team has enough specialized knowledge in biometric facial recognition algorithms:",
      "options": [
        "Technical Feasibility",
        "Economic Feasibility",
        "Legal Feasibility",
        "Operational Feasibility",
        "Schedule Feasibility"
      ],
      "answer": "Technical Feasibility",
      "explanation": "Technical Feasibility — Evaluates technical engineering expertise, algorithmic competence, and hardware/software capabilities.",
      "moduleId": "module-3-planning",
      "moduleTitle": "Module 3: Project Planning"
    },
    {
      "id": "m3-q15",
      "number": 15,
      "type": "identification",
      "category": "TELOS Classification",
      "question": "Determining whether a 16-week timeline is adequate to complete coding, testing, and deployment before annual accreditation:",
      "options": [
        "Schedule Feasibility",
        "Technical Feasibility",
        "Economic Feasibility",
        "Legal Feasibility",
        "Operational Feasibility"
      ],
      "answer": "Schedule Feasibility",
      "explanation": "Schedule Feasibility — Evaluates project milestones against rigid external deadlines and calendar constraints.",
      "moduleId": "module-3-planning",
      "moduleTitle": "Module 3: Project Planning"
    },
    {
      "id": "m3-q16",
      "number": 16,
      "type": "tf",
      "category": "True or False",
      "question": "A project can be technically feasible and economically attractive, yet still fail completely due to poor operational feasibility.",
      "options": [
        "True",
        "False"
      ],
      "answer": "True",
      "explanation": "True — Even technically sophisticated and profitable systems fail if end-users resist adoption or find them too disruptive to use.",
      "moduleId": "module-3-planning",
      "moduleTitle": "Module 3: Project Planning"
    },
    {
      "id": "m3-q17",
      "number": 17,
      "type": "tf",
      "category": "True or False",
      "question": "The project scope should only describe features that are included; documenting excluded features is considered bad practice.",
      "options": [
        "True",
        "False"
      ],
      "answer": "False",
      "explanation": "False — Documenting out-of-scope (excluded) features is mandatory to manage stakeholder expectations and prevent scope creep.",
      "moduleId": "module-3-planning",
      "moduleTitle": "Module 3: Project Planning"
    },
    {
      "id": "m3-q18",
      "number": 18,
      "type": "tf",
      "category": "True or False",
      "question": "Economic feasibility focuses solely on software purchase price and ignores developer salaries, hardware, and ongoing maintenance.",
      "options": [
        "True",
        "False"
      ],
      "answer": "False",
      "explanation": "False — Economic feasibility must evaluate Total Cost of Ownership (TCO), including salaries, training, hardware, and maintenance.",
      "moduleId": "module-3-planning",
      "moduleTitle": "Module 3: Project Planning"
    },
    {
      "id": "m3-q19",
      "number": 19,
      "type": "tf",
      "category": "True or False",
      "question": "Legal feasibility includes ensuring that user data handling conforms to data privacy, confidentiality, and statutory guidelines.",
      "options": [
        "True",
        "False"
      ],
      "answer": "True",
      "explanation": "True — Legal feasibility guarantees adherence to statutory privacy legislation (such as the DPA of 2012) and contractual rules.",
      "moduleId": "module-3-planning",
      "moduleTitle": "Module 3: Project Planning"
    },
    {
      "id": "m3-q20",
      "number": 20,
      "type": "tf",
      "category": "True or False",
      "question": "Conducting a feasibility study guarantees that a project will have zero technical challenges during programming.",
      "options": [
        "True",
        "False"
      ],
      "answer": "False",
      "explanation": "False — A feasibility study identifies risks and viable pathways; it cannot eliminate standard programming bugs or technical challenges.",
      "moduleId": "module-3-planning",
      "moduleTitle": "Module 3: Project Planning"
    },
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
      "explanation": "Model Analysis: • Economic: Feasible (Php 1.6M net savings = excellent ROI). • Technical: Not currently feasible due to unstable ER Wi-Fi causing life-or-death disconnections. • Operational: Not currently feasible due to senior nurse resistance. Recommendation: Do NOT proceed as-is. Remediate technical network bottlenecks and conduct change management/training first.",
      "moduleId": "module-3-planning",
      "moduleTitle": "Module 3: Project Planning"
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
      "explanation": "Model Analysis: Project scope defines the explicit boundary agreement between developers and stakeholders. Poorly communicated scope leads to: 1) Scope Creep (unending unbudgeted requests), 2) Schedule Delays & Cost Overruns (building unapproved features), and 3) Disputed Deliverables (clients withholding payment because divergent expectations were not aligned).",
      "moduleId": "module-3-planning",
      "moduleTitle": "Module 3: Project Planning"
    },
    {
      "id": "m3-q23",
      "number": 23,
      "type": "mcq",
      "category": "Multiple Choice",
      "question": "In a software project plan, which core component identifies external threats (e.g., campus power failure or server downtime) and defines contingency actions?",
      "options": [
        "A. Risk Management",
        "B. Scope Statement",
        "C. Financial Invoice",
        "D. Syntax Checker"
      ],
      "answer": "A. Risk Management",
      "explanation": "Risk management systematically identifies project risks, evaluates their impact, and establishes mitigation and recovery protocols.",
      "moduleId": "module-3-planning",
      "moduleTitle": "Module 3: Project Planning"
    },
    {
      "id": "m3-q24",
      "number": 24,
      "type": "identification",
      "category": "TELOS Classification",
      "question": "Determining whether an organization's existing servers have enough CPU cores, RAM, and SSD storage to host a new DBMS cluster:",
      "options": [
        "Technical Feasibility",
        "Economic Feasibility",
        "Legal Feasibility",
        "Operational Feasibility",
        "Schedule Feasibility"
      ],
      "answer": "Technical Feasibility",
      "explanation": "Assessing physical server hardware, memory capacity, and computing infrastructure falls under Technical Feasibility.",
      "moduleId": "module-3-planning",
      "moduleTitle": "Module 3: Project Planning"
    },
    {
      "id": "m3-q25",
      "number": 25,
      "type": "tf",
      "category": "True or False",
      "question": "Evaluating Total Cost of Ownership (TCO) in Economic Feasibility requires accounting for recurring software maintenance, cloud hosting, and staff training expenses.",
      "options": [
        "True",
        "False"
      ],
      "answer": "True",
      "explanation": "True — Economic feasibility must evaluate total lifecycle costs, not merely initial development expenditures.",
      "moduleId": "module-3-planning",
      "moduleTitle": "Module 3: Project Planning"
    },
    {
      "id": "m4-q1",
      "number": 1,
      "type": "mcq",
      "category": "Multiple Choice",
      "question": "Which requirements elicitation technique is most effective when an analyst needs to gather opinions from 5,000 enrolled university students?",
      "options": [
        "A. In-depth face-to-face interviews",
        "B. Online questionnaire / survey",
        "C. Active observation of every student",
        "D. Reviewing university financial ledgers"
      ],
      "answer": "B. Online questionnaire / survey",
      "explanation": "Surveys provide rapid, low-cost distribution across thousands of respondents, making them the only scalable option for large populations like 5,000 students.",
      "moduleId": "module-4-requirements",
      "moduleTitle": "Module 4: Requirements Gathering"
    },
    {
      "id": "m4-q2",
      "number": 2,
      "type": "mcq",
      "category": "Multiple Choice",
      "question": "An analyst sits silently beside a billing clerk for two hours without asking questions or speaking. This is an example of:",
      "options": [
        "A. Active Observation",
        "B. Passive Observation",
        "C. Structured Interview",
        "D. Document Sampling"
      ],
      "answer": "B. Passive Observation",
      "explanation": "Passive observation requires the analyst to watch silently without engaging, interrupting, or interacting with the subject.",
      "moduleId": "module-4-requirements",
      "moduleTitle": "Module 4: Requirements Gathering"
    },
    {
      "id": "m4-q3",
      "number": 3,
      "type": "mcq",
      "category": "Multiple Choice",
      "question": "What major psychological phenomenon describes users altering their regular work behavior because they know an analyst is watching them?",
      "options": [
        "A. Placebo Effect",
        "B. Hawthorne Effect",
        "C. Halo Effect",
        "D. Murphy's Law"
      ],
      "answer": "B. Hawthorne Effect",
      "explanation": "The Hawthorne Effect is the documented psychological phenomenon where individuals modify or improve an aspect of their behavior in response to being observed.",
      "moduleId": "module-4-requirements",
      "moduleTitle": "Module 4: Requirements Gathering"
    },
    {
      "id": "m4-q4",
      "number": 4,
      "type": "mcq",
      "category": "Multiple Choice",
      "question": "Which interview type utilizes a fixed, pre-written list of questions asked in identical sequence to all interviewees to facilitate direct comparison?",
      "options": [
        "A. Unstructured Interview",
        "B. Structured Interview",
        "C. Semi-structured Interview",
        "D. Focus Group Discussion"
      ],
      "answer": "B. Structured Interview",
      "explanation": "Structured interviews use a rigid, pre-defined question sequence to standardize responses and allow direct comparative analysis across subjects.",
      "moduleId": "module-4-requirements",
      "moduleTitle": "Module 4: Requirements Gathering"
    },
    {
      "id": "m4-q5",
      "number": 5,
      "type": "mcq",
      "category": "Multiple Choice",
      "question": "If an analyst wants to uncover the exact fields printed on a school's official billing invoice without interrupting employees, which technique is ideal?",
      "options": [
        "A. Document Analysis",
        "B. Student Survey",
        "C. Active Observation",
        "D. Brainstorming Session"
      ],
      "answer": "A. Document Analysis",
      "explanation": "Document analysis inspects invoices, forms, receipts, and reports to establish exact data entity specifications without taking up employee time.",
      "moduleId": "module-4-requirements",
      "moduleTitle": "Module 4: Requirements Gathering"
    },
    {
      "id": "m4-q6",
      "number": 6,
      "type": "mcq",
      "category": "Multiple Choice",
      "question": "What is the single most commonly used interview style in modern systems analysis because it balances structure with conversational flexibility?",
      "options": [
        "A. Completely Unstructured",
        "B. Semi-Structured",
        "C. Strictly Scripted",
        "D. Cross-Examination"
      ],
      "answer": "B. Semi-Structured",
      "explanation": "Semi-structured interviews allow an analyst to cover mandatory agenda items while freely investigating unexpected insights through adaptive follow-up probes.",
      "moduleId": "module-4-requirements",
      "moduleTitle": "Module 4: Requirements Gathering"
    },
    {
      "id": "m4-q7",
      "number": 7,
      "type": "mcq",
      "category": "Multiple Choice",
      "question": "Which of the following is a recognized disadvantage of distributing questionnaires?",
      "options": [
        "A. Extremely high cost per respondent",
        "B. Cannot clarify questions that respondents misunderstand",
        "C. Requires the analyst to travel to every respondent",
        "D. Impossible to analyze statistically"
      ],
      "answer": "B. Cannot clarify questions that respondents misunderstand",
      "explanation": "Once distributed, ambiguous survey questions cannot be re-explained in real-time, risking skewed or flawed responses.",
      "moduleId": "module-4-requirements",
      "moduleTitle": "Module 4: Requirements Gathering"
    },
    {
      "id": "m4-q8",
      "number": 8,
      "type": "mcq",
      "category": "Multiple Choice",
      "question": "During requirements gathering, an analyst asks a cashier: 'Why do you re-write this student number on paper before typing it into the computer?' Which technique is this?",
      "options": [
        "A. Passive Observation",
        "B. Active Observation",
        "C. Document Archival",
        "D. Closed Survey"
      ],
      "answer": "B. Active Observation",
      "explanation": "Active observation involves conversing with and interrupting the user during their workflow to ask immediate clarifying questions.",
      "moduleId": "module-4-requirements",
      "moduleTitle": "Module 4: Requirements Gathering"
    },
    {
      "id": "m4-q9",
      "number": 9,
      "type": "mcq",
      "category": "Multiple Choice",
      "question": "Why is reviewing organizational documents alone insufficient for gathering all system requirements?",
      "options": [
        "A. Documents are illegal to read without a court warrant.",
        "B. Documents often describe idealized formal policies rather than actual day-to-day workarounds.",
        "C. Documents cannot contain numbers.",
        "D. Modern systems never use paper records."
      ],
      "answer": "B. Documents often describe idealized formal policies rather than actual day-to-day workarounds.",
      "explanation": "Documents describe what should happen formally on paper; observation and interviews are required to discover how work is actually conducted in practice.",
      "moduleId": "module-4-requirements",
      "moduleTitle": "Module 4: Requirements Gathering"
    },
    {
      "id": "m4-q10",
      "number": 10,
      "type": "mcq",
      "category": "Multiple Choice",
      "question": "In requirements gathering, questions where respondents must choose from predefined choices (e.g. Yes/No or Rating 1-5) are called:",
      "options": [
        "A. Open-ended questions",
        "B. Closed-ended questions",
        "C. Rhetorical questions",
        "D. Exploratory questions"
      ],
      "answer": "B. Closed-ended questions",
      "explanation": "Closed-ended questions limit respondents to predefined selections, making them easy to quantify and analyze statistically.",
      "moduleId": "module-4-requirements",
      "moduleTitle": "Module 4: Requirements Gathering"
    },
    {
      "id": "m4-q11",
      "number": 11,
      "type": "identification",
      "category": "Technique Matching",
      "question": "Eliciting deeply nuanced, strategic project expectations and institutional goals directly from the University President:",
      "options": [
        "Interview",
        "Observation",
        "Questionnaire",
        "Document Analysis"
      ],
      "answer": "Interview",
      "explanation": "Interview — Strategic executive direction and high-level priorities require direct, nuanced one-on-one dialogue with top leadership.",
      "moduleId": "module-4-requirements",
      "moduleTitle": "Module 4: Requirements Gathering"
    },
    {
      "id": "m4-q12",
      "number": 12,
      "type": "identification",
      "category": "Technique Matching",
      "question": "Discovering that warehouse staff regularly bypass an error message by unplugging the barcode scanner:",
      "options": [
        "Observation",
        "Interview",
        "Questionnaire",
        "Document Analysis"
      ],
      "answer": "Observation",
      "explanation": "Observation — Workers rarely report breaking protocols during interviews; shadowing them physically reveals real-world shortcuts and workarounds.",
      "moduleId": "module-4-requirements",
      "moduleTitle": "Module 4: Requirements Gathering"
    },
    {
      "id": "m4-q13",
      "number": 13,
      "type": "identification",
      "category": "Technique Matching",
      "question": "Extracting statutory tax calculation formulas and deduction rules from the national employee benefits manual:",
      "options": [
        "Document Analysis",
        "Interview",
        "Observation",
        "Questionnaire"
      ],
      "answer": "Document Analysis",
      "explanation": "Document Analysis — Formal tax formulas, legal deduction percentages, and company policies are documented in written manuals with legal accuracy.",
      "moduleId": "module-4-requirements",
      "moduleTitle": "Module 4: Requirements Gathering"
    },
    {
      "id": "m4-q14",
      "number": 14,
      "type": "identification",
      "category": "Technique Matching",
      "question": "Measuring overall customer satisfaction with a banking mobile app across 10,000 nationwide mobile app users:",
      "options": [
        "Questionnaire",
        "Interview",
        "Observation",
        "Document Analysis"
      ],
      "answer": "Questionnaire",
      "explanation": "Questionnaire — Reaching 10,000 dispersed users nationwide requires an automated, low-cost digital survey.",
      "moduleId": "module-4-requirements",
      "moduleTitle": "Module 4: Requirements Gathering"
    },
    {
      "id": "m4-q15",
      "number": 15,
      "type": "identification",
      "category": "Technique Matching",
      "question": "Reconciling a situation where two senior managers provide contradictory descriptions of the approval chain:",
      "options": [
        "Interview",
        "Observation",
        "Questionnaire",
        "Document Analysis"
      ],
      "answer": "Interview",
      "explanation": "Interview — Diplomatic, private one-on-one interviews are needed to uncover reasons behind conflicting managerial viewpoints and negotiate alignment.",
      "moduleId": "module-4-requirements",
      "moduleTitle": "Module 4: Requirements Gathering"
    },
    {
      "id": "m4-q16",
      "number": 16,
      "type": "tf",
      "category": "True or False",
      "question": "Closed-ended questions in questionnaires provide rich qualitative descriptions but are nearly impossible to analyze statistically.",
      "options": [
        "True",
        "False"
      ],
      "answer": "False",
      "explanation": "False — Closed-ended questions produce quantitative numerical data that is very easy to compile and analyze statistically.",
      "moduleId": "module-4-requirements",
      "moduleTitle": "Module 4: Requirements Gathering"
    },
    {
      "id": "m4-q17",
      "number": 17,
      "type": "tf",
      "category": "True or False",
      "question": "The primary reason for combining multiple requirements gathering techniques is that each technique has unique blind spots and limitations.",
      "options": [
        "True",
        "False"
      ],
      "answer": "True",
      "explanation": "True — Methodological triangulation combines multiple techniques to cross-verify data and eliminate individual weaknesses.",
      "moduleId": "module-4-requirements",
      "moduleTitle": "Module 4: Requirements Gathering"
    },
    {
      "id": "m4-q18",
      "number": 18,
      "type": "tf",
      "category": "True or False",
      "question": "In active observation, the system analyst never speaks to or interrupts the employee while they work.",
      "options": [
        "True",
        "False"
      ],
      "answer": "False",
      "explanation": "False — In active observation, the analyst specifically interrupts the worker to ask real-time questions about their process.",
      "moduleId": "module-4-requirements",
      "moduleTitle": "Module 4: Requirements Gathering"
    },
    {
      "id": "m4-q19",
      "number": 19,
      "type": "tf",
      "category": "True or False",
      "question": "Document analysis can reveal official business rules, but it often fails to uncover unofficial employee shortcuts.",
      "options": [
        "True",
        "False"
      ],
      "answer": "True",
      "explanation": "True — Written records describe the ideal formal policy; employees frequently devise informal shortcuts not documented in manuals.",
      "moduleId": "module-4-requirements",
      "moduleTitle": "Module 4: Requirements Gathering"
    },
    {
      "id": "m4-q20",
      "number": 20,
      "type": "tf",
      "category": "True or False",
      "question": "Requirements gathering is only necessary if the software developers are completely unfamiliar with the programming language.",
      "options": [
        "True",
        "False"
      ],
      "answer": "False",
      "explanation": "False — Requirements gathering is vital for every project to ensure the software solves the actual operational business needs of users.",
      "moduleId": "module-4-requirements",
      "moduleTitle": "Module 4: Requirements Gathering"
    },
    {
      "id": "m4-q21",
      "number": 21,
      "type": "scenario",
      "category": "Scenario Application",
      "question": "You are appointed Lead Analyst for a university Online Enrollment System. Which requirements gathering technique should you execute FIRST, and why?",
      "options": [
        "A. Document Analysis — Collect and inspect current forms, syllabi, fee slips, and prerequisite guidelines first to build domain vocabulary and avoid asking redundant questions.",
        "B. Immediately interview the university president without reading any documents.",
        "C. Conduct observation of 10,000 students while taking exams.",
        "D. Send a survey asking students how to write SQL databases."
      ],
      "answer": "A. Document Analysis — Collect and inspect current forms, syllabi, fee slips, and prerequisite guidelines first to build domain vocabulary and avoid asking redundant questions.",
      "explanation": "Model Answer: Recommended First Technique: Document Analysis. Justification: Studying existing enrollment forms, subject evaluation sheets, billing slips, and course catalogs enables the analyst to: 1) Master university terminology and data entities without wasting staff time, 2) Avoid asking basic, repetitive questions in upcoming stakeholder interviews, and 3) Target confusing paperwork in subsequent interviews.",
      "moduleId": "module-4-requirements",
      "moduleTitle": "Module 4: Requirements Gathering"
    },
    {
      "id": "m4-q22",
      "number": 22,
      "type": "scenario",
      "category": "Scenario Application",
      "question": "When comparing Interviews against Questionnaires, in which circumstance is an Interview clearly the superior elicitation technique?",
      "options": [
        "A. When you need to survey 50,000 remote customers on a $100 budget.",
        "B. When exploring complex, sensitive, or political problems with top executives and seeking deep, nuanced explanations of conflicting workflows.",
        "C. When you only need basic quantitative ratings on a scale of 1 to 5.",
        "D. When you want complete anonymity and zero verbal dialogue."
      ],
      "answer": "B. When exploring complex, sensitive, or political problems with top executives and seeking deep, nuanced explanations of conflicting workflows.",
      "explanation": "Model Answer: Comparison: • Depth: Interviews provide rich qualitative depth; surveys provide broad, shallow quantitative data. • Cost & Time: Interviews are costly and time-intensive; questionnaires have low marginal cost per respondent. • Flexibility: Interviews allow spontaneous follow-ups; surveys are rigid. When to Choose Interviews: When engaging senior leaders, reconciling disputed processes, or probing complex business rules.",
      "moduleId": "module-4-requirements",
      "moduleTitle": "Module 4: Requirements Gathering"
    },
    {
      "id": "m4-q23",
      "number": 23,
      "type": "mcq",
      "category": "Multiple Choice",
      "question": "Why do system analysts commonly prefer Semi-Structured Interviews over Strictly Scripted Interviews?",
      "options": [
        "A. Semi-structured interviews take zero preparation time.",
        "B. They balance covering mandatory agenda questions with the agility to probe unexpected user insights.",
        "C. They allow the analyst to skip meeting the client.",
        "D. They can be answered by automated software scripts."
      ],
      "answer": "B. They balance covering mandatory agenda questions with the agility to probe unexpected user insights.",
      "explanation": "Semi-structured interviews ensure standard core requirements are explored while giving the interviewer freedom to probe unanticipated discoveries.",
      "moduleId": "module-4-requirements",
      "moduleTitle": "Module 4: Requirements Gathering"
    },
    {
      "id": "m4-q24",
      "number": 24,
      "type": "identification",
      "category": "Technique Matching",
      "question": "Watching a cashier in real time to count how many seconds each student transaction takes and noticing manual calculator steps:",
      "options": [
        "Observation",
        "Questionnaire",
        "Document Analysis",
        "Literature Review"
      ],
      "answer": "Observation",
      "explanation": "Observation involves watching workers perform actual physical tasks in their workplace environment to detect timing and undocumented steps.",
      "moduleId": "module-4-requirements",
      "moduleTitle": "Module 4: Requirements Gathering"
    },
    {
      "id": "m4-q25",
      "number": 25,
      "type": "tf",
      "category": "True or False",
      "question": "In requirements gathering, methodological triangulation means combining multiple elicitation techniques to cross-verify findings and eliminate blind spots.",
      "options": [
        "True",
        "False"
      ],
      "answer": "True",
      "explanation": "True — Methodological triangulation uses multiple techniques (e.g., documents + surveys + interviews + observation) to validate requirements.",
      "moduleId": "module-4-requirements",
      "moduleTitle": "Module 4: Requirements Gathering"
    }
  ]
};