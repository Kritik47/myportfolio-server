const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
const ConnectDb=async()=>{
    try{
        await mongoose.connect(process.env.BILLIONERS_DB);
        console.log("MongoDb Connected.....");
    }catch(e){
        console.log("Connection Error....")
    }
}
module.exports=ConnectDb;