const jwt = require('jsonwebtoken')
const bcrypt= require('bcrypt')
const fs =require('fs')
var User= require('../models/user');
const user = require('../models/user');
require("dotenv").config();


var getPrefrence = (req,res)=>{
    let emailId=req.params.email;
    User.findOne({
        email: emailId
    }).then((user)=>{
        const prefrence=user.prefrence;
        return res.status(200).send({
            "email": emailId,
            "prefrence": prefrence,
            message : "success"
        },
        )
    }).catch((err)=>{
        return res.status(500).send({message:err});
    })
}

var updatePrefrence= (req,res)=>{
    let emailId= req.body.email;
    let prefrence=req.body.prefrence;
    User.findOne({
        email:emailId
    }).then((user)=>{
        User.updateOne(
        {email:emailId},
        {$set:{prefrence : prefrence}}
        ).then((user)=>{
            return res.status(200).send({message: "Successfully Updated"});
        }).catch(()=>{
            return res.status(500).send({message:err});
        });
    }).catch((err)=>{
        return res.status(500).send({message:err});
    })
}

module.exports= {getPrefrence,updatePrefrence};