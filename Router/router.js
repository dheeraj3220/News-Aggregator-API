const login = require('../controllers/login');
const news = require('../controllers/news');
const routes= require('express').Router();



routes.post('/signUp',login.signup);
routes.post('/signIn',login.signin);
routes.get('/prefrence/:email',news.getPrefrence);
routes.put('/prefrence/',news.updatePrefrence);



module.exports= routes