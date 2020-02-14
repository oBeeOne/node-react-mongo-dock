FROM node:13.8.0-alpine3.10

RUN mkdir -p /usr/src/app/api
WORKDIR /usr/src/app/api

COPY package*.json /usr/src/app/api/

EXPOSE 5000

RUN npm install --silent

COPY . .

#CMD ["npm", "start"]
CMD ["npm", "run", "dev"]