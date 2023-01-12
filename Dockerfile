FROM node:18.13.0-alpine
WORKDIR /repository
COPY . .
RUN npm yarn install
EXPOSE 3000