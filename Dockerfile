FROM node:0.12.2

ADD src/ /src
WORKDIR /src

RUN npm install

EXPOSE 80

CMD ["node", "index.js"]