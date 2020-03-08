# base image
FROM node:10-alpine AS alpine


RUN mkdir -p /usr/app/client
WORKDIR /usr/app/client

# install and cache client dependencies
COPY package.json /usr/app/client

RUN npm install

COPY . /usr/app/client

# start client
CMD ["npm", "start"]
