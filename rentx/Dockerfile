FROM node

# Diretorio onde nossas informações estarão contidas
WORKDIR /usr/app

COPY package.json ./

#Ele já vem com a imagem do node (É mais fácil)
RUN npm install

# Copia tudo para dentro da nossa pasta raiz
COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]

