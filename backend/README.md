# Stella maris

## Descripción

Esta es una API RESTful desarrollada con Node.js, con el fin de que una institución escolar pueda compartir noticias con su comunidad escolar. Está construida con TypeScript, utiliza MongoDB para la base de datos y pnpm como gestor de paquetes.

## Requisitos

- [NodeJS](https://nodejs.org/en)
- [MongoDB](https://www.mongodb.com/es)
- [pnpm](https://pnpm.io/es/)

## Instalación

1. Clona el repositorio a tu máquina local:
   ```sh
   git clone https://github.com/Ulises-Saucedo/Stella-Maris.git
   ```
2. Instalar las dependencias necesarias:
   ```sh
   cd backend && pnpm install
   ```
3. Configura el fichero .env:
   ```sh
    MONGODB_URI=
    JWT_SECRET=
    PORT=
   ```
4. Crear la carpeta uploads dentro de la raíz del proyecto para poder subir los archivos:
   ```sh
      root
      |__ 📁 uploads
   ```

## Comandos 🕹

1. Desarrollo:
   ```sh
    pnpm dev
   ```
2. Generación de superusuario (Para poder loguerse de entrada):
   ```sh
    pnpm seeders
   ```
3. Construcción:
   ```sh
    pnpm build
   ```
4. Producción:
   ```sh
    pnpm start
   ```

## Enlaces útiles

- [Documentación](https://documenter.getpostman.com/view/28984272/2sA3kRJPTp)
- [Typescript](https://www.typescriptlang.org/)
- [NodeJS](https://nodejs.org/en)
- [MongoDB](https://www.mongodb.com/es)
- [pnpm](https://pnpm.io/es/)
