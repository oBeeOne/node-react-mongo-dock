FROM node:13.8.0-alpine3.10

RUN mkdir -p /usr/src/app/myreact
WORKDIR /usr/src/app/myreact

COPY package*.json /usr/src/app/myreact/

EXPOSE 3000

RUN npm install --silent
RUN npm install react-scripts@3.3.1 -g --silent

COPY . .

CMD ["npm", "start"]