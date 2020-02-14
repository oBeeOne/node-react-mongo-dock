FROM node:13.8.0-alpine3.10

RUN mkdir -p /usr/src/app/react
WORKDIR /usr/src/app/react

COPY package*.json ./

EXPOSE 3000

RUN npm install --silent
RUN npm install react-scripts@3.3.1 -g --silent

#COPY . .

CMD ["nmp", "start"]