//https://sequelize.org/master/manual/model-basics.html
//      dbUser: process.env.DB_USER ||'postgres',
//     dbName: process.env.DB_NAME ||'dogs',
//     PORT: process.env.PORT ||'3001',
//     dbPassword: process.env.DB_PASSWORD || 'your_postgres_password',
//     dbHost: process.env.DB_HOST || 'localhost',
//     host : process.env.HOST ||'local host',
//     dbPort: process.env.DB_PORT || '5432',
const { Sequelize } = require('sequelize');
const  modelDogs  = require('./Dogs');
const modelTemperament = require('./Temperament')
// const { modelTemperament } = require('./Temperament')
const {dbUser,dbPassword,dbHost,dbPort,dbName} = require('../utils/config/index')

// 'postgres://postgres:postgres1234@localhost:5432/dogs
//*connect to the database
const sequelize = new Sequelize(`postgres://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`,{
    //disable logging in the terminal
    logging: false
})

//*this comprobation is not necessary 
sequelize.authenticate().then(() => 
console.log(`Connection Success To DB ${dbName}`)
).catch(e => console.log(e));

// //*Initialice models
modelDogs(sequelize);
modelTemperament(sequelize);

//  console.log('sequelize models',sequelize.models);

const { Dog, Temperament } = sequelize.models;

// Player.belongsToMany(Team, { through: 'PlayerTeam' })
// Team.belongsToMany(Player, { through: 'PlayerTeam' })
// postgres: SELECT * from "dogs"          si se escribe con mayusculas
//sin minusculas se puede escribir sin las comillas
// Dropping tables
// To drop the table related to a model:

// await User.drop();
// console.log("User table dropped!");
// To drop all tables:

// await sequelize.drop();
// console.log("All tables dropped!");

module.exports = {
   
    //export instance os sequelize
    dbConn: sequelize,
    Dog,
    Temperament
}