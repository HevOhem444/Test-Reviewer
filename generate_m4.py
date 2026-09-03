# Script to generate Module 4: Requirements Gathering Techniques
import json

module_4 = {
    "id": "module-4-requirements",
    "title": "Module 4: Requirements Gathering Techniques",
    "subtitle": "Interviews, Observation, Questionnaires & Document Analysis",
    "description": "Master the 4 primary elicitation techniques: Interviews (Structured, Unstructured, Semi-structured), Observation (Passive vs Active, Hawthorne Effect), Questionnaires (Open vs Closed-ended), and Document Analysis; strengths, weaknesses, and hybrid strategies.",
    "icon": "fa-comments",
    "badge": "MELEC 9: System Need Analysis",
    "themeColor": "#8b5cf6", # Vibrant Purple
    "accentGradient": "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
    "study": [
        {
            "id": "m4-part1",
            "title": "I. Concept and Critical Importance of Requirements Gathering",
            "icon": "fa-lightbulb",
            "sections": [
                {
                    "subtitle": "What is Requirements Gathering?",
                    "content": """
**Requirements Gathering (Elicitation)** is the systematic process of collecting, discovering, analyzing, and refining information from stakeholders to determine exactly what a new software system must accomplish and how it should perform.

#### Why is it Considered the Most Critical Phase?
Requirements errors represent over **50% of all software project failures**. Building the wrong system perfectly is completely useless. Requirements gathering ensures developers solve the real business problems, prevent feature bloat (gold plating), and avoid catastrophic post-release redesigns.
"""
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
                    "content": """
Analysts utilize four primary methodologies to extract requirements, each tailored for different stakeholder types and operational contexts:
"""
                },
                {
                    "subtitle": "The 4 Primary Techniques Matrix",
                    "table": {
                        "headers": ["Technique", "Core Definition & Subtypes", "Key Advantages", "Key Limitations"],
                        "rows": [
                            ["1. Interview", "Direct conversation (face-to-face, video, phone) between analyst and stakeholder.<br>• Structured: Scripted, identical question order.<br>• Unstructured: Free-flowing, open discussion.<br>• Semi-Structured: Core questions + flexible probes (Most common).", "• Rich qualitative depth.<br>• Immediate clarification.<br>• Uncovers political/hidden concerns.<br>• Builds stakeholder trust.", "• Highly time-consuming.<br>• Expensive per participant.<br>• Reaches small sample size.<br>• Interviewer bias can skew answers."],
                            ["2. Observation", "Watching end-users execute their real daily workflow in their natural work environment.<br>• Passive: Watching silently without interrupting.<br>• Active: Asking real-time questions while the user performs tasks.", "• Uncovers undocumented shortcuts & unofficial workarounds.<br>• Captures high physical fidelity.<br>• Verifies statements from interviews.", "• Hawthorne Effect (subjects alter behavior when observed).<br>• Unusual/rare edge-case scenarios may not occur during observation window."],
                            ["3. Questionnaire / Survey", "Distributing a standardized set of written or online questions to a large population of respondents.<br>• Closed-ended: Predefined choices (Yes/No, Rating 1-5, Multiple Choice).<br>• Open-ended: Free-text subjective input.", "• Massive sample reach (thousands of users).<br>• Extremely low marginal cost per respondent.<br>• Rapid statistical & quantitative analysis.<br>• Anonymity encourages honest answers.", "• Rigid: Cannot probe unexpected insights or clarify misunderstandings.<br>• Low response rates.<br>• Superficial qualitative depth."],
                            ["4. Document Analysis", "Systematic review of existing organizational documentation, forms, invoices, SOPs, legacy code, and user manuals.", "• Extracts formal business rules & data entities.<br>• Zero interruption of busy employees.<br>• Reveals historical context & regulatory requirements.", "• Documents often reflect idealized policies rather than messy actual reality.<br>• Outdated or obsolete documentation can mislead analysts."]
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
                        "headers": ["Target Stakeholder / Scenario", "Recommended Technique", "Strategic Rationale"],
                        "rows": [
                            ["Senior Executives & Top Leadership", "Semi-Structured Interview", "Executives have high strategic insights and low availability; 1-on-1 dialogue extracts strategic priorities efficiently."],
                            ["Mass End-User Base (e.g., 5,000 students)", "Online Questionnaire / Survey", "Surveys are the only cost-effective way to gather broad quantitative feedback across large dispersed populations."],
                            ["Uncovering Workarounds & Operational Bottlenecks", "Observation (Passive / Active)", "Employees rarely confess to violating official protocols in interviews; watching them reveals real physical shortcuts."],
                            ["Extracting Hard Formulas & Legal Data Entities", "Document Analysis", "Tax codes, invoice fields, and accounting validation rules are accurately captured in paper records without interrupting staff."]
                        ]
                    }
                },
                {
                    "subtitle": "The Hybrid Triangulation Strategy",
                    "content": """
No single technique is sufficient on its own. Seasoned system analysts employ **methodological triangulation**:
1. **Document Analysis First**: Learn institutional vocabulary, paper forms, and business rules without wasting staff time.
2. **Surveys / Questionnaires Second**: Gather high-level quantitative trends and pain points from the general user base.
3. **Targeted Interviews Third**: Drill down into conflicting issues, edge-cases, and strategic goals with department heads.
4. **Observation Fourth**: Shadow frontline workers to verify that interview statements match daily physical operational reality.
"""
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
                    "content": """
- **Hawthorne Effect**: Workers alter their behavior when they know they are being observed.
- **Semi-Structured Interview**: Most common interview style in SAD; blends mandatory questions with spontaneous follow-up probes.
- **Passive Observation**: Silent watching; **Active Observation**: Interrupting the worker to ask real-time questions.
- **Closed-Ended Questions**: Predefined choices (Yes/No, Likert scale); easy to analyze statistically.
- **Document Analysis**: Best for discovering database entities and formal rules, but misses informal employee workarounds.
- **Triangulation**: Combining multiple elicitation methods to validate requirements and eliminate blind spots.
"""
                }
            ]
        }
    ],
    "questions": [
        # Multiple Choice (1-10)
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
            "explanation": "Surveys provide rapid, low-cost distribution across thousands of respondents, making them the only scalable option for large populations like 5,000 students."
        },
        {
            "id": "m4-q2",
            "number": 2,
            "type": "mcq",
            "category": "Multiple Choice",
            "question": "An analyst sits silently beside a billing clerk for two hours without asking questions or speaking. This is an example of:",
            "options": ["A. Active Observation", "B. Passive Observation", "C. Structured Interview", "D. Document Sampling"],
            "answer": "B. Passive Observation",
            "explanation": "Passive observation requires the analyst to watch silently without engaging, interrupting, or interacting with the subject."
        },
        {
            "id": "m4-q3",
            "number": 3,
            "type": "mcq",
            "category": "Multiple Choice",
            "question": "What major psychological phenomenon describes users altering their regular work behavior because they know an analyst is watching them?",
            "options": ["A. Placebo Effect", "B. Hawthorne Effect", "C. Halo Effect", "D. Murphy's Law"],
            "answer": "B. Hawthorne Effect",
            "explanation": "The Hawthorne Effect is the documented psychological phenomenon where individuals modify or improve an aspect of their behavior in response to being observed."
        },
        {
            "id": "m4-q4",
            "number": 4,
            "type": "mcq",
            "category": "Multiple Choice",
            "question": "Which interview type utilizes a fixed, pre-written list of questions asked in identical sequence to all interviewees to facilitate direct comparison?",
            "options": ["A. Unstructured Interview", "B. Structured Interview", "C. Semi-structured Interview", "D. Focus Group Discussion"],
            "answer": "B. Structured Interview",
            "explanation": "Structured interviews use a rigid, pre-defined question sequence to standardize responses and allow direct comparative analysis across subjects."
        },
        {
            "id": "m4-q5",
            "number": 5,
            "type": "mcq",
            "category": "Multiple Choice",
            "question": "If an analyst wants to uncover the exact fields printed on a school's official billing invoice without interrupting employees, which technique is ideal?",
            "options": ["A. Document Analysis", "B. Student Survey", "C. Active Observation", "D. Brainstorming Session"],
            "answer": "A. Document Analysis",
            "explanation": "Document analysis inspects invoices, forms, receipts, and reports to establish exact data entity specifications without taking up employee time."
        },
        {
            "id": "m4-q6",
            "number": 6,
            "type": "mcq",
            "category": "Multiple Choice",
            "question": "What is the single most commonly used interview style in modern systems analysis because it balances structure with conversational flexibility?",
            "options": ["A. Completely Unstructured", "B. Semi-Structured", "C. Strictly Scripted", "D. Cross-Examination"],
            "answer": "B. Semi-Structured",
            "explanation": "Semi-structured interviews allow an analyst to cover mandatory agenda items while freely investigating unexpected insights through adaptive follow-up probes."
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
            "explanation": "Once distributed, ambiguous survey questions cannot be re-explained in real-time, risking skewed or flawed responses."
        },
        {
            "id": "m4-q8",
            "number": 8,
            "type": "mcq",
            "category": "Multiple Choice",
            "question": "During requirements gathering, an analyst asks a cashier: 'Why do you re-write this student number on paper before typing it into the computer?' Which technique is this?",
            "options": ["A. Passive Observation", "B. Active Observation", "C. Document Archival", "D. Closed Survey"],
            "answer": "B. Active Observation",
            "explanation": "Active observation involves conversing with and interrupting the user during their workflow to ask immediate clarifying questions."
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
            "explanation": "Documents describe what should happen formally on paper; observation and interviews are required to discover how work is actually conducted in practice."
        },
        {
            "id": "m4-q10",
            "number": 10,
            "type": "mcq",
            "category": "Multiple Choice",
            "question": "In requirements gathering, questions where respondents must choose from predefined choices (e.g. Yes/No or Rating 1-5) are called:",
            "options": ["A. Open-ended questions", "B. Closed-ended questions", "C. Rhetorical questions", "D. Exploratory questions"],
            "answer": "B. Closed-ended questions",
            "explanation": "Closed-ended questions limit respondents to predefined selections, making them easy to quantify and analyze statistically."
        },
        # Part II: Technique Matching (11-15)
        {
            "id": "m4-q11",
            "number": 11,
            "type": "identification",
            "category": "Technique Matching",
            "question": "Eliciting deeply nuanced, strategic project expectations and institutional goals directly from the University President:",
            "options": ["Interview", "Observation", "Questionnaire", "Document Analysis"],
            "answer": "Interview",
            "explanation": "Interview — Strategic executive direction and high-level priorities require direct, nuanced one-on-one dialogue with top leadership."
        },
        {
            "id": "m4-q12",
            "number": 12,
            "type": "identification",
            "category": "Technique Matching",
            "question": "Discovering that warehouse staff regularly bypass an error message by unplugging the barcode scanner:",
            "options": ["Observation", "Interview", "Questionnaire", "Document Analysis"],
            "answer": "Observation",
            "explanation": "Observation — Workers rarely report breaking protocols during interviews; shadowing them physically reveals real-world shortcuts and workarounds."
        },
        {
            "id": "m4-q13",
            "number": 13,
            "type": "identification",
            "category": "Technique Matching",
            "question": "Extracting statutory tax calculation formulas and deduction rules from the national employee benefits manual:",
            "options": ["Document Analysis", "Interview", "Observation", "Questionnaire"],
            "answer": "Document Analysis",
            "explanation": "Document Analysis — Formal tax formulas, legal deduction percentages, and company policies are documented in written manuals with legal accuracy."
        },
        {
            "id": "m4-q14",
            "number": 14,
            "type": "identification",
            "category": "Technique Matching",
            "question": "Measuring overall customer satisfaction with a banking mobile app across 10,000 nationwide mobile app users:",
            "options": ["Questionnaire", "Interview", "Observation", "Document Analysis"],
            "answer": "Questionnaire",
            "explanation": "Questionnaire — Reaching 10,000 dispersed users nationwide requires an automated, low-cost digital survey."
        },
        {
            "id": "m4-q15",
            "number": 15,
            "type": "identification",
            "category": "Technique Matching",
            "question": "Reconciling a situation where two senior managers provide contradictory descriptions of the approval chain:",
            "options": ["Interview", "Observation", "Questionnaire", "Document Analysis"],
            "answer": "Interview",
            "explanation": "Interview — Diplomatic, private one-on-one interviews are needed to uncover reasons behind conflicting managerial viewpoints and negotiate alignment."
        },
        # Part III: True or False (16-20)
        {
            "id": "m4-q16",
            "number": 16,
            "type": "tf",
            "category": "True or False",
            "question": "Closed-ended questions in questionnaires provide rich qualitative descriptions but are nearly impossible to analyze statistically.",
            "options": ["True", "False"],
            "answer": "False",
            "explanation": "False — Closed-ended questions produce quantitative numerical data that is very easy to compile and analyze statistically."
        },
        {
            "id": "m4-q17",
            "number": 17,
            "type": "tf",
            "category": "True or False",
            "question": "The primary reason for combining multiple requirements gathering techniques is that each technique has unique blind spots and limitations.",
            "options": ["True", "False"],
            "answer": "True",
            "explanation": "True — Methodological triangulation combines multiple techniques to cross-verify data and eliminate individual weaknesses."
        },
        {
            "id": "m4-q18",
            "number": 18,
            "type": "tf",
            "category": "True or False",
            "question": "In active observation, the system analyst never speaks to or interrupts the employee while they work.",
            "options": ["True", "False"],
            "answer": "False",
            "explanation": "False — In active observation, the analyst specifically interrupts the worker to ask real-time questions about their process."
        },
        {
            "id": "m4-q19",
            "number": 19,
            "type": "tf",
            "category": "True or False",
            "question": "Document analysis can reveal official business rules, but it often fails to uncover unofficial employee shortcuts.",
            "options": ["True", "False"],
            "answer": "True",
            "explanation": "True — Written records describe the ideal formal policy; employees frequently devise informal shortcuts not documented in manuals."
        },
        {
            "id": "m4-q20",
            "number": 20,
            "type": "tf",
            "category": "True or False",
            "question": "Requirements gathering is only necessary if the software developers are completely unfamiliar with the programming language.",
            "options": ["True", "False"],
            "answer": "False",
            "explanation": "False — Requirements gathering is vital for every project to ensure the software solves the actual operational business needs of users."
        },
        # Part IV: Scenario Application & Essay (21-22)
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
            "explanation": "Model Answer: Recommended First Technique: Document Analysis. Justification: Studying existing enrollment forms, subject evaluation sheets, billing slips, and course catalogs enables the analyst to: 1) Master university terminology and data entities without wasting staff time, 2) Avoid asking basic, repetitive questions in upcoming stakeholder interviews, and 3) Target confusing paperwork in subsequent interviews."
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
            "explanation": "Model Answer: Comparison: • Depth: Interviews provide rich qualitative depth; surveys provide broad, shallow quantitative data. • Cost & Time: Interviews are costly and time-intensive; questionnaires have low marginal cost per respondent. • Flexibility: Interviews allow spontaneous follow-ups; surveys are rigid. When to Choose Interviews: When engaging senior leaders, reconciling disputed processes, or probing complex business rules."
        }
    ]
}

print("Module 4 defined successfully!")
