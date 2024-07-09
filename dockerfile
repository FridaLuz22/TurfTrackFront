FROM node:20.15.0
WORKDIR /app
EXPOSE 80
RUN npm install -g @angular/cli@17.3.8
