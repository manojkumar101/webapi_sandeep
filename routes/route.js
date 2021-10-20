var express = require('express');
var router = express.Router();
var api=require('./user')


/* GET users listing. */
router.post('/api',api.firstAPI);
router.post('/api2',api.secondAPI);
router.get('/getDetails',function(req,res,next){
    console.log(req.headers.auth)

    if(!req.headers.auth){
        res.send("Please send token")
    }
    else{
        let userInfo={
            name:"manoj",
            id:req.headers.auth
        }
        res.locals.tokenInfo=userInfo
        next();
    }
},api.secondAPI)

module.exports = router;
