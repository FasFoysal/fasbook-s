require("dotenv").config();
const mongoose = require("mongoose");
const validator = require("validator");

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
  fname: {
    type: String,
    required: true,
  },
  lname: {
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
  date: {
    type: Date,
    default: Date.now,
  },
});

const signupUser = mongoose.model("fasbook-signupUser", schema);

module.exports = signupUser;
