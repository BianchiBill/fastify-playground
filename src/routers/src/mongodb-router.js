/* eslint-disable no-unused-vars */
export const routes = async ( fastify, options ) => {

  const collection = fastify.mongo.db.collection( 'pokemon' );

  fastify.get( '/', async ( request, reply ) => {
    return collection.findOne({ name: 'pikachu' });
  });

  fastify.get( '/pokemons', async ( request, reply ) => {
    const result = await collection.find().toArray();
    if ( result.length === 0 ) {
      throw new Error( 'No documents found' );
    }
    return result;
  });

  fastify.get( '/pokemon/:pokemon', async ( request, reply ) => {
    const result = await collection.findOne({ name: request.params.pokemon });
    if ( !result ) {
      throw new Error( 'Invalid value' );
    }
    return result;
  });

  const pokemonBodyJsonSchema = {
    type: 'object',
    required: [ 'name' ],
    properties: {
      name: { type: 'string' },
    },
  };

  const schema = {
    body: pokemonBodyJsonSchema,
  };

  fastify.post( '/pokemon', { schema }, async ( request, reply ) => {
    // we can use the `request.body` object to get the data sent by the client
    const result = await collection.insertOne({ name: request.body.name });

    return result;
  });
};

