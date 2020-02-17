FROM node:12.15-alpine3.11
LABEL maintainer="Yz_4230"

ARG USERNAME=node
ARG USER_UID=1000
ARG USER_GUI=$USER_UID

WORKDIR /app
COPY ./package*.json /app/
RUN npm ci \
    && apk add git \
    && npm run tsc
EXPOSE 8000
