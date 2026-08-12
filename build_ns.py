import json

ns_study = [
    {
        "id": "ns-part1",
        "title": "Module 1: Introduction to Network Security & Fundamentals",
        "icon": "fa-shield-halved",
        "sections": [
            {
                "subtitle": "Definition & Organizational Importance",
                "content": """
Network Security involves protecting data, devices, and networks from unauthorized access, attacks, or damage, ensuring the **confidentiality**, **integrity**, and **availability** of information resources across an organization.
"""
            },
            {
                "subtitle": "The CIA Triad & AAA Model",
                "content": """
- **Confidentiality**: Ensures sensitive information is accessible *only to authorized individuals*, preventing data breaches and unauthorized disclosure (e.g. Encryption, Access Controls, File Permissions).
- **Integrity**: Safeguards data accuracy and completeness by preventing *unauthorized modification or tampering* (e.g. Hashing, Digital Signatures, Versioning).
- **Availability**: Guarantees that systems, networks, and data are *accessible to authorized users whenever needed* (e.g. Redundancy, Load Balancing, DDoS Mitigation, Backups).

#### The AAA Security Framework:
- **Authentication**: Verifies *who you are* (e.g. Passwords, Multi-Factor Authentication / MFA, Biometrics).
- **Authorization**: Determines *what you can do / access* (e.g. Role-Based Access Control / RBAC, File ACLs).
- **Accounting**: Tracks and records *what you did* (e.g. Audit Logs, Session Timelines, Event logs).
"""
            },
            {
                "subtitle": "Network Architecture & Security Perimeters",
                "content": """
- **LAN vs WAN**: Local Area Networks (LAN) cover limited geographical spaces (offices, homes) while Wide Area Networks (WAN) span larger distances (connecting branch offices over the internet).
- **Demilitarized Zone (DMZ)**: A perimeter subnetwork that isolates an organization's internal network from untrusted external networks (Internet). Public-facing servers (Web, Mail, DNS) are placed in the DMZ.
- **Firewalls**: Security devices or software that inspect incoming and outgoing network traffic based on predefined security rules.
- **Network Segmentation**: Dividing a network into subnetworks or VLANs to contain breaches and restrict lateral movement.
"""
            },
            {
                "subtitle": "Threats, Attacks & Vulnerabilities Taxonomy",
                "table": {
                    "headers": ["Threat / Attack Type", "Key Characteristics & Operational Impact"],
                    "rows": [
                        ["Virus", "Malicious code attached to clean host files; requires human interaction/execution to spread."],
                        ["Worm", "Self-replicating standalone malware; spreads automatically across network vulnerabilities without user intervention."],
                        ["Trojan Horse", "Disguises itself as legitimate software to trick users into executing malicious code."],
                        ["Ransomware", "Encrypts victim files/systems and demands payment for the decryption key."],
                        ["Spyware", "Secretly monitors user activity, keystrokes, and credentials without authorization."],
                        ["Man-in-the-Middle (MitM)", "Attacker intercepts and optionally alters communication between two unsuspecting parties."],
                        ["DDoS Attack", "Floods network bandwidth or server capacity with traffic from multiple botnets to compromise Availability."],
                        ["Phishing", "Social engineering attack using deceptive emails or links to trick users into revealing credentials."]
                    ]
                }
            },
            {
                "subtitle": "Security Controls Taxonomy",
                "content": """
- **Preventive Controls**: Block unauthorized activity before it occurs (Firewalls, Encryption, Access Controls).
- **Detective Controls**: Identify and alert on malicious activity during or after occurrence (IDS, Log Monitoring, Antivirus scans).
- **Corrective Controls**: Restore systems and repair damage after a security incident (Backups, Patching, Disaster Recovery).
- **Deterrent Controls**: Discourage potential attackers (Warning Banners, Security Cameras, Legal Notices).
- **Technical Controls**: Implemented through hardware or software technology (Firewalls, MFA, Passwords).
- **Administrative Controls**: Policies, procedures, awareness training, and guidelines.
- **Physical Controls**: Physical barriers protecting hardware (Fences, Locks, Biometric Scanners, Security Guards).
"""
            }
        ]
    },
    {
        "id": "ns-part2",
        "title": "Module 2: Cryptography Fundamentals",
        "icon": "fa-key",
        "sections": [
            {
                "subtitle": "Core Cryptographic Concepts",
                "content": """
- **Plaintext**: Unencrypted, human-readable data.
- **Ciphertext**: Encrypted, unreadable data generated by a cipher algorithm.
- **Cipher**: Mathematical algorithm used for encryption and decryption.
"""
            },
            {
                "subtitle": "Symmetric vs. Asymmetric Encryption Matrix",
                "table": {
                    "headers": ["Feature", "Symmetric Encryption", "Asymmetric Encryption"],
                    "rows": [
                        ["Key Usage", "Single shared secret key for encryption & decryption", "Key pair: Public key (encrypts) & Private key (decrypts)"],
                        ["Speed & Efficiency", "Extremely fast; high performance for bulk data", "Slower; computationally intensive"],
                        ["Key Distribution", "Challenging (key must be shared securely beforehand)", "Easy (Public key shared openly, Private key kept secret)"],
                        ["Primary Use Cases", "Data at rest (disk encryption), bulk data transmission", "Key exchange, digital signatures, SSL/TLS handshakes"],
                        ["Common Algorithms", "AES, DES, 3DES, Blowfish", "RSA, ECC, Diffie-Hellman, DSA"]
                    ]
                }
            },
            {
                "subtitle": "Hash Functions & Integrity Verification",
                "content": """
A **Hash Function** takes an input of arbitrary length and transforms it into a fixed-length string of characters (digest). 

#### Properties of Cryptographic Hashes:
1. **One-Way (Pre-image Resistance)**: Infeasible to reverse ciphertext back to original plaintext.
2. **Deterministic**: Same input always produces the exact same hash output.
3. **Collision Resistant**: Practically impossible for two different inputs to yield the identical hash output.
4. **Avalanche Effect**: Minor change in input drastically changes the resulting hash output.

#### Common Hash Algorithms:
- **MD5**: Legacy 128-bit hash algorithm; now considered cryptographically broken due to collision vulnerabilities.
- **SHA-1**: Legacy 160-bit hash algorithm; deprecated due to theoretical and practical collision attacks.
- **SHA-256 (SHA-2 Family)**: Secure 256-bit hash standard widely used in digital certificates, Bitcoin, and TLS/SSL.
"""
            },
            {
                "subtitle": "Digital Signatures & Public Key Infrastructure (PKI)",
                "content": """
- **Digital Signatures**: Provide **Authenticity**, **Integrity**, and **Non-Repudiation**.
  - *Sender* signs data using their **Private Key**.
  - *Receiver* verifies signature using sender's **Public Key**.
- **Non-Repudiation**: Prevents the sender from denying having sent a message or originating a transaction.
- **Public Key Infrastructure (PKI)**: Framework of hardware, software, policies, and Certificate Authorities (CAs) that manage digital certificates and public key pairs.
"""
            }
        ]
    }
]

