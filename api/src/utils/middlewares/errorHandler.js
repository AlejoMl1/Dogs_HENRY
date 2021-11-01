
//*Middleware that handle errors of routing
function errorHandler(err,req,res,next){
    const status = err.status ||500;
    const message = err.message ||err;
    console.error(err);
    return res.status(status).send(message);
}

module.exports = errorHandler;


// app.use((err,req,res,next) =>{
//     const status = err.status ||500;
//     const message = err.message ||err;
//     console.error(err);
//     return res.status(status).send(message);
// })