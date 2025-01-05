# Use uma imagem Node.js oficial
FROM node:16

# Define o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia os arquivos do projeto para o diretório do container
COPY package*.json ./
COPY servidor.js ./

# Instala as dependências do Node.js
RUN npm install

# Expõe a porta usada pelo servidor
EXPOSE 8080

# Comando para iniciar o servidor
CMD ["node", "servidor.js"]
