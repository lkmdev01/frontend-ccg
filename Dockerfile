# Frontend Dockerfile
FROM node:18

# Define o diretório de trabalho
WORKDIR /app

# Copia o package.json e package-lock.json primeiro para instalar as dependências antes de copiar os outros arquivos
COPY app/package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o diretório app para o contêiner
COPY app/ ./

# Expõe a porta do Vite
EXPOSE 5173

# Comando para iniciar o Vite
CMD ["npm", "run", "dev"]
