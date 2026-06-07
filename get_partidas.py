import paramiko

c = paramiko.SSHClient()
c.set_missing_host_key_policy(paramiko.AutoAddPolicy())
c.connect('178.105.97.204', username='deploy', password='Elhuracano2727%', timeout=15)

stdin, stdout, stderr = c.exec_command('PGPASSWORD=GCai2026untilBILL psql -h 5.78.183.117 -U goodcall -d goodcall_db -c "SELECT id, nombre FROM re_system.partidas;"')
print(stdout.read().decode())
print(stderr.read().decode())
c.close()
