// import { initFastify } from './withoutAsyncAwait.js';
// import { start } from './withAsyncAwait.js';
// import { startWithImportRouters } from './first-plugin.js';
import { fastifyMongoDb } from './server/server.js';



( async () => {
  console.log( '' );
  // initFastify();
  // start();
  // startWithImportRouters();
  fastifyMongoDb();
})();
