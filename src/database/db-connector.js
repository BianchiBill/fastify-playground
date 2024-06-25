/* eslint-disable no-unused-vars */
import fastifyMongodb from '@fastify/mongodb';
import fastifyPlugin

  from 'fastify-plugin';

const dbConnector = async ( fastify, options ) => fastify.register( fastifyMongodb, {
  url: 'mongodb://localhost:27017/test_database',
});

export default fastifyPlugin( dbConnector );
