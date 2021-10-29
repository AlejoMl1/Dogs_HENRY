
//initialize express aplication
const express = require('express')
const morgan = require('morgan')
const app = express()
const PORT = 3001;
const routes = require('./src/routes/index')

//*in this page are all the routes of the proyect
//*Also set all the headers

//this line is need to parsing the url with express
app.use(express.urlencoded({extended:true , limmit:"50mb"}))
app.use(express.json({limit:"50mb"}))
//morgan write an output in the console everytime a request is made
app.use(morgan('dev'))

//everytime there is a request will call this function and will set all the headers and methods
app.use((req,res,next) => {
    //the second parameter is the host of the frontend
    res.header( "Acces-control-Allow-Origin","http://localhost:3000")
    res.header("Access-Control-Allow-Credentials",true)
    //types of headers we will use
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept")
    res.header("Access-Control-Allow-Methods","GET,POST,OPTIONS,PUT,DELETE")
    //then will go to a route or the control error middleware
    next()
} )

//set the routes
app.get('/',(req,res)=>{
       res.send('hi you')
})


//req is the info the client with us
//res is the info we send to the client
app.get('/', (req,res)=>{
    res.send('Probando que funcione')
})

//Middleware erro

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT} `)
})
