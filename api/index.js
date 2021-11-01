
//initialize express aplication
const express = require('express')
const morgan = require('morgan')
const app = express()
const PORT = 3001;
const routes = require('./src/routes/index')
const errorHandler = require('./src/utils/middlewares/errorHandler')
const setHeaders = require('./src/utils/middlewares/setHeader')

//*in this page are all the routes of the proyect
//*Also set all the headers

//this line is need to parsing the url with express
app.use(express.urlencoded({extended:true , limmit:"50mb"}))
app.use(express.json({limit:"50mb"}))
//morgan write an output in the console everytime a request is made
app.use(morgan('dev'))
//function that creates the headers
app.use(setHeaders)

//set the routes
app.use('/',routes)
//middleware for the errors
app.use(errorHandler)

//req is the info the client with us
//res is the info we send to the client
// app.get('/', (req,res)=>{
//     res.send('Probando que funcione')
// })



app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT} `)
})
