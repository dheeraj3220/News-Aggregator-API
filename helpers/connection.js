const express =require('express');
const bodyParser=require('body-parser');

const news =express();
const fs =require('fs')
const mongoose=require('mongoose')

class connection{
    static connectToMongoDb(){
        try{
            mongoose.connect("mongodb://localhost:27017/NewsAggregator",{
            useUnifiedTopology:true,
            useNewUrlParser:true
            });
            console.log("connected to Db ")
        }catch (error) {
            console.log(error)
        }
    }
}

module.exports=connection;