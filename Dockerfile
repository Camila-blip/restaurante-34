# Use a imagem oficial do Node.js como imagem base
FROM node:16.13

# Define o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do aplicativo
RUN npm install

# Copie todo o código-fonte do aplicativo para o contêiner
COPY . .

# Exponha a porta em que o aplicativo estará em execução (substitua a porta apropriada)
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD [ "node", "public/server.js" ]
