################################
# Base
################################
FROM node:10.15-stretch AS base
LABEL maintainer="a.p.tudorache@gmail.com"

WORKDIR /app

COPY internals /app/internals
COPY .gitignore \
  .gitattributes \
  .eslintrc.js \
  .prettierrc \
  jest.config.js \
  babel.config.js \
  tsconfig.json \
  /app/

COPY package.json \
  yarn.lock \
  /app/

# Install NPM dependencies, cleaning cache afterwards:
RUN yarn install --frozen-lockfile && \
  yarn cache clean

COPY app /app/app


################################
# Build
################################
FROM node:10.15-stretch AS builder
COPY --from=base /app /app
WORKDIR /app

ARG BUILD_ENV=prod

ENV NODE_ENV=production
RUN echo "run build"
RUN yarn build

# Write the build number
ARG BUILD_NUMBER=0
RUN echo "build ${BUILD_NUMBER} - `date`" > /app/build/version.txt


################################
# Deploy
################################
FROM nginx:stable-alpine

COPY --from=builder /app/build/. /usr/share/nginx/html/

COPY default.conf /etc/nginx/conf.d/
