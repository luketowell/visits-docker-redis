# Visits Redis Application
This repository contains a very simple application which creates two docker containers running node and redis.

1. The node container runs a very simple web app which increments a redis value by one for the number of visits.

1. The redis container holds the a variable for the number of times the site has been visited.

## docker compose
This application is different from the simpleweb docker application implementation because it makes use of multiple containers and in order to manage the containers makes use of docker-compose.

### commands
The commands for running the docker containers are:
- docker-compose up - bring up containers in terminal window
- docker-compose up --build - build the application and bring it up in the current terminal.
- docker-compose up -d - bring up the application in the background
- docker-compose down - close down the docker containers that are currently running via docker-compose.