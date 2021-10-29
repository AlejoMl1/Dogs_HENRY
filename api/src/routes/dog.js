const { Router } = require('express');

const router = Router();
router.get('/',(req,res)=>{
    res.send('route dog')
})


module.exports = router;
