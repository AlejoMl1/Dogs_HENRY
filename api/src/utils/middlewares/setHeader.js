

//*everytime there is a request it will call this function and will set all the headers and methods
function setHeaders( req,res,next){
    // the second parameter is the host of the frontend
    res.header( "Acces-control-Allow-Origin","http://localhost:3000")
    res.header("Access-Control-Allow-Credentials",true)
    //types of headers we will use
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept")
    res.header("Access-Control-Allow-Methods","GET,POST,OPTIONS,PUT,DELETE")
    //then will go to a route or the control error middleware
    next()
}

module.exports = setHeaders;

// app.use((req,res,next) => {
//     //the second parameter is the host of the frontend
//     res.header( "Acces-control-Allow-Origin","http://localhost:3000")
//     res.header("Access-Control-Allow-Credentials",true)
//     //types of headers we will use
//     res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept")
//     res.header("Access-Control-Allow-Methods","GET,POST,OPTIONS,PUT,DELETE")
//     //then will go to a route or the control error middleware
//     next()
// } )