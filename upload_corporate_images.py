import paramiko
import os

files = {
    'wsp_ai_corporate.png': r'C:\Users\User\.gemini\antigravity\brain\06c235ea-516c-4969-9586-62f766d5d3ea\wsp_ai_corporate_1780840216435.png',
    'voice_ai_corporate.png': r'C:\Users\User\.gemini\antigravity\brain\06c235ea-516c-4969-9586-62f766d5d3ea\voice_ai_corporate_1780840230002.png',
    'web_dev_corporate.png': r'C:\Users\User\.gemini\antigravity\brain\06c235ea-516c-4969-9586-62f766d5d3ea\web_dev_corporate_1780840242638.png'
}

c = paramiko.SSHClient()
c.set_missing_host_key_policy(paramiko.AutoAddPolicy())
c.connect('178.105.97.204', username='deploy', password='Elhuracano2727%', timeout=15)

sftp = c.open_sftp()
for name, local_path in files.items():
    remote_path = f'/home/deploy/pagina-staging/logos/{name}'
    print(f"Uploading {local_path} to {remote_path}...")
    sftp.put(local_path, remote_path)

sftp.close()
c.close()
print("All corporate images uploaded successfully!")
