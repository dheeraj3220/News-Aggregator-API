const express =require('express');
const bodyParser=require('body-parser');
const routes= express.Router();

const news =express();
const fs =require('fs')
const connection=require('./helpers/connection');
const newsRoutes = require('./Router/router');
require("dotenv").config();


news.use(express.json());

connection.connectToMongoDb();

news.use('/', newsRoutes);


const port=process.env.PORT;

news.listen(port, (error)=>{
if(!error){
    console.log("Server has started at port:",port);
}else {
    console.log("Error has occured");
}
});
