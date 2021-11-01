const { Router } = require('express');

const router = Router();

//import the differents routes
const dogRoutes = require('./dog')
const dogsRoutes = require('./dogs')
const temperamentRoutes = require('./temperament')


//told express to use especific routes 
router.use('/dog', dogRoutes)
router.use('/dogs', dogsRoutes)
router.use('/temperament', temperamentRoutes)

router.get('/',(req,res,next)=>{
    // res.send('prueba de home')
    try{
        throw new Error('rompo aproposito')
    }catch(error){
        next(error)
    }
})



//this router must be import in index.js(the main index.js)
module.exports = router;
