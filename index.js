
const express=require('express');
const cors=require('cors');
const app=express();
const dotenv=require('dotenv');
dotenv.config();
const router=require('./src/MDMART/router/router');
const Db=require('./src/MDMART/lib/lib');
Db();
app.use(cors());
app.use(router);
app.listen(process.env.MDMART_PORT,()=>{
    console.log(`listen in ${process.env.MDMART_PORT}`);
});