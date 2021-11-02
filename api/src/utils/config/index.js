//help us to can access the environment variables
require('dotenv').config()

PORT ="3001"
DB_NAME = "dogs"
DB_PORT = "5432"
DB_PASSWORD= "postgres1234"
HOST="localhost"

module.exports = {
    //the || is for show an external user how to  create .env
    dbUser: process.env.DB_USER ||'postgres',
    dbName: process.env.DB_NAME ||'dogs',
    PORT: process.env.PORT ||'3001',
    dbPassword: process.env.DB_PASSWORD || 'your_postgres_password',
    dbHost: process.env.DB_HOST || 'localhost',
    host : process.env.HOST ||'local host',
    dbPort: process.env.DB_PORT || '5432',


}