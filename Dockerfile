# Dockerfile

# Node base image
FROM node:19-alpine

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/
RUN npm install -g pnpm corepack \
    && corepack enable \
    && pnpm install


RUN pnpm build


EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "pnpm", "start" ]
