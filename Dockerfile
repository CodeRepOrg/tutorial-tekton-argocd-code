# FROM registry.access.redhat.com/ubi8/nodejs-12
FROM node:lts-slim

RUN mkdir app

WORKDIR app

ENV NODE_ENV=production

COPY src/package*.json ./

RUN npm ci

COPY src .

CMD [ "npm", "start" ]