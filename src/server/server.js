import Fastify from 'fastify';
import dbConnector from '../database/db-connector.js';
import { routes } from '../routers/src/mongodb-router.js';




export const fastifyMongoDb = async () => {

  const fastify = Fastify({
    logger: true,
  });
  await fastify.register( dbConnector );
  await fastify.register( routes );

  fastify.listen({ port: 3000 }, function ( err ) { // doc = (err, address)
    if ( err ) {
      fastify.log.error( err );
      process.exit( 1 );
    }
    console.log( 'Connectado' );
  });
};
