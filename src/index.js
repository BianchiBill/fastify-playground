import { initFastify } from './withoutAsyncAwait.js';
import { start } from './withAsyncAwait.js';
import { startWithImportRouters } from './first-plugin.js';


( async () => {
    console.log( '' );
    // initFastify();
    // start();
    startWithImportRouters();
})();
