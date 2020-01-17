## Integración continua

En este repositorio se ha habilitado Travis-CI como herramienta de integración continua. Para su configuración se ha creado un archivo .travis.yml que incluye la versión del lenguage que estamos usando (dentro de los soportados por la plataforma) así como las tareas a ejecutar para poder testar nuestro proyecto.

Los tests realizados son la ejecución del marco de tests de loopback4 con los tests escritos para nuestro proyecto. Además se ha enlazado Travis con Github de forma que cada vez que haya un push hacia el repositorio se activará de forma automática el proceso de test, avisándonos en caso de que algún test falle. Esto es muy importante a la hora de la integración continua futura ya que tenemos que asegurarnos que todo lo que hay en la rama master del repositorio tiene que ser código plenamente funcional, pues será el que se ejecutará en los servidores de "producción" de forma automática.

[![Build Status](https://travis-ci.org/jscoba/cmiautorizo.svg?branch=master)](https://travis-ci.org/jscoba/cmiautorizo)