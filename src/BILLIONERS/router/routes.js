const express=require('express');
const router=express.Router();
const Get=require('../controller/Get');
const GetByiD=require('../controller/GetByID')
router.use(express.json());
router.get("/billioners",Get);
router.get("/billioners/:id",GetByiD);
module.exports=router;