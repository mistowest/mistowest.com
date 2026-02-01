# ---------- BUILD ----------
FROM node:20-alpine AS build

WORKDIR /app

# Atualiza npm para última versão
RUN npm install -g npm@11.7.0

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


# ---------- RUN ----------
FROM node:20-alpine

WORKDIR /app

# Atualiza npm também no runtime
RUN npm install -g npm@11.7.0 serve

COPY --from=build /app/dist ./dist

# Expondo a porta 80
EXPOSE 80

# Iniciando o servidor na porta 80
CMD ["serve", "-s", "dist", "-l", "80"]
