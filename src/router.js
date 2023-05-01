const express = require('express');
const route = express.Router();
const signup = require('./Router/signup');

route.get('/',(req,res)=>{
    res.status(200).json({mgs:true});
})
route.post('/signup',signup,(req,res)=>{})


module.exports = route;