
//initialize express aplication
const express = require('express')
const morgan = require('morgan')
const routes = require('./src/routes/index')
const errorHandler = require('./src/utils/middlewares/errorHandler')
const setHeaders = require('./src/utils/middlewares/setHeader')
const {dbConn} = require ('./src/models/index')
const {PORT} = require('./src/utils/config/index');
const app = express()
//*in this page are all the routes of the project
//*Also set all the headers

//*this line is need to parsing the url with express
app.use(express.urlencoded({extended:true , limmit:"50mb"}))
app.use(express.json({limit:"50mb"}))
//*morgan write an output in the console everytime a request is made
app.use(morgan('dev'))
//*function that creates the headers
app.use(setHeaders)

//*set the routes
app.use('/',routes)
//*middleware for the errors
app.use(errorHandler)

//*Syncing all the models at once.
dbConn.sync({ force: true }).then(() => {
    app.listen(PORT,()=>{
        console.log(`Server is listening on port ${PORT} `)
  })
})
//req is the info the client with us
//res is the info we send to the client
// app.get('/', (req,res)=>{
//     res.send('Probando que funcione')
// })
