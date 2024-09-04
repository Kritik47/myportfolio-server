const express=require('express');
const router=express.Router();
const Get=require('../controller/Get');
router.use(express.json());
router.get("/billioners",Get);
module.exports=router;