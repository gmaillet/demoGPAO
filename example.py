import requests
import subprocess

url = 'http://localhost:3000'

# ajout d'un job dans la base
x=requests.post('http://localhost:3000/jobs', data={'command':'ls', 'status':'ready', 'log':''})
Id= int(x.text.split(':')[1])
print('Nouveau job :', Id)

# recuperation d'un job a traiter tant qu'il en reste
x=requests.get('http://localhost:3000/jobs')
while (len(x.json())==1):
    job=x.json()[0]
    print('Job a traiter : ', job)
    # Traitement du job avec recuperation du code et des messages
    proc = subprocess.Popen(job['command'], stdout=subprocess.PIPE)
    (out, err) = proc.communicate()
    status='done'
    if (proc.returncode != 0):
        status='failed'
    # mise a jour de la Bd
    x=requests.put('http://localhost:3000/jobs/'+str(job['id']), data={'status':status, 'log':out})
    print(x.text)
    x=requests.get('http://localhost:3000/jobs')