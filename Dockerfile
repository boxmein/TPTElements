FROM nginx:latest
LABEL org.opencontainers.image.source https://github.com/boxmein/TPTElements
COPY dist /usr/share/nginx/html
COPY js /usr/share/nginx/html/js

