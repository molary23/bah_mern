FROM node:18

WORKDIR /customer

COPY . .

RUN yarn install

EXPOSE 6002

CMD ["yarn", "dev"]
