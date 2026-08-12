import json
import re

with open('sam_full.txt', 'r', encoding='utf-8') as f:
    sam_raw = f.read()

with open('ns_full.txt', 'r', encoding='utf-8') as f:
    ns_raw = f.read()

# Let's inspect answer keys in SAM
print("Parsing SAM and NS data...")
