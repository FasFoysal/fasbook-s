const express = require('express');
const route = express.Router();

route.get('/',(req,res)=>{
    res.json({mgs:true});
})

module.exports = route;