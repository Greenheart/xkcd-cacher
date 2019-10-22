FROM node:10.15.0-alpine
EXPOSE 3000 9229

WORKDIR /home/node-app

COPY package.json /home/node-app/
COPY package-lock.json /home/node-app/

RUN npm ci

COPY . /home/node-app

CMD npm start