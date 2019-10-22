#!/bin/sh

docker-compose kill php-app;
docker-compose build php-app;
docker-compose up -d;