const signupUser = require("./../db/signupUser");
const signup = async (req, res) => {
  const { fname, lname, email, pass, repass } = req.body;
  if (fname && lname && email && pass && repass) {
    if (pass === repass && pass.length >= 4) {
      try {
        const userData = signupUser({ fname, lname, email, pass });
        await userData.save();
        res.status(200).json({ fname, lname, email });
      } catch (err) {
        if (err.keyValue) {
          res
            .status(406)
            .json({ mgs: "You already have an account plz login" });
        } else if (err.name == "ValidationError") {
          res.status(426).json({ mgs: "Email not valid" });
        } else {
          res.json(err);
        }
      }
    } else {
      res.status(424).json({ mgs: "password Require not match" });
    }
  } else {
    res.status(302).json({ mgs: "fill the field properly" });
  }
};

module.exports = signup;
