import json
from generate_m1 import module_1
from generate_m2 import module_2
from generate_m3 import module_3
from generate_m4 import module_4

# Add questions 23-25 to Module 1
m1_extra = [
    {
        "id": "m1-q23",
        "number": 23,
        "type": "mcq",
        "category": "Multiple Choice",
        "question": "Which strategic benefit of System Analysis and Design ensures that an information system can easily accommodate expanding student populations and transactions without requiring complete architectural replacement?",
        "options": ["A. Scalable Architecture", "B. Eliminating all need for servers", "C. Replacing all human employees", "D. Allowing unverified public database writes"],
        "answer": "A. Scalable Architecture",
        "explanation": "Scalable architecture allows an information system to grow gracefully in data volume and traffic load over time without catastrophic architectural rebuilds."
    },
    {
        "id": "m1-q24",
        "number": 24,
        "type": "identification",
        "category": "Identification / Core Skills",
        "question": "The specific skill set of a System Analyst encompassing project scheduling, resource allocation, and risk mitigation:",
        "options": ["Management Skills", "Analytical Skills", "Technical Skills", "Interpersonal Skills"],
        "answer": "Management Skills",
        "explanation": "Management skills involve resource planning, scheduling milestones, controlling budget, and mitigating project risks."
    },
    {
        "id": "m1-q25",
        "number": 25,
        "type": "tf",
        "category": "True or False",
        "question": "The primary tangible deliverable produced at the culmination of the System Analysis phase is the Software Requirements Specification (SRS).",
        "options": ["True", "False"],
        "answer": "True",
        "explanation": "True — The SRS document formally captures the verified business and user requirements compiled during system analysis."
    }
]

# Add questions 23-25 to Module 2
m2_extra = [
    {
        "id": "m2-q23",
        "number": 23,
        "type": "mcq",
        "category": "Multiple Choice",
        "question": "In which testing methodology is the full, integrated system rigorously evaluated from end to end by a dedicated QA team against SRS specifications?",
        "options": ["A. Unit Testing", "B. System Testing", "C. Component Testing", "D. Code Syntax Verification"],
        "answer": "B. System Testing",
        "explanation": "System Testing evaluates the entire compiled application as a complete system to ensure it strictly meets all functional and non-functional SRS requirements."
    },
    {
        "id": "m2-q24",
        "number": 24,
        "type": "identification",
        "category": "Identification / Deliverables",
        "question": "The formal document created in Phase 3 that specifies user interface wireframes, network architecture, and database tables:",
        "options": ["System Design Document (SDD)", "Project Charter", "Test Plan", "Bug Report"],
        "answer": "System Design Document (SDD)",
        "explanation": "The System Design Document (SDD) serves as the technical blueprint outlining the technical architecture, UI layouts, and database schemas."
    },
    {
        "id": "m2-q25",
        "number": 25,
        "type": "tf",
        "category": "True or False",
        "question": "The traditional sequential SDLC easily accommodates major client requirement changes during Phase 5 (Testing) without significant cost inflation.",
        "options": ["True", "False"],
        "answer": "False",
        "explanation": "False — Making major requirement changes during testing forces backward iteration through design and coding, which inflates project expenses and timelines."
    }
]

# Add questions 23-25 to Module 3
m3_extra = [
    {
        "id": "m3-q23",
        "number": 23,
        "type": "mcq",
        "category": "Multiple Choice",
        "question": "In a software project plan, which core component identifies external threats (e.g., campus power failure or server downtime) and defines contingency actions?",
        "options": ["A. Risk Management", "B. Scope Statement", "C. Financial Invoice", "D. Syntax Checker"],
        "answer": "A. Risk Management",
        "explanation": "Risk management systematically identifies project risks, evaluates their impact, and establishes mitigation and recovery protocols."
    },
    {
        "id": "m3-q24",
        "number": 24,
        "type": "identification",
        "category": "TELOS Classification",
        "question": "Determining whether an organization's existing servers have enough CPU cores, RAM, and SSD storage to host a new DBMS cluster:",
        "options": ["Technical Feasibility", "Economic Feasibility", "Legal Feasibility", "Operational Feasibility", "Schedule Feasibility"],
        "answer": "Technical Feasibility",
        "explanation": "Assessing physical server hardware, memory capacity, and computing infrastructure falls under Technical Feasibility."
    },
    {
        "id": "m3-q25",
        "number": 25,
        "type": "tf",
        "category": "True or False",
        "question": "Evaluating Total Cost of Ownership (TCO) in Economic Feasibility requires accounting for recurring software maintenance, cloud hosting, and staff training expenses.",
        "options": ["True", "False"],
        "answer": "True",
        "explanation": "True — Economic feasibility must evaluate total lifecycle costs, not merely initial development expenditures."
    }
]

