# demoGPAO
demo GPAO minimaliste

Pour le moment il n'y qu'une table *jobs* avec les champs (Id, Command, status, log)

Une API trois routes:

- GET /jobs : pour récupérer un job à traiter
- POST /jobs : pour ajouter un job à traiter
- PUT /jobs/:id : pour mettre à jour un job (status et log)

Deux scripts d'exemples pour cette API:

- example.sh: un shell avec des curl
- example.py: un script python un peu plus évolué

## créer une Bd Postgres en local

```bash
./creationDB.sh
```

### installer l'api nodeJS

```bash
cd api
npm install
```



