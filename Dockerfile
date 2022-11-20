FROM node:14

WORKDIR /usr/app

COPY . .

RUN npm i 

RUN npm run build

CMD ["npm", "start"]