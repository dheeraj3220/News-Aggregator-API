const { signup,signin } = require('../controllers/login');
const routes= require('express').Router();



routes.post('/register',signup);
routes.post('/signIn',signin);



module.exports= routes