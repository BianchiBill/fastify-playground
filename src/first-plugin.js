import  Fastify from 'fastify';
import { digimon_router } from './routers/index.js';

export const startWithImportRouters = async () => {
    console.log( 'Start with "plugin" ' );


    const fastify = Fastify({
        logger: true,
    });

    await fastify.register( digimon_router );

    await fastify.listen({ port: 7000 });

};
