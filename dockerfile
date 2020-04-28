from node:latest

RUN mkdir -p /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

copy . ./

CMD ["npm", "start"]
