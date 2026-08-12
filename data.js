window.REVIEWER_DATA = {
  "modules": [
    {
      "id": "network-security",
      "title": "Network Security",
      "subtitle": "Complete Study Reviewer & Practice Examination",
      "description": "Comprehensive guide covering CIA Triad, AAA Framework, Perimeters, Threats, Security Controls, and Cryptography (Symmetric, Asymmetric, Hashing, PKI).",
      "icon": "fa-shield-halved",
      "badge": "Cybersecurity",
      "themeColor": "#0ea5e9",
      "accentGradient": "linear-gradient(135deg, #0284c7 0%, #06b6d4 100%)",
      "study": [
        {
          "id": "ns-part1",
          "title": "Module 1: Introduction to Network Security & Fundamentals",
          "icon": "fa-shield-halved",
          "sections": [
            {
              "subtitle": "Definition & Organizational Importance",
              "content": "\nNetwork Security involves protecting data, devices, and networks from unauthorized access, attacks, or damage, ensuring the **confidentiality**, **integrity**, and **availability** of information resources across an organization.\n"
            },
            {
              "subtitle": "The CIA Triad & AAA Model",
              "content": "\n- **Confidentiality**: Ensures sensitive information is accessible *only to authorized individuals*, preventing data breaches and unauthorized disclosure (e.g. Encryption, Access Controls, File Permissions).\n- **Integrity**: Safeguards data accuracy and completeness by preventing *unauthorized modification or tampering* (e.g. Hashing, Digital Signatures, Versioning).\n- **Availability**: Guarantees that systems, networks, and data are *accessible to authorized users whenever needed* (e.g. Redundancy, Load Balancing, DDoS Mitigation, Backups).\n\n#### The AAA Security Framework:\n- **Authentication**: Verifies *who you are* (e.g. Passwords, Multi-Factor Authentication / MFA, Biometrics).\n- **Authorization**: Determines *what you can do / access* (e.g. Role-Based Access Control / RBAC, File ACLs).\n- **Accounting**: Tracks and records *what you did* (e.g. Audit Logs, Session Timelines, Event logs).\n"
            },
            {
              "subtitle": "Network Architecture & Security Perimeters",
              "content": "\n- **LAN vs WAN**: Local Area Networks (LAN) cover limited geographical spaces (offices, homes) while Wide Area Networks (WAN) span larger distances (connecting branch offices over the internet).\n- **Demilitarized Zone (DMZ)**: A perimeter subnetwork that isolates an organization's internal network from untrusted external networks (Internet). Public-facing servers (Web, Mail, DNS) are placed in the DMZ.\n- **Firewalls**: Security devices or software that inspect incoming and outgoing network traffic based on predefined security rules.\n- **Network Segmentation**: Dividing a network into subnetworks or VLANs to contain breaches and restrict lateral movement.\n"
            },
            {
              "subtitle": "Threats, Attacks & Vulnerabilities Taxonomy",
              "table": {
                "headers": [
                  "Threat / Attack Type",
                  "Key Characteristics & Operational Impact"
                ],
                "rows": [
                  [
                    "Virus",
                    "Malicious code attached to clean host files; requires human interaction/execution to spread."
                  ],
                  [
                    "Worm",
                    "Self-replicating standalone malware; spreads automatically across network vulnerabilities without user intervention."
                  ],
                  [
                    "Trojan Horse",
                    "Disguises itself as legitimate software to trick users into executing malicious code."
                  ],
                  [
                    "Ransomware",
                    "Encrypts victim files/systems and demands payment for the decryption key."
                  ],
                  [
                    "Spyware",
                    "Secretly monitors user activity, keystrokes, and credentials without authorization."
                  ],
                  [
                    "Man-in-the-Middle (MitM)",
                    "Attacker intercepts and optionally alters communication between two unsuspecting parties."
                  ],
                  [
                    "DDoS Attack",
                    "Floods network bandwidth or server capacity with traffic from multiple botnets to compromise Availability."
                  ],
                  [
                    "Phishing",
                    "Social engineering attack using deceptive emails or links to trick users into revealing credentials."
                  ]
                ]
              }
            },
            {
              "subtitle": "Security Controls Taxonomy",
              "content": "\n- **Preventive Controls**: Block unauthorized activity before it occurs (Firewalls, Encryption, Access Controls).\n- **Detective Controls**: Identify and alert on malicious activity during or after occurrence (IDS, Log Monitoring, Antivirus scans).\n- **Corrective Controls**: Restore systems and repair damage after a security incident (Backups, Patching, Disaster Recovery).\n- **Deterrent Controls**: Discourage potential attackers (Warning Banners, Security Cameras, Legal Notices).\n- **Technical Controls**: Implemented through hardware or software technology (Firewalls, MFA, Passwords).\n- **Administrative Controls**: Policies, procedures, awareness training, and guidelines.\n- **Physical Controls**: Physical barriers protecting hardware (Fences, Locks, Biometric Scanners, Security Guards).\n"
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
              "content": "\n- **Plaintext**: Unencrypted, human-readable data.\n- **Ciphertext**: Encrypted, unreadable data generated by a cipher algorithm.\n- **Cipher**: Mathematical algorithm used for encryption and decryption.\n"
            },
            {
              "subtitle": "Symmetric vs. Asymmetric Encryption Matrix",
              "table": {
                "headers": [
                  "Feature",
                  "Symmetric Encryption",
                  "Asymmetric Encryption"
                ],
                "rows": [
                  [
                    "Key Usage",
                    "Single shared secret key for encryption & decryption",
                    "Key pair: Public key (encrypts) & Private key (decrypts)"
                  ],
                  [
                    "Speed & Efficiency",
                    "Extremely fast; high performance for bulk data",
                    "Slower; computationally intensive"
                  ],
                  [
                    "Key Distribution",
                    "Challenging (key must be shared securely beforehand)",
                    "Easy (Public key shared openly, Private key kept secret)"
                  ],
                  [
                    "Primary Use Cases",
                    "Data at rest (disk encryption), bulk data transmission",
                    "Key exchange, digital signatures, SSL/TLS handshakes"
                  ],
                  [
                    "Common Algorithms",
                    "AES, DES, 3DES, Blowfish",
                    "RSA, ECC, Diffie-Hellman, DSA"
                  ]
                ]
              }
            },
            {
              "subtitle": "Hash Functions & Integrity Verification",
              "content": "\nA **Hash Function** takes an input of arbitrary length and transforms it into a fixed-length string of characters (digest). \n\n#### Properties of Cryptographic Hashes:\n1. **One-Way (Pre-image Resistance)**: Infeasible to reverse ciphertext back to original plaintext.\n2. **Deterministic**: Same input always produces the exact same hash output.\n3. **Collision Resistant**: Practically impossible for two different inputs to yield the identical hash output.\n4. **Avalanche Effect**: Minor change in input drastically changes the resulting hash output.\n\n#### Common Hash Algorithms:\n- **MD5**: Legacy 128-bit hash algorithm; now considered cryptographically broken due to collision vulnerabilities.\n- **SHA-1**: Legacy 160-bit hash algorithm; deprecated due to theoretical and practical collision attacks.\n- **SHA-256 (SHA-2 Family)**: Secure 256-bit hash standard widely used in digital certificates, Bitcoin, and TLS/SSL.\n"
            },
            {
              "subtitle": "Digital Signatures & Public Key Infrastructure (PKI)",
              "content": "\n- **Digital Signatures**: Provide **Authenticity**, **Integrity**, and **Non-Repudiation**.\n  - *Sender* signs data using their **Private Key**.\n  - *Receiver* verifies signature using sender's **Public Key**.\n- **Non-Repudiation**: Prevents the sender from denying having sent a message or originating a transaction.\n- **Public Key Infrastructure (PKI)**: Framework of hardware, software, policies, and Certificate Authorities (CAs) that manage digital certificates and public key pairs.\n"
            }
          ]
        }
      ],
      "questions": [
        {
          "id": "ns-q1",
          "number": 1,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Which pillar of the CIA triad is compromised during a Distributed Denial of Service (DDoS) attack?",
          "options": [
            "a) Confidentiality",
            "b) Integrity",
            "c) Availability",
            "d) Non-repudiation"
          ],
          "answer": "c) Availability",
          "explanation": "DDoS floods network capacity or service endpoints with bogus traffic, taking system services offline and directly violating Availability."
        },
        {
          "id": "ns-q2",
          "number": 2,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "An attacker intercepts communication between two users, secretly altering data packets in transit. What type of attack is occurring?",
          "options": [
            "a) Phishing attack",
            "b) Man-in-the-Middle (MitM) attack",
            "c) Zero-Day exploit",
            "d) Ransomware attack"
          ],
          "answer": "b) Man-in-the-Middle (MitM) attack",
          "explanation": "In a MitM attack, an unauthorized entity sits between communicating endpoints to eavesdrop on or manipulate transmitted packets."
        },
        {
          "id": "ns-q3",
          "number": 3,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Which malware type replicates automatically across network vulnerabilities without requiring user intervention?",
          "options": [
            "a) Virus",
            "b) Spyware",
            "c) Worm",
            "d) Trojan Horse"
          ],
          "answer": "c) Worm",
          "explanation": "Worms are self-propagating programs that exploit network flaws to spread autonomously, whereas viruses require human file execution."
        },
        {
          "id": "ns-q4",
          "number": 4,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "What is the principal operational difference between an Intrusion Detection System (IDS) and an Intrusion Prevention System (IPS)?",
          "options": [
            "a) IDS operates in inline mode to block threats; IPS operates out-of-band.",
            "b) IDS monitors and alerts on traffic; IPS actively blocks detected malicious traffic inline.",
            "c) IDS encrypts network traffic; IPS generates public key certificates.",
            "d) IDS requires hardware; IPS is purely software."
          ],
          "answer": "b) IDS monitors and alerts on traffic; IPS actively blocks detected malicious traffic inline.",
          "explanation": "IDS is a passive monitor that generates security alerts; IPS sits inline in the traffic path to proactively filter and drop malicious packets."
        },
        {
          "id": "ns-q5",
          "number": 5,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Which security control category best describes mandatory security awareness training for all employees?",
          "options": [
            "a) Technical Control",
            "b) Administrative Control",
            "c) Physical Control",
            "d) Compensating Control"
          ],
          "answer": "b) Administrative Control",
          "explanation": "Administrative controls consist of organizational policies, operational procedures, security guidelines, and employee training."
        },
        {
          "id": "ns-q6",
          "number": 6,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Which characteristic is a major operational challenge of symmetric key cryptography?",
          "options": [
            "a) Slow processing speed",
            "b) Inability to encrypt large files",
            "c) Secure key distribution across untrusted channels",
            "d) Requirement of public key certificates"
          ],
          "answer": "c) Secure key distribution across untrusted channels",
          "explanation": "Symmetric encryption uses the exact same key for encryption and decryption; securely transmitting that secret key to remote parties is a classic challenge."
        },
        {
          "id": "ns-q7",
          "number": 7,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "In asymmetric cryptography, if User A wants to send a confidential encrypted message to User B, which key must User A use?",
          "options": [
            "a) User A's private key",
            "b) User A's public key",
            "c) User B's public key",
            "d) User B's private key"
          ],
          "answer": "c) User B's public key",
          "explanation": "Messages encrypted with User B's public key can only be decrypted by User B's corresponding private key, guaranteeing confidentiality."
        },
        {
          "id": "ns-q8",
          "number": 8,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Which statement accurately describes a cryptographic hash function property?",
          "options": [
            "a) It allows easy decryption of hash outputs back to plaintext.",
            "b) It produces a fixed-length digest regardless of input size.",
            "c) It uses public-private key pairs to scramble plaintext.",
            "d) It generates variable-length outputs for fixed inputs."
          ],
          "answer": "b) It produces a fixed-length digest regardless of input size.",
          "explanation": "Cryptographic hash functions take arbitrary input lengths and produce a fixed-size hash digest (e.g. SHA-256 always outputs 256 bits)."
        },
        {
          "id": "ns-q9",
          "number": 9,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Which asymmetric algorithm offers equivalent cryptographic security to RSA but with significantly smaller key sizes and lower computational overhead?",
          "options": [
            "a) AES-256",
            "b) Elliptic Curve Cryptography (ECC)",
            "c) Triple DES (3DES)",
            "d) Blowfish"
          ],
          "answer": "b) Elliptic Curve Cryptography (ECC)",
          "explanation": "ECC provides robust security with much smaller key lengths (e.g., 256-bit ECC matches ~3072-bit RSA), making it ideal for mobile devices and high-speed TLS."
        },
        {
          "id": "ns-q10",
          "number": 10,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "What primary security objective does a digital signature achieve that simple symmetric encryption alone cannot guarantee?",
          "options": [
            "a) Speed optimization",
            "b) Non-repudiation and proof of origin",
            "c) High-capacity bandwidth expansion",
            "d) Password hashing"
          ],
          "answer": "b) Non-repudiation and proof of origin",
          "explanation": "Digital signatures bind a sender's private key to the message, proving authenticity and preventing the sender from denying message creation."
        },
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
        {
          "id": "ns-q21",
          "number": 21,
          "type": "tf",
          "category": "True / False",
          "question": "Asymmetric encryption is faster and computationally lighter than symmetric encryption for bulk file data.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False",
          "explanation": "False: Symmetric encryption is significantly faster and less computationally intensive than asymmetric encryption."
        },
        {
          "id": "ns-q22",
          "number": 22,
          "type": "tf",
          "category": "True / False",
          "question": "Cryptographic hash functions are designed as one-way mathematical functions that cannot be decrypted back into original plaintext.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True",
          "explanation": "True: Hash algorithms are inherently one-way mathematical transformations; they cannot be reversed."
        },
        {
          "id": "ns-q23",
          "number": 23,
          "type": "tf",
          "category": "True / False",
          "question": "Public keys must be kept strictly confidential, while private keys are freely distributed to the public.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False",
          "explanation": "False: Public keys are shared openly with everyone; private keys MUST be kept strictly secret."
        },
        {
          "id": "ns-q24",
          "number": 24,
          "type": "tf",
          "category": "True / False",
          "question": "Insider threats include both malicious employees and negligent staff who accidentally expose sensitive credentials.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True",
          "explanation": "True: Insider threats encompass both malicious intent (sabotage) and negligent errors (falling for phishing)."
        },
        {
          "id": "ns-q25",
          "number": 25,
          "type": "tf",
          "category": "True / False",
          "question": "A digital signature is created using the sender's public key.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False",
          "explanation": "False: A digital signature is generated using the sender's PRIVATE key and verified by receivers using the sender's PUBLIC key."
        },
        {
          "id": "ns-q26",
          "number": 26,
          "type": "tf",
          "category": "True / False",
          "question": "SHA-256 produces a fixed 256-bit output hash digest regardless of the input data size.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True",
          "explanation": "True: SHA-256 generates a 256-bit (32-byte) hash output regardless of whether input is 1 byte or 1 Terabyte."
        },
        {
          "id": "ns-q27",
          "number": 27,
          "type": "tf",
          "category": "True / False",
          "question": "An Intrusion Prevention System (IPS) passively monitors traffic and only generates alert logs.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False",
          "explanation": "False: An IPS actively sits inline to block and drop malicious packets. IDS is the passive monitoring tool."
        },
        {
          "id": "ns-q28",
          "number": 28,
          "type": "tf",
          "category": "True / False",
          "question": "Multi-Factor Authentication (MFA) requires presenting two or more independent authentication factors (e.g. password + TOTP code).",
          "options": [
            "True",
            "False"
          ],
          "answer": "True",
          "explanation": "True: MFA mandates two or more distinct categories (Something you know, Something you have, Something you are)."
        },
        {
          "id": "ns-q29",
          "number": 29,
          "type": "tf",
          "category": "True / False",
          "question": "MD5 is recommended for high-security applications like modern digital certificates.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False",
          "explanation": "False: MD5 is vulnerable to collision attacks and is deprecated; SHA-256 or SHA-3 are required."
        },
        {
          "id": "ns-q30",
          "number": 30,
          "type": "tf",
          "category": "True / False",
          "question": "Non-repudiation ensures a sender cannot deny originating a digitally signed transmission.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True",
          "explanation": "True: Non-repudiation cryptographically proves the origin of a message so the sender cannot claim it was forged."
        },
        {
          "id": "ns-q31",
          "number": 31,
          "type": "scenario",
          "category": "Scenario Analysis",
          "question": "A web application server was overwhelmed by billions of requests from multiple infected host machines across the globe, causing legitimate customers to experience connection timeouts. What attack occurred and which CIA pillar was breached?",
          "options": [
            "A. Phishing attack breaching Confidentiality",
            "B. Distributed Denial of Service (DDoS) breaching Availability",
            "C. Man-in-the-Middle attack breaching Integrity",
            "D. Ransomware attack breaching Authorization"
          ],
          "answer": "B. Distributed Denial of Service (DDoS) breaching Availability",
          "explanation": "DDoS attacks use botnet floods to exhaust server resources, denying access to legitimate users and violating Availability."
        },
        {
          "id": "ns-q32",
          "number": 32,
          "type": "scenario",
          "category": "Scenario Analysis",
          "question": "Alice wants to send a sensitive contract file to Bob over an insecure network. They need fast encryption for the 500 MB file and secure key exchange. Which hybrid cryptosystem approach should they use?",
          "options": [
            "A. Encrypt file with RSA private key directly",
            "B. Use asymmetric encryption (RSA/ECC) to securely exchange a symmetric session key (AES), then encrypt the 500 MB file with AES.",
            "C. Hash the file with MD5 and email plaintext",
            "D. Send file unencrypted with a digital signature"
          ],
          "answer": "B. Use asymmetric encryption (RSA/ECC) to securely exchange a symmetric session key (AES), then encrypt the 500 MB file with AES.",
          "explanation": "Modern TLS/SSL uses hybrid cryptography: asymmetric keys establish a fast symmetric session key (AES), combining high speed with key security."
        },
        {
          "id": "ns-q33",
          "number": 33,
          "type": "scenario",
          "category": "Scenario Analysis",
          "question": "An e-commerce site downloads a software update from a vendor. Before executing the installer, the admin verifies the SHA-256 hash published on the vendor site. What security property are they checking?",
          "options": [
            "A. Confidentiality",
            "B. Integrity",
            "C. Availability",
            "D. Accounting"
          ],
          "answer": "B. Integrity",
          "explanation": "Comparing cryptographic file hashes confirms that the file was not altered, corrupted, or injected with malware during download (Integrity)."
        },
        {
          "id": "ns-q34",
          "number": 34,
          "type": "scenario",
          "category": "Scenario Analysis",
          "question": "A company wants to host an external web server accessible to the public internet while ensuring that an exploit on the web server does not give hackers direct access to internal database servers. Where should the web server be placed?",
          "options": [
            "A. Internal Core Subnet",
            "B. Demilitarized Zone (DMZ)",
            "C. Management VLAN",
            "D. Loopback Interface"
          ],
          "answer": "B. Demilitarized Zone (DMZ)",
          "explanation": "Placing public servers in a DMZ isolates them from internal LAN segments using firewalls, preventing lateral compromise."
        },
        {
          "id": "ns-q35",
          "number": 35,
          "type": "scenario",
          "category": "Scenario Analysis",
          "question": "An executive receives an email claiming their email account will be closed unless they click a link and enter their credentials. The link redirects to a fake login page. What attack is this?",
          "options": [
            "A. Phishing (Social Engineering)",
            "B. Zero-Day Exploit",
            "C. SQL Injection",
            "D. Buffer Overflow"
          ],
          "answer": "A. Phishing (Social Engineering)",
          "explanation": "Phishing deceives victims through fraudulent communications into surrendering sensitive credentials or personal information."
        }
      ]
    },
    {
      "id": "system-admin",
      "title": "System Administration & Maintenance",
      "subtitle": "Reviewer & Practice Exam Questionnaire",
      "description": "Comprehensive guide covering System vs. Network Admin roles, Infrastructure devices, OS pre-installation, MBR/GPT partitioning, NTFS/ext4 file systems, and maintenance.",
      "icon": "fa-server",
      "badge": "System & Network Admin",
      "themeColor": "#10b981",
      "accentGradient": "linear-gradient(135deg, #059669 0%, #10b981 100%)",
      "study": [
        {
          "id": "sam-part1",
          "title": "Part I: Introduction to System & Network Administration",
          "icon": "fa-network-wired",
          "sections": [
            {
              "subtitle": "Core Definitions & Responsibilities",
              "content": "\n- **System Administration**: Management, maintenance, and support of computer systems, servers, and IT infrastructure to ensure reliability, security, and performance.\n  - *Key Responsibilities*: Server setup & OS installation, user account management & permissions, system backups & disaster recovery, applying OS updates & patches, monitoring system performance & logs.\n- **Network Administration**: Management and maintenance of network infrastructure to ensure connectivity, bandwidth availability, and network security across systems.\n  - *Key Responsibilities*: Configuring routers, switches, and firewalls; managing IP addresses, subnets, and VLANs; monitoring network traffic & troubleshooting connectivity; maintaining network security & VPNs.\n"
            },
            {
              "subtitle": "Role Comparison Matrix",
              "table": {
                "headers": [
                  "Feature",
                  "System Administrator",
                  "Network Administrator"
                ],
                "rows": [
                  [
                    "Primary Focus",
                    "Servers, OS, Users, Applications, Storage",
                    "Routers, Switches, Firewalls, Cables, Traffic"
                  ],
                  [
                    "Key Goal",
                    "Ensure system availability & performance",
                    "Ensure network connectivity & data flow"
                  ],
                  [
                    "Scope",
                    "Internal host configuration & user support",
                    "Inter-device communication & perimeter defense"
                  ],
                  [
                    "Common Tools",
                    "Active Directory, PowerShell, bash, systemd, msconfig",
                    "Cisco IOS, Wireshark, traceroute, ping, VLAN managers"
                  ]
                ]
              }
            },
            {
              "subtitle": "Key Infrastructure Components",
              "content": "\n- **Router**: Connects *different networks* (e.g., LAN to WAN / Internet). Operates at Layer 3 (Network Layer) and routes packets based on IP addresses.\n- **Switch**: Connects *devices within the same LAN*. Operates at Layer 2 (Data Link Layer) and forwards frames using MAC addresses.\n- **Firewall**: Filters and protects network traffic based on security rules. Can be hardware or software based.\n- **Server**: Provides services, resources, or data to client systems (e.g., Web Server, File Server, Active Directory Domain Controller).\n"
            }
          ]
        },
        {
          "id": "sam-part2",
          "title": "Part II: OS Installation & Configuration",
          "icon": "fa-server",
          "sections": [
            {
              "subtitle": "Pre-Installation Hardware Requirements",
              "content": "\nBefore OS installation, confirm CPU speed, RAM capacity, and disk space meet minimum OS requirements. Cross-reference hardware with manufacturer specs to avoid driver and firmware conflicts. Prepare bootable USB/DVD media or configure a network PXE server.\n"
            },
            {
              "subtitle": "Three Critical Pre-Installation Decisions",
              "content": "\n1. **Boot Sequence**: Configure BIOS/UEFI firmware settings to prioritize the installation media (USB/DVD/PXE).\n2. **Installation Strategy**:\n   - *Clean Installation*: Formats drive completely, removing all previous OS/data (recommended for new deployment or clean slate).\n   - *Upgrade*: Preserves user files, applications, and settings while updating the OS version.\n3. **Partitioning Scheme**: MBR vs. GPT.\n"
            },
            {
              "subtitle": "Partitioning Schemes: MBR vs. GPT",
              "table": {
                "headers": [
                  "Feature",
                  "MBR (Master Boot Record)",
                  "GPT (GUID Partition Table)"
                ],
                "rows": [
                  [
                    "Architecture",
                    "Legacy standard",
                    "Modern standard (UEFI required)"
                  ],
                  [
                    "Max Drive Size",
                    "2 TB limit",
                    "Up to 9.4 ZB (Zettabytes)"
                  ],
                  [
                    "Primary Partitions",
                    "Up to 4 Primary partitions (or 3 Primary + 1 Extended)",
                    "Up to 128 Primary partitions in Windows"
                  ],
                  [
                    "Redundancy",
                    "Single boot record (vulnerable to corruption)",
                    "Backup partition table header at end of disk"
                  ]
                ]
              }
            },
            {
              "subtitle": "File Systems",
              "content": "\n- **NTFS (New Technology File System)**: Windows default. Supports large files (>4GB), detailed file permissions (ACLs), encryption (EFS), journaling, and compression.\n- **FAT32**: High compatibility across Windows, Mac, Linux, and embedded devices; max file size limit of 4 GB, max volume limit of 32 GB / 2 TB depending on tool.\n- **ext4 (Fourth Extended File System)**: Linux default file system, supports journaling, large file sizes, and high performance.\n"
            },
            {
              "subtitle": "Post-Installation & Maintenance Best Practices",
              "content": "\n- **Principle of Least Privilege**: Grant users only the minimum level of access required to perform their job duties (prevents unauthorized access & malware spread).\n- **Critical OS Updates**: Install security updates regularly to patch known vulnerabilities.\n- **System Logs**: Use tools like `systemd` / `journalctl` (Linux) or Event Viewer (Windows) to monitor kernel events, service failures, and security audits.\n- **Optimization Tools**: Use `msconfig` / Task Manager (Windows) or `systemctl` / `services.msc` to disable unnecessary startup services.\n- **Device Health**: Check Device Manager to verify all drivers are properly installed without error icons.\n"
            }
          ]
        },
        {
          "id": "sam-high-yield",
          "title": "High-Yield Exam Summary Points",
          "icon": "fa-bolt",
          "sections": [
            {
              "subtitle": "Quick Memory Anchors",
              "content": "\n- **System Admin** \u2794 Servers, OS, Users, Backups, Permissions, Logs.\n- **Network Admin** \u2794 Routers, Switches, Firewalls, IP Addresses, VLANs, Cabling.\n- **Router** \u2794 Connects DIFFERENT networks (LAN to WAN).\n- **Switch** \u2794 Connects devices within the SAME network (LAN).\n- **Firewall** \u2794 Filters network traffic based on security policies.\n- **Server** \u2794 Host providing central services to clients.\n- **MBR** \u2794 Legacy, 2 TB max size, up to 4 Primary partitions.\n- **GPT** \u2794 Modern, >2 TB support, up to 128 Primary partitions, requires UEFI.\n- **NTFS** \u2794 Windows standard with security ACLs, journaling, EFS.\n- **ext4** \u2794 Standard Linux file system with journaling.\n- **Principle of Least Privilege** \u2794 Limit user rights to essential tasks only.\n- **msconfig** \u2794 Windows startup optimization utility.\n- **systemd** \u2794 Linux init system and service manager.\n"
            }
          ]
        }
      ],
      "questions": [
        {
          "id": "sam-q1",
          "number": 1,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Which role is primarily responsible for OS installation, user management, and system backups?",
          "options": [
            "A. Network Administrator",
            "B. System Administrator",
            "C. Database Administrator",
            "D. Web Developer"
          ],
          "answer": "B. System Administrator",
          "explanation": "System Administrators oversee local host operating systems, user accounts, system configuration, backups, and server maintenance."
        },
        {
          "id": "sam-q2",
          "number": 2,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Which role primarily manages routers, switches, IP addresses, and VLANs?",
          "options": [
            "A. System Administrator",
            "B. Helpdesk Technician",
            "C. Network Administrator",
            "D. Security Analyst"
          ],
          "answer": "C. Network Administrator",
          "explanation": "Network Administrators focus on inter-device network connectivity, routers, switches, subnets, VLANs, and firewall perimeter rules."
        },
        {
          "id": "sam-q3",
          "number": 3,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "What is the main purpose of a system administrator?",
          "options": [
            "A. Designing websites",
            "B. Cable installation only",
            "C. Writing application code",
            "D. Ensuring system reliability, performance, and security"
          ],
          "answer": "D. Ensuring system reliability, performance, and security",
          "explanation": "The core objective of System Administration is keeping IT systems operational, secure, updated, and performing reliably."
        },
        {
          "id": "sam-q4",
          "number": 4,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Which device connects different networks together?",
          "options": [
            "A. Switch",
            "B. Router",
            "C. Server",
            "D. Firewall"
          ],
          "answer": "B. Router",
          "explanation": "Routers operate at Layer 3 to route packets across distinct IP networks (e.g. connecting a corporate LAN to the Internet)."
        },
        {
          "id": "sam-q5",
          "number": 5,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Which device connects devices within a LAN?",
          "options": [
            "A. Router",
            "B. Server",
            "C. Switch",
            "D. Firewall"
          ],
          "answer": "C. Switch",
          "explanation": "Switches operate at Layer 2 to connect workstations, servers, and printers within a local area network (LAN)."
        },
        {
          "id": "sam-q6",
          "number": 6,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Which device filters and protects network traffic?",
          "options": [
            "A. Switch",
            "B. Server",
            "C. Router",
            "D. Firewall"
          ],
          "answer": "D. Firewall",
          "explanation": "Firewalls inspect incoming and outgoing traffic against access control lists (ACLs) to block malicious or unauthorized access."
        },
        {
          "id": "sam-q7",
          "number": 7,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Which device provides services to clients?",
          "options": [
            "A. Server",
            "B. Switch",
            "C. Router",
            "D. Firewall"
          ],
          "answer": "A. Server",
          "explanation": "A server is a dedicated computer or system that processes requests and delivers services (web, file, domain) to client endpoints."
        },
        {
          "id": "sam-q8",
          "number": 8,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Which sequence represents the basic enterprise network overview?",
          "options": [
            "A. Switch -> Internet -> Firewall -> Router -> Server",
            "B. Internet -> Firewall -> Router -> Switch -> Server",
            "C. Server -> Internet -> Router -> Switch -> Firewall",
            "D. Router -> Switch -> Internet -> Server -> Firewall"
          ],
          "answer": "B. Internet -> Firewall -> Router -> Switch -> Server",
          "explanation": "Standard topology: Internet enters through security Firewall, routes through Router, distributes via Switch to internal Servers and workstations."
        },
        {
          "id": "sam-q9",
          "number": 9,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "What is the first step before installing an operating system?",
          "options": [
            "A. Verify system hardware requirements",
            "B. Install antivirus",
            "C. Create user accounts",
            "D. Configure VLANs"
          ],
          "answer": "A. Verify system hardware requirements",
          "explanation": "Always confirm hardware compatibility (CPU, RAM, disk space) first to prevent failure or instability during OS installation."
        },
        {
          "id": "sam-q10",
          "number": 10,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Where do you configure the system boot sequence?",
          "options": [
            "A. Control Panel",
            "B. BIOS/UEFI",
            "C. Task Manager",
            "D. Device Manager"
          ],
          "answer": "B. BIOS/UEFI",
          "explanation": "System boot priorities (USB, hard drive, PXE network boot) are configured in the motherboard firmware (BIOS/UEFI)."
        },
        {
          "id": "sam-q11",
          "number": 11,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Which installation type removes all existing data on the target partition?",
          "options": [
            "A. Repair Installation",
            "B. Upgrade Installation",
            "C. In-place Installation",
            "D. Clean Installation"
          ],
          "answer": "D. Clean Installation",
          "explanation": "A Clean Installation formats the target drive partition, erasing existing OS and files to build a fresh system."
        },
        {
          "id": "sam-q12",
          "number": 12,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Which partitioning scheme is modern?",
          "options": [
            "A. MBR",
            "B. GPT",
            "C. FAT",
            "D. NTFS"
          ],
          "answer": "B. GPT",
          "explanation": "GPT (GUID Partition Table) is the modern standard replacing legacy MBR, supporting disks larger than 2TB and up to 128 partitions."
        },
        {
          "id": "sam-q13",
          "number": 13,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "What is the MBR disk size limit stated in the lesson?",
          "options": [
            "A. 500 GB",
            "B. 1 TB",
            "C. 2 TB",
            "D. 4 TB"
          ],
          "answer": "C. 2 TB",
          "explanation": "MBR uses 32-bit logical block addressing, restricting maximum usable disk size to 2 Terabytes."
        },
        {
          "id": "sam-q14",
          "number": 14,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "How many primary partitions can MBR support according to the lesson?",
          "options": [
            "A. 2",
            "B. 4",
            "C. 8",
            "D. Unlimited"
          ],
          "answer": "B. 4",
          "explanation": "MBR partition table structure allocates slots for up to 4 Primary partitions (or 3 Primary + 1 Extended)."
        },
        {
          "id": "sam-q15",
          "number": 15,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "What is the purpose of an extended partition?",
          "options": [
            "A. It provides internet access",
            "B. It contains multiple logical partitions",
            "C. It boosts RAM performance",
            "D. It formats the drive"
          ],
          "answer": "B. It contains multiple logical partitions",
          "explanation": "An Extended Partition overcomes MBR's 4-primary partition limit by acting as a container for multiple logical drives."
        },
        {
          "id": "sam-q16",
          "number": 16,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Which file system is standard for modern Windows operating systems?",
          "options": [
            "A. FAT32",
            "B. NTFS",
            "C. ext4",
            "D. exFAT"
          ],
          "answer": "B. NTFS",
          "explanation": "NTFS (New Technology File System) is the native file system for modern Windows, offering ACL security, encryption, and journaling."
        },
        {
          "id": "sam-q17",
          "number": 17,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Which file system is standard for Linux OS installation?",
          "options": [
            "A. NTFS",
            "B. FAT32",
            "C. ext4",
            "D. MBR"
          ],
          "answer": "C. ext4",
          "explanation": "ext4 (Fourth Extended File System) is the default, high-performance Linux file system."
        },
        {
          "id": "sam-q18",
          "number": 18,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "What limitation exists in FAT32?",
          "options": [
            "A. Max disk size of 100 MB",
            "B. Max file size of 4 GB",
            "C. No support for USB drives",
            "D. Works only on Linux"
          ],
          "answer": "B. Max file size of 4 GB",
          "explanation": "FAT32 cannot store individual files larger than 4 Gigabytes (4,294,967,295 bytes)."
        },
        {
          "id": "sam-q19",
          "number": 19,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Which component is required before starting OS installation from a flash drive?",
          "options": [
            "A. Bootable installation media",
            "B. Mouse",
            "C. Keyboard",
            "D. Monitor"
          ],
          "answer": "A. Bootable installation media",
          "explanation": "A bootable USB/DVD containing OS setup files is essential to initialize the installer upon boot."
        },
        {
          "id": "sam-q20",
          "number": 20,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Which Windows tool can be used to optimize startup?",
          "options": [
            "A. systemd",
            "B. Anaconda",
            "C. msconfig",
            "D. BIOS"
          ],
          "answer": "C. msconfig",
          "explanation": "msconfig (System Configuration utility) allows Windows admins to enable/disable startup services and boot parameters."
        },
        {
          "id": "sam-q21",
          "number": 21,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Which Linux component is mentioned for managing system startup/services?",
          "options": [
            "A. msconfig",
            "B. systemd",
            "C. Device Manager",
            "D. setup.exe"
          ],
          "answer": "B. systemd",
          "explanation": "systemd is the standard Linux suite providing system initialization and service management (`systemctl`)."
        },
        {
          "id": "sam-q22",
          "number": 22,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "What does the Principle of Least Privilege mean?",
          "options": [
            "A. Everyone should have administrator access",
            "B. Users should only have the access necessary for their work",
            "C. Disable all user accounts",
            "D. Share passwords among team members"
          ],
          "answer": "B. Users should only have the access necessary for their work",
          "explanation": "Least Privilege ensures users and processes operate with the minimal essential permissions to restrict security risks."
        },
        {
          "id": "sam-q23",
          "number": 23,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Which installer is commonly associated with Fedora/Red Hat Linux distributions?",
          "options": [
            "A. Rufus",
            "B. Ventoy",
            "C. Anaconda",
            "D. BalenaEtcher"
          ],
          "answer": "C. Anaconda",
          "explanation": "Anaconda is the graphical installer engine used by Fedora, RHEL, and CentOS Linux distributions."
        },
        {
          "id": "sam-q24",
          "number": 24,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Why is PXE boot useful in enterprise environments?",
          "options": [
            "A. It installs OS without CPU",
            "B. It allows OS installation over the network",
            "C. It replaces switches",
            "D. It formats hard drives automatically without confirmation"
          ],
          "answer": "B. It allows OS installation over the network",
          "explanation": "Preboot Execution Environment (PXE) enables machines to boot and install operating systems directly from a network deployment server."
        },
        {
          "id": "sam-q25",
          "number": 25,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "What is the primary role of a domain controller?",
          "options": [
            "A. Route external internet traffic",
            "B. Play multimedia content",
            "C. Manage user authentication and security policies across a domain",
            "D. Monitor CPU temperature"
          ],
          "answer": "C. Manage user authentication and security policies across a domain",
          "explanation": "Domain Controllers (e.g. Windows Active Directory) centrally authenticate users and enforce centralized group security policies."
        },
        {
          "id": "sam-q26",
          "number": 26,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Which of the following is a network administration task?",
          "options": [
            "A. Installing local software apps",
            "B. Configuring router subnets and VLANs",
            "C. Resetting local user passwords",
            "D. Replacing laptop keyboards"
          ],
          "answer": "B. Configuring router subnets and VLANs",
          "explanation": "Managing subnets, IP routing, and VLAN segmentation is a core responsibility of Network Administrators."
        },
        {
          "id": "sam-q27",
          "number": 27,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Why should critical OS updates be installed?",
          "options": [
            "A. To change the wallpaper",
            "B. To close known vulnerabilities",
            "C. To increase monitor resolution",
            "D. To create VLANs"
          ],
          "answer": "B. To close known vulnerabilities",
          "explanation": "Regular OS updates fix security flaws and patch software vulnerabilities that could otherwise be exploited by attackers."
        },
        {
          "id": "sam-q28",
          "number": 28,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "What can system logs help monitor?",
          "options": [
            "A. Kernel events and service failures",
            "B. Monitor brightness",
            "C. Keyboard layout only",
            "D. CPU brand"
          ],
          "answer": "A. Kernel events and service failures",
          "explanation": "Logs capture operational history, kernel events, driver faults, security audit events, and service failures for troubleshooting."
        },
        {
          "id": "sam-q29",
          "number": 29,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Which tool is mentioned for maintaining hardware health?",
          "options": [
            "A. Device Manager",
            "B. Router Manager",
            "C. Cable Tester",
            "D. Subnet Calculator"
          ],
          "answer": "A. Device Manager",
          "explanation": "Device Manager inspects hardware state, driver status, resource conflicts, and malfunctioning peripheral devices in Windows."
        },
        {
          "id": "sam-q30",
          "number": 30,
          "type": "mcq",
          "category": "Multiple Choice",
          "question": "Which credential or certification is often associated with entry-level network administration?",
          "options": [
            "A. RHCE",
            "B. PMP",
            "C. CCNA",
            "D. CEH"
          ],
          "answer": "C. CCNA",
          "explanation": "Cisco Certified Network Associate (CCNA) is a premier foundational certification for network administration."
        },
        {
          "id": "sam-q31",
          "number": 31,
          "type": "identification",
          "category": "Identification",
          "question": "The management and maintenance of computer systems, servers, and IT infrastructure.",
          "answer": "System Administration",
          "explanation": "System Administration is the field dealing with host maintenance, OS configuration, backups, and server operations."
        },
        {
          "id": "sam-q32",
          "number": 32,
          "type": "identification",
          "category": "Identification",
          "question": "The administration role focused on network devices and communication between systems.",
          "answer": "Network Administration",
          "explanation": "Network Administration ensures seamless inter-system communication, network device management, and traffic security."
        },
        {
          "id": "sam-q33",
          "number": 33,
          "type": "identification",
          "category": "Identification",
          "question": "A device that connects different networks.",
          "answer": "Router",
          "explanation": "Routers forward packets between distinct logical or physical network boundaries (Layer 3)."
        },
        {
          "id": "sam-q34",
          "number": 34,
          "type": "identification",
          "category": "Identification",
          "question": "A device that connects devices within a LAN.",
          "answer": "Switch",
          "explanation": "Switches interconnect nodes inside a localized network segment using MAC addresses (Layer 2)."
        },
        {
          "id": "sam-q35",
          "number": 35,
          "type": "identification",
          "category": "Identification",
          "question": "A device that filters and protects traffic.",
          "answer": "Firewall",
          "explanation": "Firewalls enforce access control security policies by filtering incoming and outgoing network traffic."
        },
        {
          "id": "sam-q36",
          "number": 36,
          "type": "identification",
          "category": "Identification",
          "question": "The modern disk partitioning scheme that supports drive sizes larger than 2 TB.",
          "answer": "GPT",
          "explanation": "GUID Partition Table (GPT) supports disk volumes up to 9.4 Zettabytes."
        },
        {
          "id": "sam-q37",
          "number": 37,
          "type": "identification",
          "category": "Identification",
          "question": "The legacy partitioning scheme limited to 4 primary partitions.",
          "answer": "MBR",
          "explanation": "Master Boot Record (MBR) is limited to 4 primary partition table entries."
        },
        {
          "id": "sam-q38",
          "number": 38,
          "type": "identification",
          "category": "Identification",
          "question": "The primary file system used by Windows OS.",
          "answer": "NTFS",
          "explanation": "NTFS is Microsoft's primary file system for modern Windows environments."
        },
        {
          "id": "sam-q39",
          "number": 39,
          "type": "identification",
          "category": "Identification",
          "question": "The default file system commonly used in Linux installations.",
          "answer": "ext4",
          "explanation": "ext4 is the 4th extended file system widely used across Linux distributions."
        },
        {
          "id": "sam-q40",
          "number": 40,
          "type": "identification",
          "category": "Identification",
          "question": "The security principle stating users should only have rights necessary for their tasks.",
          "answer": "Principle of Least Privilege",
          "explanation": "Least privilege limits user rights to essential functions only, reducing administrative risk."
        },
        {
          "id": "sam-q41",
          "number": 41,
          "type": "identification",
          "category": "Identification",
          "question": "Windows tool used to manage startup applications.",
          "answer": "msconfig",
          "explanation": "System Configuration utility (msconfig) manages Windows startup items and services."
        },
        {
          "id": "sam-q42",
          "number": 42,
          "type": "identification",
          "category": "Identification",
          "question": "Linux system initialization and service manager.",
          "answer": "systemd",
          "explanation": "systemd is the standard background service init framework in modern Linux."
        },
        {
          "id": "sam-q43",
          "number": 43,
          "type": "identification",
          "category": "Identification",
          "question": "Term used when a RAID array is operating with a failed disk but still functional.",
          "answer": "Degraded",
          "explanation": "A degraded RAID state indicates a lost drive in a fault-tolerant array (e.g. RAID 1/5) operating without redundancy."
        },
        {
          "id": "sam-q44",
          "number": 44,
          "type": "identification",
          "category": "Identification",
          "question": "Technology that creates a virtual software version of a physical machine.",
          "answer": "Virtualization",
          "explanation": "Virtualization allows running multiple guest OS instances on a single hypervisor host."
        },
        {
          "id": "sam-q45",
          "number": 45,
          "type": "identification",
          "category": "Identification",
          "question": "Installer framework used by Fedora and Red Hat Linux distributions.",
          "answer": "Anaconda",
          "explanation": "Anaconda is the standard OS installer software for Red Hat family Linux distributions."
        },
        {
          "id": "sam-q46",
          "number": 46,
          "type": "identification",
          "category": "Identification",
          "question": "Method of installing an OS over the network without local physical media.",
          "answer": "PXE boot",
          "explanation": "Preboot Execution Environment (PXE) loads installer files over network protocols."
        },
        {
          "id": "sam-q47",
          "number": 47,
          "type": "identification",
          "category": "Identification",
          "question": "Process of preserving data to recover from system failure.",
          "answer": "Backup",
          "explanation": "System Backups create copies of data/OS states for disaster recovery."
        },
        {
          "id": "sam-q48",
          "number": 48,
          "type": "identification",
          "category": "Identification",
          "question": "Windows feature that allows centralized control over computer settings across an organization.",
          "answer": "Group Policy",
          "explanation": "Group Policy Management (GPO) enforces system and user configurations in Windows Active Directory domains."
        },
        {
          "id": "sam-q49",
          "number": 49,
          "type": "identification",
          "category": "Identification",
          "question": "Hardware firmware standard replacing legacy BIOS.",
          "answer": "UEFI",
          "explanation": "Unified Extensible Firmware Interface (UEFI) is the modern system initialization firmware replacing BIOS."
        },
        {
          "id": "sam-q50",
          "number": 50,
          "type": "identification",
          "category": "Identification",
          "question": "Role responsible for maintaining file servers and user credentials.",
          "answer": "System Administrator",
          "explanation": "System Admins manage file shares, user directory permissions, and user credentials."
        },
        {
          "id": "sam-q51",
          "number": 51,
          "type": "tf",
          "category": "True / False",
          "question": "A System Administrator manages routers and switches as their primary daily task.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False",
          "explanation": "False: Managing routers and switches is primarily the daily responsibility of a Network Administrator."
        },
        {
          "id": "sam-q52",
          "number": 52,
          "type": "tf",
          "category": "True / False",
          "question": "MBR supports hard drives up to 10 TB natively without partitions.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False",
          "explanation": "False: MBR has a maximum disk size limit of 2 TB."
        },
        {
          "id": "sam-q53",
          "number": 53,
          "type": "tf",
          "category": "True / False",
          "question": "GPT supports more than 4 primary partitions in Windows environments.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True",
          "explanation": "True: GPT supports up to 128 primary partitions in Windows."
        },
        {
          "id": "sam-q54",
          "number": 54,
          "type": "tf",
          "category": "True / False",
          "question": "FAT32 file system allows single file sizes larger than 4 GB.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False",
          "explanation": "False: FAT32 has an absolute single file size limit of 4 GB."
        },
        {
          "id": "sam-q55",
          "number": 55,
          "type": "tf",
          "category": "True / False",
          "question": "Clean installation completely replaces all data on the target partition.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True",
          "explanation": "True: A clean installation formats the target drive partition."
        },
        {
          "id": "sam-q56",
          "number": 56,
          "type": "tf",
          "category": "True / False",
          "question": "Switches are used to connect different networks over the internet.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False",
          "explanation": "False: Routers connect different networks over the internet; switches connect devices within a single LAN."
        },
        {
          "id": "sam-q57",
          "number": 57,
          "type": "tf",
          "category": "True / False",
          "question": "Least privilege policy enhances system security by restricting unnecessary user permissions.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True",
          "explanation": "True: Minimizing user access levels prevents security breaches and accidental modifications."
        },
        {
          "id": "sam-q58",
          "number": 58,
          "type": "tf",
          "category": "True / False",
          "question": "BIOS/UEFI settings must be adjusted to boot from a flash drive when performing an OS installation.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True",
          "explanation": "True: System firmware boot priority must list the installation USB before internal storage drives."
        },
        {
          "id": "sam-q59",
          "number": 59,
          "type": "tf",
          "category": "True / False",
          "question": "Event logs are useful tools for diagnosing system errors and service failures.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True",
          "explanation": "True: Event logs store operational logs crucial for diagnostic analysis."
        },
        {
          "id": "sam-q60",
          "number": 60,
          "type": "tf",
          "category": "True / False",
          "question": "Network Administrators commonly manage VLAN configuration and IP routing.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True",
          "explanation": "True: VLANs and IP subnets/routing are core network administration areas."
        },
        {
          "id": "sam-q61",
          "number": 61,
          "type": "scenario",
          "category": "Scenario Analysis",
          "question": "An employee cannot log into their desktop computer because their local account password expired. Which administrator should handle this issue?",
          "options": [
            "A. System Administrator",
            "B. Network Administrator",
            "C. Hardware Vendor",
            "D. ISP Specialist"
          ],
          "answer": "A. System Administrator",
          "explanation": "System Administrator \u2014 the issue involves user account authentication and local OS security permissions."
        },
        {
          "id": "sam-q62",
          "number": 62,
          "type": "scenario",
          "category": "Scenario Analysis",
          "question": "The office cannot access the internet because the default gateway router is misconfigured. Which administrator should handle the problem?",
          "options": [
            "A. System Administrator",
            "B. Network Administrator",
            "C. Database Administrator",
            "D. Web Designer"
          ],
          "answer": "B. Network Administrator",
          "explanation": "Network Administrator \u2014 default gateway routers and WAN internet access fall directly under network administration."
        },
        {
          "id": "sam-q63",
          "number": 63,
          "type": "scenario",
          "category": "Scenario Analysis",
          "question": "A company needs to install Windows Server on a new physical machine. Which role is primarily responsible?",
          "options": [
            "A. Network Administrator",
            "B. System Administrator",
            "C. Security Auditor",
            "D. Telecom Engineer"
          ],
          "answer": "B. System Administrator",
          "explanation": "System Administrator \u2014 server OS deployment, configuration, and server role commissioning are system administration duties."
        },
        {
          "id": "sam-q64",
          "number": 64,
          "type": "scenario",
          "category": "Scenario Analysis",
          "question": "Users cannot communicate between VLAN 10 and VLAN 20. Which administrator should investigate?",
          "options": [
            "A. System Administrator",
            "B. Network Administrator",
            "C. Storage Administrator",
            "D. Application Developer"
          ],
          "answer": "B. Network Administrator",
          "explanation": "Network Administrator \u2014 inter-VLAN routing and switch configuration belong to network administration."
        },
        {
          "id": "sam-q65",
          "number": 65,
          "type": "scenario",
          "category": "Scenario Analysis",
          "question": "A server's hard drive must be backed up before scheduled system maintenance. Which admin performs this task?",
          "options": [
            "A. System Administrator",
            "B. Network Administrator",
            "C. Cable Technician",
            "D. Helpdesk Level 1"
          ],
          "answer": "A. System Administrator",
          "explanation": "System Administrator \u2014 performing server backups and system image snapshots is a system admin duty."
        },
        {
          "id": "sam-q66",
          "number": 66,
          "type": "scenario",
          "category": "Scenario Analysis",
          "question": "A technician tries to format a 4 TB drive using MBR partition scheme, but can only utilize 2 TB. What is the cause?",
          "options": [
            "A. Broken hard drive",
            "B. MBR 2 TB size limit limitation",
            "C. Corrupted cable",
            "D. Insufficient RAM"
          ],
          "answer": "B. MBR 2 TB size limit limitation",
          "explanation": "MBR partitioning uses 32-bit sector addressing, limiting max addressable disk capacity to 2 TB. Upgrading to GPT resolves this."
        },
        {
          "id": "sam-q67",
          "number": 67,
          "type": "scenario",
          "category": "Scenario Analysis",
          "question": "A user cannot copy a single 6 GB ISO file to an external drive formatted in FAT32, despite having 100 GB of free space. Why?",
          "options": [
            "A. FAT32 4 GB max file size limit",
            "B. External drive is broken",
            "C. Windows blocking ISO files",
            "D. Computer lacks USB 3.0"
          ],
          "answer": "A. FAT32 4 GB max file size limit",
          "explanation": "FAT32 file system cannot store any single file exceeding 4 GB. Reformatting the drive to NTFS or exFAT solves the issue."
        },
        {
          "id": "sam-q68",
          "number": 68,
          "type": "scenario",
          "category": "Scenario Analysis",
          "question": "A company wants to deploy 50 identical laptops without creating USB boot keys for each. What solution should be used?",
          "options": [
            "A. Manual DVD insertion",
            "B. PXE Network Boot Deployment",
            "C. Downloading installer on each laptop",
            "D. Upgrading MBR to GPT manually"
          ],
          "answer": "B. PXE Network Boot Deployment",
          "explanation": "PXE network booting combined with automated deployment servers allows mass OS installation across local networks without physical media."
        },
        {
          "id": "sam-q69",
          "number": 69,
          "type": "scenario",
          "category": "Scenario Analysis",
          "question": "An administrator wants to prevent users from installing unauthorized software on office PCs. Which security principle applies?",
          "options": [
            "A. High Availability",
            "B. Principle of Least Privilege",
            "C. Maximum Redundancy",
            "D. Open Access"
          ],
          "answer": "B. Principle of Least Privilege",
          "explanation": "By removing local administrator rights and giving standard user privileges (Least Privilege), users cannot execute unapproved software installers."
        },
        {
          "id": "sam-q70",
          "number": 70,
          "type": "scenario",
          "category": "Scenario Analysis",
          "question": "A Linux server crashes during startup after a service modification. Which log viewer or init tool is used to inspect the service status?",
          "options": [
            "A. msconfig",
            "B. systemd / journalctl",
            "C. Device Manager",
            "D. BIOS Setup"
          ],
          "answer": "B. systemd / journalctl",
          "explanation": "systemd and journalctl are Linux system logging commands used to inspect service logs and locate boot errors."
        }
      ]
    }
  ]
};