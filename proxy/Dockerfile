# Use the official Node.js 16 as base image
FROM node:19-alpine

# Set working directory in the Docker container
RUN mkdir -p /usr/src/proxy-app
WORKDIR /usr/src/proxy-app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /usr/src/proxy-app/
RUN npm install -g pnpm corepack \
    && corepack enable \
    && pnpm install

# Install dependencies
RUN pnpm install
ENV TMDB_API_KEY 7083d2cbed91741883df8dc6fd552d47
RUN pnpm build

EXPOSE 3001

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3001

# Start the dev server with hot reload at localhost:3001
CMD [ "pnpm", "start" ]