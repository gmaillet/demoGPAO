createdb -h localhost gpao -U postgres
psql -h localhost gpao -U postgres -c 'CREATE TABLE jobs (ID SERIAL PRIMARY KEY, command VARCHAR(256), status VARCHAR(30), log VARCHAR(256))'