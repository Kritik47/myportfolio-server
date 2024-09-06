const Billioner=require('../model/models');
const Del=async(req,res)=>{
    try{
        const m=await Billioner.deleteOne({_id:req.params.id});
        res.send({msg:"data deleted.....",DATA:m});
    }catch(e){
        res.send({msg:"delete error...."})
    }
}
module.exports=Del;