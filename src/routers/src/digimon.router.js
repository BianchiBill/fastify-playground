/* eslint-disable no-unused-vars */
import { digimon } from './data/digimon.js';

export const digimon_router = async ( fastify, options ) => {
  fastify.get( '/', async () => {
    return digimon;
  });

  fastify.get( '/:name', async ( request ) => {

    const  name  = request.params.name ;

    // const name = request.url;


    return digimon.find( digimon.find( ( digi ) => digi.name.toLowerCase() ===  name ) );
  });
};
