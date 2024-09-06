const Billioner=require('../model/models');
const Post=async(req,res)=>{
    try{
        let m=new Billioner(req.body);
        m=await m.save();
        res.send({msg:"data posted.....",DATA:m});
    }catch(e){
        res.send({msg:"posting  error...."})
    }
}
module.exports=Post;