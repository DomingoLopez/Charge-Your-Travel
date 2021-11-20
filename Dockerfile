FROM alpine:3.14

LABEL version="0.0.1" maintainer="Domingo López <domin6891@gmail.com>"

# Path donde buscar los node_modules locales tras la instalación de dependencias
ENV PATH="/app/node_modules/.bin:${PATH}"

WORKDIR /app

# Creación de usuario e instalación de entorno nodejs
RUN apk update && apk upgrade \
    && apk add nodejs npm \
    && adduser -D domin \
    && chown domin . \
    && chmod -R u+rwx . 

USER domin

# Instalación de dependencias del package.json como user no privilegiado
COPY package.json ./    
RUN npm i 

WORKDIR /app/test

VOLUME /app/test

CMD ["npm","test"]