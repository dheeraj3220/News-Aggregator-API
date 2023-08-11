const express =require('express');
const bodyParser=require('body-parser');
const routes= express.Router();

const news =express();
const fs =require('fs')
const connection=require('./helpers/connection');
const newsRoutes = require('./Router/router');


news.use(express.json());

connection.connectToMongoDb();

news.use('/', newsRoutes);


const PORT=8000;

news.listen(PORT, (error)=>{
if(!error){
    console.log("Server has started at port:",PORT);
}else {
    console.log("Error has occured");
}
});
