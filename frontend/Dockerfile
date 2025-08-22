FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Note that ports must also be changed in vite.config.js
EXPOSE 8000

CMD ["npm", "run", "dev"]
