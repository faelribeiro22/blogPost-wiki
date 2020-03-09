FROM node:12.13.0-alpine AS alpine

RUN mkdir -p /usr/app/server
WORKDIR /usr/app/server

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "run", "dev"]