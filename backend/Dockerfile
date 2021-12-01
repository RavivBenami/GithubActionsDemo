FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN chown -R node:node /app

USER node

ENV PORT=8080

EXPOSE 8080

CMD node main.js