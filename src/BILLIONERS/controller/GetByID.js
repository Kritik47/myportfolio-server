const Billioner=require('../model/models');
const GetByiD=async(req,res)=>{
    try{
        const m=await Billioner.findById(req.params.id);
        res.send({msg:"data fetching throug iD.....",DATA:m});
    }catch(e){
        res.send({msg:"Fetching error...."})
    }
}
module.exports=GetByiD;