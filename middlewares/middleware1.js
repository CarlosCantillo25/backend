const middleware1 =(req,res,next)=>{
    req.midd1='esto viene del primero'
    next()
  }

  export default middleware1