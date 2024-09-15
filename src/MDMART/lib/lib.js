const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
const Db=async()=>{
    try{
        await mongoose.connect(`${process.env.MDMART_DB}`);
        console.log("mdmart connected to db...");
    }catch(e){
        console.log("Connection Error...")
    }
}
module.exports=Db;