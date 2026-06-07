import json

try:
    with open('canvas_web_nodes.json', 'r', encoding='utf-16') as f:
        data = json.load(f)
    
    with open('web_pricing.txt', 'w', encoding='utf-8') as out:
        for row in data:
            if 'data' in row and isinstance(row['data'], dict):
                prompt = row['data'].get('prompt_registro', '')
                if prompt:
                    out.write(f"--- Node: {row.get('nombre')} (Partida: {row.get('partida')}) ---\n")
                    out.write(prompt + "\n")
                    out.write("-------------------------------\n\n")
    print("Extracted to web_pricing.txt")
except Exception as e:
    print(f"Error: {e}")
