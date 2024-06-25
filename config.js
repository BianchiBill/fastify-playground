
/* eslint no-process-env: 0 */
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath( import.meta.url );
const __dirname = dirname( __filename );

dotenv.config({ path: path.resolve( __dirname, './.env' ) });

const environment = [
  'DATABASE',
];

environment.forEach( ( name ) => {
  /* istanbul ignore if */
  if ( !process.env[ name ] ) {
    throw new Error( `${name}: ${process.env[ name ]}` );
  }
});

const config = {
  DATABASE: process.env.DATABASE,
};

export default config;
