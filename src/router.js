const express = require("express");
const route = express.Router();
const signup = require("./Router/signup");
const sendMail = require("./Router/sendMail");

route.get("/", (req, res) => {
  res.status(200).json({ mgs: true });
});
route.post("/signup", signup, (req, res) => {});

route.post("/sendmessage", sendMail, (req, res) => {});

route.use((err, req, res, next) => {
  if (err) {
    console.log(err);
    res.send(err)
  }
});

module.exports = route;
