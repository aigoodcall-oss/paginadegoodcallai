import json

with open('nodos_actuales_c10.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

with open('pricing_prompts.txt', 'w', encoding='utf-8') as out:
    for n in data:
        prompt = n.get('data', {}).get('prompt_registro', '')
        if prompt and ('precio' in prompt.lower() or 'plan' in prompt.lower() or 'web' in prompt.lower() or 'wsp' in prompt.lower()):
            out.write(f"--- Node: {n.get('nombre')} ---\n")
            out.write(prompt + "\n")
            out.write("-------------------------------\n\n")
