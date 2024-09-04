const express = require('express');
const app = express();
const dotenv=require('dotenv');
const ConnectDb = require('./src/BILLIONERS/lib/db');
const router = require('./src/BILLIONERS/router/routes');
dotenv.config();
ConnectDb();
app.use(router);
app.listen(process.env.BILLIONERS_PORT, () => {
    console.log("Server is running on port 8000");
});
