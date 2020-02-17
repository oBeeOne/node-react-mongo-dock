FROM node:13.8.0-alpine3.10

RUN mkdir -p /usr/src/app/api
WORKDIR /usr/src/app/api

COPY package*.json /usr/src/app/api/

RUN npm install --silent

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]