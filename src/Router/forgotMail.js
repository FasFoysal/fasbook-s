var nodemailer = require("nodemailer");

const forgotMail = async (req, res, next) => {
  try {
    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "shounfoysal@gmail.com",
        pass: "autvixnsyjkvkzdw",
      },
    });
      try {
        let info = await transporter.sendMail({
          from: "shounfoysal@gmail.com",
          to: req.email,
          subject: "Fasbook",
          html: `
            <h1 style="color:orange">FasBook</h1>
            <h3>Welcome to our opt service</h3>
            <p>Your otp is: </p> <b style="color:orange"> ${req.otp} </b>
            `
        });

        res.json({ mgs: "Check you mail", code: "M1" });
      } catch (error) {
        res.json({mgs:"Somthing wrong in server try again",code:"M0"});
        console.log(error);
      }

  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

module.exports = forgotMail;
