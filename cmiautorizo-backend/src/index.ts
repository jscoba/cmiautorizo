import {CmiautorizoApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

import {winstonLogger} from './lib/logger';

export {CmiautorizoApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new CmiautorizoApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  winstonLogger.info('Iniciando logs');

  return app;
}
