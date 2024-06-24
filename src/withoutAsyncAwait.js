import Fastify from 'fastify';


export const initFastify = () => {
    console.log( 'Start Fastify Playground' );
    const fastify = Fastify({
        logger: true,
    });

    // Declare a route
    fastify.get( '/', function ( request, reply ) {
        reply.send({ message: 'Hello World' });
    });

    // Run the server!
    fastify.listen({ port: 8000 }, function ( err, address ) {
        if ( err ) {
            fastify.log.error( err );
            process.exit( 1 );
        }
    });
};

