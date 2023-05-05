require("dotenv").config();
const mongoose = require("mongoose");

const connected = async () => {
  try {
    await mongoose.connect(process.env.dbSignup);
  } catch (error) {
    console.log(error);
  }
};
connected();

const schema = new mongoose.Schema({
  email:String,
  otp:String
})




const userOtp = mongoose.model("fasbook-userOtp", schema);

module.exports = userOtp;
