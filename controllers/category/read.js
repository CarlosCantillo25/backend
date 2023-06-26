import Category from '../../models/Category.js'
export default async(req,res)=>{
    try{
        let all = await Category.find()
        if (all.length>0){
            return res.status(200).json({
                response:all,
                success:true,
                message:'you have requested GET/spi/author/',
                mindhub:'the best',
                date: new Date()
            })
        }else{
            return res.status(404).json({
                response:null,
                success:false,
                message:'not found authors',
                mindhub:'the best',
                date: new Date()
            })
        }
    } catch(error){
        console.log(error)
        return res.status(500).json({
            response:null,
            success:false,
            message:error.message
        })
    }
}
