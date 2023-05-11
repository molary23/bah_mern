FROM node:18

WORKDIR /products

COPY . .

RUN yarn install

EXPOSE 6001

CMD ["yarn", "dev"]
