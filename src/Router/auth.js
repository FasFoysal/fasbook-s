const signupUser = require("./../db/signupUser");

const auth = async (req, res, next) => {
  try {
    // req.body data get
    let { id, email } = req.body;
    // req.params id get
    if (!id) {
      id = req.query.id;
    }
    // if id found then find
    if (id) {
      const user = await signupUser.find({ _id: id });
      if (user.length) {
        req.id = id;
        next();
      }
      else {
        res.json({ mgs: "user not found", code: 2 });
      }
    } 
    // email id found then find
    else {
      const user = await signupUser.find({ email: email });
      if (user.length) {
        req.email = email;
        next();
      } else {
        res.json({ mgs: "user not found", code: 3 });
      }
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = auth;
