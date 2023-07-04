# Use an official Node.js runtime as the base image
FROM node:20-alpine3.16 AS builder

WORKDIR /app

COPY package.json ./

RUN npm install --legacy-peer-deps

COPY . ./
RUN npm run build

FROM nginx:1.20.0

COPY ./nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]