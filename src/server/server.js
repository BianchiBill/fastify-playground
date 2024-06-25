import Fastify from 'fastify';
import dbConnector from '../database/db-connector.js';
import firstRoute from './our-first-route';


export const fastifyMongoDb = () => {

  const fastify = Fastify({
    logger: true,
  });
  fastify.register( dbConnector );
  fastify.register( firstRoute );

  fastify.listen({ port: 3000 }, function ( err ) { // doc = (err, address)
    if ( err ) {
      fastify.log.error( err );
      process.exit( 1 );
    }
  });
};
