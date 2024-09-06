const Billioner=require('../model/models');
const Put=async(req,res)=>{
    try{
        const m=await Billioner.updateOne({_id:req.params.id},{$set:req.body});
        res.send({msg:"data updated.....",DATA:m});
    }catch(e){
        res.send({msg:"updating erro. error...."});
    }
}
module.exports=Put;