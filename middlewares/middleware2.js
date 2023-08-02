const middleware2 =(req,res,next)=>{
    req.midd2='esto viene del segundo'
    next()
  }
  export default middleware2