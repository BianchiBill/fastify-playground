import Fastify from 'fastify';

const fastify = Fastify({
    logger: true,
});

// get router
fastify.get( '/', async ( ) => {
    return { message: 'Hello World' };
});

// get router with id
fastify.get( '/:id', async ( request ) => {
    console.log( 'ID ', request.url );
    return { message: 'Hello World' };
});

/**
 * Run the server!
 */
export const start = async () => {
    try { // to define host after port ({ host: '0.0.0.0' })
        await fastify.listen({ port: 9000 });
    } catch ( err ) {
        fastify.log.error( err );
        process.exit( 1 );
    }
};
