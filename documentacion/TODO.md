# TODO cmiautorizo

- [ ] Documentación
- [x] Logging
- [ ] Autenticación

## Módulo de documentación
En este proyecto vamos a usar [Docco](https://github.com/jashkenas/docco) para generar la documentación. Su uso funciona de la siguiente manera:
Poner comentarios en los bloques de código de la aplicación. Comentarios estándar de JavaScript/TypeScript con sintáxis Markdown.
Luego ejecutar `docco` con `docco cmiautorizo-backend/src/*.ts`. Esto generará la documentación de `docs/` para cada archivo.
Se podría automatizar con un script de npm en el `package.json` o con un Makefile

## Módulo de logging
Para el log vamos a usar Winston. Para integrarlo vamos a usar el paquete [loopback-component-winston](https://www.npmjs.com/package/loopback-component-winston). Una vez tengamos esto podremos hacer logs facilmente a distintos niveles, desde debug hasta error.

Ahora podemos usar `winstonLogger.info('mensaje');` Desde cualquier punto de la app.

## Autenticación
Para los endpoints protegidos vamos a utilizar el sistema de autenticación de loopback basado en tokens JWT. Para ello seguiremos el [tutorial](https://loopback.io/doc/en/lb4/Authentication-Tutorial.html) de loopback para integrar la autenticación.

## Historias de usuario
Primero vamos a crear la aplicación completa y luego ya nos pondremos a integrar los logs, la autenticación y la documentación (aunque esta última la vayamos haciendo mientras escribimos el código).

| Endpoint              | Descripción                        | Tipo | Parametros                   | Respuesta                                   |
| --------------------- | ---------------------------------- | ---- | ---------------------------- | ------------------------------------------- |
| /turnos               | Consultar los turnos de lavadoras  | GET  | Nada                         | Lista de turnos                             |
| /turnos/count         | Ver cuantos turnos hay en total    | GET  | Nada                         | {'count':number}                            |
| /turnos               | Nuevo turno de lavadora            | POST | Datos de modelo de turno     | 200 + turno recién creado                   |
| /turno/{id}           | Detalle de turno específico        | GET  | id: id del turno a consultar | modelo turno                                |
| /personas             | Personas del colegio               | GET  | Nada                         | Listado de personas                         |
| /personas/{id}/turnos | Turnos de lavadoras de una persona | GET  | Nada                         | Lista de los turnos asociados a una persona |

## Modelos de la aplicación

Los modelos necesarios para poder implementar la aplicación son los siguientes:

### Modelo persona

| Propiedad | Tipo   | Descripción                           |
| --------- | ------ | ------------------------------------- |
| id        | number | ID autogenerado                       |
| nombre    | string | Nombre de la persona                  |
| hab       | number | Número de la habitación de la persona |

### Modelo turno

| Propiedad | Tipo   | Descripción                                                  |
| --------- | ------ | ------------------------------------------------------------ |
| id        | number | ID autogenerado                                              |
| hab       | number | Número de habitación de la persona del turno                 |
| lavadora  | string | Código de la lavadora pedida (enum)                          |
| time      | string | Timestamp del turno de lavadora pedido                       |
| lavado    | bool   | Defaults a False y se puede activar o desactivar para señalar que un lavado se ha realizado. |

