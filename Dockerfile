# Elegimos la versión oficial slim estable de node para ahorrar en tamaño
# ya que solo vamos a usar nodejs
FROM node:10-slim

# Etiqueta de responsable de la imagen
LABEL MANTAINER="jscoba"

# Directorio de trabajo en el contenedor
WORKDIR /cmiautorizo

# Copiamos el código fuente de la aplicación
COPY cmiautorizo-backend/ ./

# Instalamos las dependencias de la aplicación
RUN npm install

# Transpilamos de TypeScript a Js
RUN npm run build

# Seleccionamos el puerto 3000 mediante variable de entorno
ENV PORT=3000

# Permitimos conexiones desde el puerto elegido.
EXPOSE ${PORT}

# Arrancamos la aplicación.
CMD ["npm", "start"]