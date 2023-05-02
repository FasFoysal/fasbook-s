const signupUser = require("./../db/signupUser");
const signup = async (req, res, next) => {
  const { fname, lname, email, pass, repass } = req.body;
  if (fname && lname && email && pass && repass) {
    if (pass === repass && pass.length >= 4) {
      try {
        const userData = signupUser({ fname, lname, email, pass });
        await userData.save();
        res.json({ mgs: "Signup successful 😎", code: 1 });
        next();
      } catch (err) {
        if (err.keyValue) {
          res.json({
            mgs: "You already have an account plz login 😅",
            code: 2,
          });
        } else if (err.name == "ValidationError") {
          res.json({ mgs: "Email not valid 🥸", code: 3 });
        } else {
          res.json(err);
        }
      }
    } else {
      res.json({ mgs: "password Require not match 🤓", code: 4 });
    }
  } else {
    res.json({ mgs: "fill the field properly 🫣", code: 5 });
  }
};

module.exports = signup;
