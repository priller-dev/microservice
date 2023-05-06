FROM node:14

WORKDIR /apps
COPY package.json .
RUN npm install
COPY . .
EXPOSE
CMD npm start