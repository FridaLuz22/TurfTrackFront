FROM node:18-alpine as build-step

RUN mkdir -p /app

WORKDIR /app
COPY package.json /app

RUN npm install
COPY . /app
RUN npm run build --prod

#segundo etapa
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/dist/angular-proyect-app /usr/share/nginx/html 