# Add questions 23-25 to Module 4
m4_extra = [
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
        "explanation": "Semi-structured interviews ensure standard core requirements are explored while giving the interviewer freedom to probe unanticipated discoveries."
    },
    {
        "id": "m4-q24",
        "number": 24,
        "type": "identification",
        "category": "Technique Matching",
        "question": "Watching a cashier in real time to count how many seconds each student transaction takes and noticing manual calculator steps:",
        "options": ["Observation", "Questionnaire", "Document Analysis", "Literature Review"],
        "answer": "Observation",
        "explanation": "Observation involves watching workers perform actual physical tasks in their workplace environment to detect timing and undocumented steps."
    },
    {
        "id": "m4-q25",
        "number": 25,
        "type": "tf",
        "category": "True or False",
        "question": "In requirements gathering, methodological triangulation means combining multiple elicitation techniques to cross-verify findings and eliminate blind spots.",
        "options": ["True", "False"],
        "answer": "True",
        "explanation": "True — Methodological triangulation uses multiple techniques (e.g., documents + surveys + interviews + observation) to validate requirements."
    }
]

if len(module_1["questions"]) == 22:
    module_1["questions"].extend(m1_extra)
if len(module_2["questions"]) == 22:
    module_2["questions"].extend(m2_extra)
if len(module_3["questions"]) == 22:
    module_3["questions"].extend(m3_extra)
if len(module_4["questions"]) == 22:
    module_4["questions"].extend(m4_extra)

# Tag every question with moduleId and moduleTitle
modules_list = [
    ("module-1-sad", "Module 1: SAD", module_1),
    ("module-2-sdlc", "Module 2: SDLC", module_2),
    ("module-3-planning", "Module 3: Project Planning", module_3),
    ("module-4-requirements", "Module 4: Requirements Gathering", module_4)
]

comprehensive_questions = []

for mod_id, mod_title, mod_data in modules_list:
    for q in mod_data["questions"]:
        q["moduleId"] = mod_id
        q["moduleTitle"] = mod_title
        comprehensive_questions.append(q)

subject_data = {
    "subject": {
        "id": "melec-9",
        "code": "BSIT MELEC 9",
        "title": "System Need Analysis",
        "subtitle": "Comprehensive Prelim Examination & Modular Study Reviewers",
        "description": "Comprehensive unified study reviewers and 100-item practice examination covering Systems Analysis & Design (SAD), SDLC Phases & Testing, Project Planning & TELOS Feasibility, and Requirements Gathering Techniques.",
        "badge": "BSIT MELEC 9 • Prelim Examination",
        "themeColor": "#6366f1", # Indigo
        "accentGradient": "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #06b6d4 100%)"
    },
    "modules": [module_1, module_2, module_3, module_4],
    "comprehensiveQuestions": comprehensive_questions
}

js_content = f"window.REVIEWER_DATA = {json.dumps(subject_data, indent=2, ensure_ascii=False)};"

with open("data.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"data.js generated successfully with {len(comprehensive_questions)} comprehensive questions!")
for mod_id, mod_title, mod_data in modules_list:
    print(f"  {mod_data['title']}: {len(mod_data['questions'])} questions, {len(mod_data['study'])} study parts")
