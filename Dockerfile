FROM sdelrio/docker-minimal-nginx

COPY dist/* /usr/share/nginx/html/
