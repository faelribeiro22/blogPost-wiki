FROM node:12.13.0-alpine AS alpine

RUN mkdir -p /usr/app/server
WORKDIR /usr/app/server

COPY package.json /usr/app/server

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]