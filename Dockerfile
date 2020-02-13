FROM node:12.15-alpine3.11
LABEL maintainer="Yz_4230"

ARG USERNAME=node
ARG USER_UID=1000
ARG USER_GUI=$USER_UID

WORKDIR /app
COPY ./package*.json ./
RUN npm install \
    &&npm install -g typescript \
    && apk add git
EXPOSE 8000
EXPOSE 5433