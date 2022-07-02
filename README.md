# GamesCollective

## Install Packages:
run ```yarn install```

Installing database on local machine
$ psql -U <an exisiting role with superuser privileges> blue < dbname.bak

Installing TO remote
download repo to remote and run the local command
OR
$ pg_dump -h localhost -d {database name to copy FROM} | psql -h {remote public address} -d {target database name} -U {name of admin user on remote database}
