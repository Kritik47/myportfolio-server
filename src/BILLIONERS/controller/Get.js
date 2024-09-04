const Get=async(req,res)=>{
    try{
        res.send({msg:"data fetching....."})
    }catch(e){
        res.send({msg:"Fetching error...."})
    }
}
module.exports=Get;