import json
from build_sam import sam_study, sam_questions
from build_ns import ns_study, ns_questions

modules_data = {
    "modules": [
        {
            "id": "network-security",
            "title": "Network Security",
            "subtitle": "Complete Study Reviewer & Practice Examination",
            "description": "Comprehensive guide covering CIA Triad, AAA Framework, Perimeters, Threats, Security Controls, and Cryptography (Symmetric, Asymmetric, Hashing, PKI).",
            "icon": "fa-shield-halved",
            "badge": "Cybersecurity",
            "themeColor": "#0ea5e9", # Cyan/Sky Blue
            "accentGradient": "linear-gradient(135deg, #0284c7 0%, #06b6d4 100%)",
            "study": ns_study,
            "questions": ns_questions
        },
        {
            "id": "system-admin",
            "title": "System Administration & Maintenance",
            "subtitle": "Reviewer & Practice Exam Questionnaire",
            "description": "Comprehensive guide covering System vs. Network Admin roles, Infrastructure devices, OS pre-installation, MBR/GPT partitioning, NTFS/ext4 file systems, and maintenance.",
            "icon": "fa-server",
            "badge": "System & Network Admin",
            "themeColor": "#10b981", # Emerald/Green
            "accentGradient": "linear-gradient(135deg, #059669 0%, #10b981 100%)",
            "study": sam_study,
            "questions": sam_questions
        }
    ]
}

js_content = f"window.REVIEWER_DATA = {json.dumps(modules_data, indent=2)};"

with open("data.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print("data.js generated successfully!")
print(f"Network Security Questions: {len(ns_questions)}")
print(f"System Admin Questions: {len(sam_questions)}")
