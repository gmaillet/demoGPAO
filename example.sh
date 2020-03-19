# ajout d'un job (commande "ls")
curl -d "command=ls" -d "status=ready" -d "log=" http://localhost:3000/jobs
# recuperation d'un job
curl http://localhost:3000/jobs
# mise a jour d'un job
curl -X PUT -d "status=done" -d "log=ras" http://localhost:3000/jobs/0