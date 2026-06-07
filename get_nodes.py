import paramiko

c = paramiko.SSHClient()
c.set_missing_host_key_policy(paramiko.AutoAddPolicy())
c.connect('178.105.97.204', username='deploy', password='Elhuracano2727%', timeout=15)

script = """
const { Pool } = require('pg');
const pool = new Pool({ connectionString: 'postgresql://goodcall:GCai2026untilBILL@5.78.183.117:5432/goodcall_db' });
pool.query("SELECT p.nombre, n.name, n.content FROM re_system.nodos n JOIN re_system.partidas p ON n.partida_id = p.id WHERE p.nombre ILIKE '%pagina web%' OR p.nombre ILIKE '%web%'")
  .then(r => { console.log(JSON.stringify(r.rows, null, 2)); pool.end(); })
  .catch(e => { console.error(e); pool.end(); });
"""

sftp = c.open_sftp()
with sftp.open('/home/deploy/query_nodes2.js', 'w') as f:
    f.write(script)
sftp.close()

stdin, stdout, stderr = c.exec_command('source ~/.nvm/nvm.sh && node /home/deploy/query_nodes2.js', get_pty=True)
print(stdout.read().decode())
print(stderr.read().decode())
c.close()
