FROM node:lts

ENV CI=true
ENV PORT=3000

WORKDIR /code
ADD . /code

RUN npm install
COPY . /code

CMD [ "npm", "start" ]
