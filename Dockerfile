FROM node:19-alpine

WORKDIR /app

COPY package*.json /app
RUN npm i

COPY . /app

EXPOSE 5173

CMD ["npm", "run", "dev"]