ns_questions = [
    # Section I: Multiple Choice
    {
        "id": "ns-q1",
        "number": 1,
        "type": "mcq",
        "category": "Multiple Choice",
        "question": "Which pillar of the CIA triad is compromised during a Distributed Denial of Service (DDoS) attack?",
        "options": ["a) Confidentiality", "b) Integrity", "c) Availability", "d) Non-repudiation"],
        "answer": "c) Availability",
        "explanation": "DDoS floods network capacity or service endpoints with bogus traffic, taking system services offline and directly violating Availability."
    },
    {
        "id": "ns-q2",
        "number": 2,
        "type": "mcq",
        "category": "Multiple Choice",
        "question": "An attacker intercepts communication between two users, secretly altering data packets in transit. What type of attack is occurring?",
        "options": ["a) Phishing attack", "b) Man-in-the-Middle (MitM) attack", "c) Zero-Day exploit", "d) Ransomware attack"],
        "answer": "b) Man-in-the-Middle (MitM) attack",
        "explanation": "In a MitM attack, an unauthorized entity sits between communicating endpoints to eavesdrop on or manipulate transmitted packets."
    },
    {
        "id": "ns-q3",
        "number": 3,
        "type": "mcq",
        "category": "Multiple Choice",
        "question": "Which malware type replicates automatically across network vulnerabilities without requiring user intervention?",
        "options": ["a) Virus", "b) Spyware", "c) Worm", "d) Trojan Horse"],
        "answer": "c) Worm",
        "explanation": "Worms are self-propagating programs that exploit network flaws to spread autonomously, whereas viruses require human file execution."
    },
    {
        "id": "ns-q4",
        "number": 4,
        "type": "mcq",
        "category": "Multiple Choice",
        "question": "What is the principal operational difference between an Intrusion Detection System (IDS) and an Intrusion Prevention System (IPS)?",
        "options": ["a) IDS operates in inline mode to block threats; IPS operates out-of-band.", "b) IDS monitors and alerts on traffic; IPS actively blocks detected malicious traffic inline.", "c) IDS encrypts network traffic; IPS generates public key certificates.", "d) IDS requires hardware; IPS is purely software."],
        "answer": "b) IDS monitors and alerts on traffic; IPS actively blocks detected malicious traffic inline.",
        "explanation": "IDS is a passive monitor that generates security alerts; IPS sits inline in the traffic path to proactively filter and drop malicious packets."
    },
    {
        "id": "ns-q5",
        "number": 5,
        "type": "mcq",
        "category": "Multiple Choice",
        "question": "Which security control category best describes mandatory security awareness training for all employees?",
        "options": ["a) Technical Control", "b) Administrative Control", "c) Physical Control", "d) Compensating Control"],
        "answer": "b) Administrative Control",
        "explanation": "Administrative controls consist of organizational policies, operational procedures, security guidelines, and employee training."
    },
    {
        "id": "ns-q6",
        "number": 6,
        "type": "mcq",
        "category": "Multiple Choice",
        "question": "Which characteristic is a major operational challenge of symmetric key cryptography?",
        "options": ["a) Slow processing speed", "b) Inability to encrypt large files", "c) Secure key distribution across untrusted channels", "d) Requirement of public key certificates"],
        "answer": "c) Secure key distribution across untrusted channels",
        "explanation": "Symmetric encryption uses the exact same key for encryption and decryption; securely transmitting that secret key to remote parties is a classic challenge."
    },
    {
        "id": "ns-q7",
        "number": 7,
        "type": "mcq",
        "category": "Multiple Choice",
        "question": "In asymmetric cryptography, if User A wants to send a confidential encrypted message to User B, which key must User A use?",
        "options": ["a) User A's private key", "b) User A's public key", "c) User B's public key", "d) User B's private key"],
        "answer": "c) User B's public key",
        "explanation": "Messages encrypted with User B's public key can only be decrypted by User B's corresponding private key, guaranteeing confidentiality."
    },
    {
        "id": "ns-q8",
        "number": 8,
        "type": "mcq",
        "category": "Multiple Choice",
        "question": "Which statement accurately describes a cryptographic hash function property?",
        "options": ["a) It allows easy decryption of hash outputs back to plaintext.", "b) It produces a fixed-length digest regardless of input size.", "c) It uses public-private key pairs to scramble plaintext.", "d) It generates variable-length outputs for fixed inputs."],
        "answer": "b) It produces a fixed-length digest regardless of input size.",
        "explanation": "Cryptographic hash functions take arbitrary input lengths and produce a fixed-size hash digest (e.g. SHA-256 always outputs 256 bits)."
    },
    {
        "id": "ns-q9",
        "number": 9,
        "type": "mcq",
        "category": "Multiple Choice",
        "question": "Which asymmetric algorithm offers equivalent cryptographic security to RSA but with significantly smaller key sizes and lower computational overhead?",
        "options": ["a) AES-256", "b) Elliptic Curve Cryptography (ECC)", "c) Triple DES (3DES)", "d) Blowfish"],
        "answer": "b) Elliptic Curve Cryptography (ECC)",
        "explanation": "ECC provides robust security with much smaller key lengths (e.g., 256-bit ECC matches ~3072-bit RSA), making it ideal for mobile devices and high-speed TLS."
    },
    {
        "id": "ns-q10",
        "number": 10,
        "type": "mcq",
        "category": "Multiple Choice",
        "question": "What primary security objective does a digital signature achieve that simple symmetric encryption alone cannot guarantee?",
        "options": ["a) Speed optimization", "b) Non-repudiation and proof of origin", "c) High-capacity bandwidth expansion", "d) Password hashing"],
        "answer": "b) Non-repudiation and proof of origin",
        "explanation": "Digital signatures bind a sender's private key to the message, proving authenticity and preventing the sender from denying message creation."
    },

    # Section II: Identification / Fill in the Blanks
    {
        "id": "ns-q11",
        "number": 11,
        "type": "identification",
        "category": "Identification",
        "question": "The pillar of the CIA triad that guarantees sensitive information is accessible only to authorized personnel.",
        "answer": "Confidentiality",
        "explanation": "Confidentiality ensures that secret or sensitive data cannot be viewed by unauthorized entities."
    },
    {
        "id": "ns-q12",
        "number": 12,
        "type": "identification",
        "category": "Identification",
        "question": "The AAA security element responsible for recording user actions, timestamps, and session activity in log files.",
        "answer": "Accounting",
        "explanation": "Accounting maintains detailed logs of user actions, login events, and resource consumption for security audits."
    },
    {
        "id": "ns-q13",
        "number": 13,
        "type": "identification",
        "category": "Identification",
        "question": "A perimeter network subnetwork that isolates public-facing servers (Web, Mail) from the internal organization network.",
        "answer": "DMZ (Demilitarized Zone)",
        "explanation": "A DMZ isolates public services from internal LAN resources to prevent external compromises from pivoting inward."
    },
    {
        "id": "ns-q14",
        "number": 14,
        "type": "identification",
        "category": "Identification",
        "question": "Malware that encrypts victim files and demands financial payment in exchange for the decryption key.",
        "answer": "Ransomware",
        "explanation": "Ransomware locks victim data using strong encryption and extorts money for access restoration."
    },
    {
        "id": "ns-q15",
        "number": 15,
        "type": "identification",
        "category": "Identification",
        "question": "Security control category implemented through software code, firewall rules, or hardware mechanisms.",
        "answer": "Technical Control",
        "explanation": "Technical controls utilize hardware or software mechanisms (firewalls, encryption, authentication) to protect assets."
    },
    {
        "id": "ns-q16",
        "number": 16,
        "type": "identification",
        "category": "Identification",
        "question": "The encryption paradigm that uses a single secret key for both encryption and decryption operations.",
        "answer": "Symmetric Encryption",
        "explanation": "Symmetric encryption relies on a shared secret key used symmetrically by sender and receiver."
    },
    {
        "id": "ns-q17",
        "number": 17,
        "type": "identification",
        "category": "Identification",
        "question": "The mathematical algorithm used in asymmetric encryption to generate public and private key pairs.",
        "answer": "RSA",
        "explanation": "RSA (Rivest-Shamir-Adleman) is a widely used asymmetric algorithm based on prime number factorization."
    },
    {
        "id": "ns-q18",
        "number": 18,
        "type": "identification",
        "category": "Identification",
        "question": "Legacy 128-bit hash algorithm that is no longer recommended due to collision vulnerabilities.",
        "answer": "MD5",
        "explanation": "MD5 generates 128-bit hash digests but has known collision flaws and is deprecated for security purposes."
    },
    {
        "id": "ns-q19",
        "number": 19,
        "type": "identification",
        "category": "Identification",
        "question": "Trusted third-party entity that issues and signs digital certificates within a Public Key Infrastructure.",
        "answer": "Certificate Authority (CA)",
        "explanation": "A Certificate Authority (CA) verifies identities and issues signed digital certificates."
    },
    {
        "id": "ns-q20",
        "number": 20,
        "type": "identification",
        "category": "Identification",
        "question": "Control measure that divides a physical network into separate subnets or VLANs to contain security breaches.",
        "answer": "Network Segmentation",
        "explanation": "Network segmentation partitions networks into isolated zones to stop lateral attack propagation."
    },

    # Section III: True / False
    {
        "id": "ns-q21",
        "number": 21,
        "type": "tf",
        "category": "True / False",
        "question": "Asymmetric encryption is faster and computationally lighter than symmetric encryption for bulk file data.",
        "options": ["True", "False"],
        "answer": "False",
        "explanation": "False: Symmetric encryption is significantly faster and less computationally intensive than asymmetric encryption."
    },
    {
        "id": "ns-q22",
        "number": 22,
        "type": "tf",
        "category": "True / False",
        "question": "Cryptographic hash functions are designed as one-way mathematical functions that cannot be decrypted back into original plaintext.",
        "options": ["True", "False"],
        "answer": "True",
        "explanation": "True: Hash algorithms are inherently one-way mathematical transformations; they cannot be reversed."
    },
    {
        "id": "ns-q23",
        "number": 23,
        "type": "tf",
        "category": "True / False",
        "question": "Public keys must be kept strictly confidential, while private keys are freely distributed to the public.",
        "options": ["True", "False"],
        "answer": "False",
        "explanation": "False: Public keys are shared openly with everyone; private keys MUST be kept strictly secret."
    },
    {
        "id": "ns-q24",
        "number": 24,
        "type": "tf",
        "category": "True / False",
        "question": "Insider threats include both malicious employees and negligent staff who accidentally expose sensitive credentials.",
        "options": ["True", "False"],
        "answer": "True",
        "explanation": "True: Insider threats encompass both malicious intent (sabotage) and negligent errors (falling for phishing)."
    },
    {
        "id": "ns-q25",
        "number": 25,
        "type": "tf",
        "category": "True / False",
        "question": "A digital signature is created using the sender's public key.",
        "options": ["True", "False"],
        "answer": "False",
        "explanation": "False: A digital signature is generated using the sender's PRIVATE key and verified by receivers using the sender's PUBLIC key."
    },
    {
        "id": "ns-q26",
        "number": 26,
        "type": "tf",
        "category": "True / False",
        "question": "SHA-256 produces a fixed 256-bit output hash digest regardless of the input data size.",
        "options": ["True", "False"],
        "answer": "True",
        "explanation": "True: SHA-256 generates a 256-bit (32-byte) hash output regardless of whether input is 1 byte or 1 Terabyte."
    },
    {
        "id": "ns-q27",
        "number": 27,
        "type": "tf",
        "category": "True / False",
        "question": "An Intrusion Prevention System (IPS) passively monitors traffic and only generates alert logs.",
        "options": ["True", "False"],
        "answer": "False",
        "explanation": "False: An IPS actively sits inline to block and drop malicious packets. IDS is the passive monitoring tool."
    },
    {
        "id": "ns-q28",
        "number": 28,
        "type": "tf",
        "category": "True / False",
        "question": "Multi-Factor Authentication (MFA) requires presenting two or more independent authentication factors (e.g. password + TOTP code).",
        "options": ["True", "False"],
        "answer": "True",
        "explanation": "True: MFA mandates two or more distinct categories (Something you know, Something you have, Something you are)."
    },
    {
        "id": "ns-q29",
        "number": 29,
        "type": "tf",
        "category": "True / False",
        "question": "MD5 is recommended for high-security applications like modern digital certificates.",
        "options": ["True", "False"],
        "answer": "False",
        "explanation": "False: MD5 is vulnerable to collision attacks and is deprecated; SHA-256 or SHA-3 are required."
    },
    {
        "id": "ns-q30",
        "number": 30,
        "type": "tf",
        "category": "True / False",
        "question": "Non-repudiation ensures a sender cannot deny originating a digitally signed transmission.",
        "options": ["True", "False"],
        "answer": "True",
        "explanation": "True: Non-repudiation cryptographically proves the origin of a message so the sender cannot claim it was forged."
    },

    # Section IV: Short Answer & Scenario Analysis
    {
        "id": "ns-q31",
        "number": 31,
        "type": "scenario",
        "category": "Scenario Analysis",
        "question": "A web application server was overwhelmed by billions of requests from multiple infected host machines across the globe, causing legitimate customers to experience connection timeouts. What attack occurred and which CIA pillar was breached?",
        "options": ["A. Phishing attack breaching Confidentiality", "B. Distributed Denial of Service (DDoS) breaching Availability", "C. Man-in-the-Middle attack breaching Integrity", "D. Ransomware attack breaching Authorization"],
        "answer": "B. Distributed Denial of Service (DDoS) breaching Availability",
        "explanation": "DDoS attacks use botnet floods to exhaust server resources, denying access to legitimate users and violating Availability."
    },
    {
        "id": "ns-q32",
        "number": 32,
        "type": "scenario",
        "category": "Scenario Analysis",
        "question": "Alice wants to send a sensitive contract file to Bob over an insecure network. They need fast encryption for the 500 MB file and secure key exchange. Which hybrid cryptosystem approach should they use?",
        "options": ["A. Encrypt file with RSA private key directly", "B. Use asymmetric encryption (RSA/ECC) to securely exchange a symmetric session key (AES), then encrypt the 500 MB file with AES.", "C. Hash the file with MD5 and email plaintext", "D. Send file unencrypted with a digital signature"],
        "answer": "B. Use asymmetric encryption (RSA/ECC) to securely exchange a symmetric session key (AES), then encrypt the 500 MB file with AES.",
        "explanation": "Modern TLS/SSL uses hybrid cryptography: asymmetric keys establish a fast symmetric session key (AES), combining high speed with key security."
    },
    {
        "id": "ns-q33",
        "number": 33,
        "type": "scenario",
        "category": "Scenario Analysis",
        "question": "An e-commerce site downloads a software update from a vendor. Before executing the installer, the admin verifies the SHA-256 hash published on the vendor site. What security property are they checking?",
        "options": ["A. Confidentiality", "B. Integrity", "C. Availability", "D. Accounting"],
        "answer": "B. Integrity",
        "explanation": "Comparing cryptographic file hashes confirms that the file was not altered, corrupted, or injected with malware during download (Integrity)."
    },
    {
        "id": "ns-q34",
        "number": 34,
        "type": "scenario",
        "category": "Scenario Analysis",
        "question": "A company wants to host an external web server accessible to the public internet while ensuring that an exploit on the web server does not give hackers direct access to internal database servers. Where should the web server be placed?",
        "options": ["A. Internal Core Subnet", "B. Demilitarized Zone (DMZ)", "C. Management VLAN", "D. Loopback Interface"],
        "answer": "B. Demilitarized Zone (DMZ)",
        "explanation": "Placing public servers in a DMZ isolates them from internal LAN segments using firewalls, preventing lateral compromise."
    },
    {
        "id": "ns-q35",
        "number": 35,
        "type": "scenario",
        "category": "Scenario Analysis",
        "question": "An executive receives an email claiming their email account will be closed unless they click a link and enter their credentials. The link redirects to a fake login page. What attack is this?",
        "options": ["A. Phishing (Social Engineering)", "B. Zero-Day Exploit", "C. SQL Injection", "D. Buffer Overflow"],
        "answer": "A. Phishing (Social Engineering)",
        "explanation": "Phishing deceives victims through fraudulent communications into surrendering sensitive credentials or personal information."
    }
]

print("NS questions prepared:", len(ns_questions))
