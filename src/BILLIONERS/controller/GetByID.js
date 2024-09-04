const GetByiD=async(req,res)=>{
    try{
        res.send({msg:"data fetching throug iD.....",m:parseInt(req.params.id)})
    }catch(e){
        res.send({msg:"Fetching error...."})
    }
}
module.exports=GetByiD;