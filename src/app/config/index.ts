// import { Path } from 'mongoose';
// import 'dotenv/config';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join((process.cwd(), '.env')) });

console.log('port', process.env.PORT);

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  database_password: process.env.DEFAULT_PASSWORD,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
};
