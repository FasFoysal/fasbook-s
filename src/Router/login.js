const signupUser = require("./../db/signupUser");
const bcrypt = require("bcrypt");

const login = async (req, res, next) => {
  const { email, pass } = req.body;
  if (email && pass) {
    try {
      let user = await signupUser.find({ email: email });
      if (user.length) {
        let { _id, name, email, profile, date } = user[0];
        let passVerify = await bcrypt.compare(pass, user[0].pass);
        if (passVerify) {
          res.json({ _id, name, email, profile, date ,code:0,mgs:"Login successful"});
        } else {
          res.json({ mgs: "Wrong password", code: 3 });
        }
      } else {
        res.json({ mgs: "user not found 😕", code: 2 });
      }
    } catch (error) {
      res.send(error);
    }
  } else {
    res.json({ mgs: "Fill the form 😌", code: 2 });
  }
};

module.exports = login;
