const jwt = require('jsonwebtoken')
const bcrypt= require('bcrypt')
const fs =require('fs')
var User= require('../models/user');
const user = require('../models/user');
require("dotenv").config();


var signup= (req, res)=>{
    const user= new User({
        name: req.body.name,
        email : req.body.email,
        password : bcrypt.hashSync(req.body.password,8),
        prefrence: req.body.prefrence
    });

    user.save().then(data =>{
        return res.status(200).send("User registered Succesfully");
    }).catch(err =>{
        console.log("error in register: ",err)
        return res.status(500).send("User registration failed");
    });
};

var signin=(req, res)=>{
    const email = req.body.email;
    const password= req.body.password
    User.findOne({
        email: email
    }).then((user)=>{
        var isValidPassword=bcrypt.compareSync(password,user.password);
        if(!isValidPassword){
            return res.status(401).send({
                authToken : null,
                message : "Invalid password"
            })
        }
        var token=jwt.sign({
            id: user.id
        },process.env.LOGIN_SECRET,{
            expiresIn : 864000 
        });
        return res.status(200).send({
            user: {
                userId: user.id,
                email: user.email,
                name: user.name,
            },
            message: "Login Successful",
            authToken: token
        })
    }).catch((err)=>{
        if(err){
            console.log("the error is here : ",err);
            return res.status(500).send({
                
                Message: err
            });
        }
    });
};

module.exports={signin,signup};