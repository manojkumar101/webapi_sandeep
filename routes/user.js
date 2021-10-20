
const con=require('./../common/mysql');
const util = require('util');
const query = util.promisify(con.query).bind(con);

function firstAPI(req,res) {
  try {
  console.log("Body",req.body)
  const cacheResponseQuery=`select * from service_request_cache where id > ?`;

  con.query(cacheResponseQuery,[0],function(err,result){
      res.status(200)
      res.send({
          code:200,
          message:"Success1213",
          data:result
      }
      )
  })
  // const cacheResult=await query(cacheResponseQuery,[serviceRequestId]);
   
   
  } catch (error) {
    
    res.send({
        code:404,
        message:"Success",
        data:error
    })
  }
}

async function secondAPI(req,res) {
  try {
    let userINfo=res.locals.tokenInfo
    console.log(" ~ userINfo", userINfo)
    console.log(" ~ userINfo", userINfo)
    console.log(" ~ userINfo", userINfo)
    console.log("ndAPI ~ req", req.body.name)
  const cacheResponseQuery=`select * from service_request_cache where id = ?`;
  const result= await  query(cacheResponseQuery,[userINfo.id])

  res.status(200)
  res.send({
      code:200,
      message:"Success1213",
      data:result
  })
  // const cacheResult=await query(cacheResponseQuery,[serviceRequestId]);
   
   
  } catch (error) {
    
    res.send({
        code:404,
        message:"Success",
        data:error
    })
  }
    
}
module.exports = {
 
  firstAPI,
  secondAPI
  
};
