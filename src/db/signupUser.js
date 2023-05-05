require("dotenv").config();
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require('bcrypt');

const connected = async () => {
  try {
    await mongoose.connect(process.env.dbSignup);
    console.log("db connect");
  } catch (error) {
    console.log(error);
  }
};
connected();

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(val) {
      if (!validator.isEmail(val)) {
        throw new error("Email not valid");
      }
    },
  },
  pass: {
    type: String,
    required: true,
    min: 4,
  },
  profile:{
    type:String,
    default:'profile/profile.jpeg'
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

schema.pre('save',async function(next){
  try {
    this.pass = await bcrypt.hash(this.pass,8);
    next();
  } catch (error) {
    console.log(error);
  }
})

const signupUser = mongoose.model("fasbook-signupUser", schema);

module.exports = signupUser;
