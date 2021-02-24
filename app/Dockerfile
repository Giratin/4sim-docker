FROM node:12 as builder-image

RUN npm i -g @angular/cli@11.1.2

WORKDIR /src/app

COPY . .

RUN npm install

RUN ng build --prod=true --aot

FROM nginx

RUN rm -rfd /usr/share/nginx/html/*

COPY --from=builder-image /src/app/dist/app /usr/share/nginx/html

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
