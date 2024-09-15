const express=require('express');
const app=express();
const ConnectDb=require('./src/MYPORTFOLIO/lib/db');
ConnectDb();
const dotenv=require('dotenv');
dotenv.config();
const cors=require('cors');
app.use(cors());
const router=require('./src/MYPORTFOLIO/router/router');
app.use(router);
app.listen(process.env.PORTFOLIO_PORT,()=>{
    console.log(`i listen ${process.env.PORTFOLIO_PORT}`);
})