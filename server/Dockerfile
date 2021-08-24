FROM node:16-alpine3.11

WORKDIR /node

COPY package.json package-lock.json ./

RUN npm install

WORKDIR /node/app

COPY . .

EXPOSE 8080

WORKDIR /node/app/server

RUN npm run build

CMD npm run start
