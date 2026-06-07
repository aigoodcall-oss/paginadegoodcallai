import paramiko

c = paramiko.SSHClient()
c.set_missing_host_key_policy(paramiko.AutoAddPolicy())
c.connect('178.105.97.204', username='deploy', password='Elhuracano2727%', timeout=15)

script = """
const { Pool } = require('pg');
const pool = new Pool({ connectionString: 'postgresql://goodcall:GCai2026untilBILL@5.78.183.117:5432/goodcall_db' });
pool.query("SELECT column_name, data_type FROM information_schema.columns WHERE table_schema = 're_system' AND table_name = 'partidas'")
  .then(r => { console.log(JSON.stringify(r.rows, null, 2)); pool.end(); })
  .catch(e => { console.error(e); pool.end(); });
"""

sftp = c.open_sftp()
with sftp.open('/home/deploy/re-system-pro/get_schema.js', 'w') as f:
    f.write(script)
sftp.close()

stdin, stdout, stderr = c.exec_command('source ~/.nvm/nvm.sh && cd /home/deploy/re-system-pro && node get_schema.js', get_pty=True)
print(stdout.read().decode())
print(stderr.read().decode())
c.close()
