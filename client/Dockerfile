FROM node:13.8.0-alpine

RUN mkdir -p /usr/src/app/client
WORKDIR /usr/src/app/client

COPY package*.json .

EXPOSE 8080

RUN npm install

COPY . .

CMD ["npm", "run", "start"]