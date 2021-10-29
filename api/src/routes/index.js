const { Router } = require('express');

const router = Router();

//import the differents routes
const dogRoutes = require('./dog')
const dogsRoutes = require('./dogs')
const temperamentRoutes = require('./temperament')

const router = Router();
//told express to use especific routes 
router.use('/dog', dogRoutes)
router.use('/dogs', dogsRoutes)
router.use('/temperamentRoutes', temperamentRoutes)


module.exports = router;
