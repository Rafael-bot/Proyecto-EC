require('dotenv').config();

const db = {
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  name: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  pass: process.env.DATABASE_PASS,
  atlas: process.env.NODE_ENV === 'production' ? '+srv' : '',
};

const config = {
  app: {
    port: process.env.PORT,
  },
};

module.exports = config;
