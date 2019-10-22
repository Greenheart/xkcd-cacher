#!/bin/sh

docker-compose kill node-app;
docker-compose build node-app;
docker-compose up -d;