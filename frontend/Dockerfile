### STAGE 1: Build ###
FROM node:lts-alpine AS build

#### make the 'app' folder the current working directory
WORKDIR /app

#### copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

#### install project dependencies
RUN npm install

#### install angular cli
RUN npm install -g @angular/cli

### better safe than sorry, for compatability and legacy systems
RUN npx ngcc --properties es2023 browser modules main --first-only --create-ivy-entry-points

#### copy things
COPY . .

#### generate build
RUN ng build --configuration production 

### STAGE 2 RUN: GET nginx, make it alpine next time
FROM nginx:stable-alpine

#### copy artifact build from the 'build environment' check for build name of your project in package.json
### make sure you put the correct path for the ouput of your build where index.html is
COPY --from=build /app/dist/verge/browser/ /usr/share/nginx/html

#### copy nginx conf
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

### Expose Port 80
EXPOSE 80
