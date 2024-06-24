import { initFastify } from './withoutAsyncAwait.js';
import { start } from './withAsyncAwait.js';


( async () => {
    console.log( '' );
    initFastify();
    start();
})();
