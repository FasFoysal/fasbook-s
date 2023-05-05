const express = require("express");
const route = express.Router();
const signup = require("./Router/signup");
const sendMail = require("./Router/sendMail");
const login = require('./Router/login');
const auth = require("./Router/auth");
const forgotMail = require('./Router/forgotMail');
const otpGen  = require('./Router/otpGen');
const forgotOtpCheck = require('./Router/forgotOtpCheck');
const passUpdate = require('./Router/passUpdate');

route.get("/", (req, res) => {
  res.status(200).json({ mgs: true });
});
route.post("/signup", signup, (req, res) => {});

route.post("/sendmessage", sendMail, (req, res) => {});

route.post('/login',login,(req,res)=>{});

route.post('/forgotPassword',auth,otpGen,forgotMail,(req,res)=>{});

route.post('/forgotOtpCheck',auth,forgotOtpCheck,passUpdate,(req,res)=>{
  // require eamil + otp send in mail
});




module.exports = route;
