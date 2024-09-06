const Billioner=require('../model/models');
const Get=async(req,res)=>{
    try{
        const m=await Billioner.find({});
        res.send({msg:"data fetching.....",DATA:m});
    }catch(e){
        res.send({msg:"Fetching error...."})
    }
}
module.exports=Get;