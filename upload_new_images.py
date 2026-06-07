import paramiko

files = {
    'wsp_autoreply.png': r'C:\Users\User\.gemini\antigravity\brain\06c235ea-516c-4969-9586-62f766d5d3ea\wsp_autoreply_1780840584360.png',
    'asesor_llamando.png': r'C:\Users\User\.gemini\antigravity\brain\06c235ea-516c-4969-9586-62f766d5d3ea\asesor_llamando_1780840596826.png'
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
print("New corporate images uploaded successfully!")
