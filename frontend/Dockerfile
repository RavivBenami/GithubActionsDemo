FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN chown -R node:node /app

USER node

ENV PORT=3000

EXPOSE 3000

CMD npm start