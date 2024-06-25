/* eslint-disable no-unused-vars */
import config from '../../config.js';
import fastifyMongodb from '@fastify/mongodb';
import fastifyPlugin  from 'fastify-plugin';

const dbConnector = async ( fastify, options ) => fastify.register( fastifyMongodb, {
  url: config.DATABASE,

});

export default fastifyPlugin( dbConnector );
