FROM node:13.8.0-alpine

RUN mkdir -p /usr/src/app/react
WORKDIR /usr/src/app/react

COPY package*.json ./

EXPOSE 3000

RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

COPY . .

CMD ["nmp", "start"]