var nodemailer = require("nodemailer");

const sendMail = async (req, res, next) => {
  try {
    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "shounfoysal@gmail.com",
        pass: "autvixnsyjkvkzdw",
      },
    });

    const { name, email, text } = req.body;
    if ( text && email && name) {
      try {
        let info = await transporter.sendMail({
          from: "shounfoysal@mail.com",
          to: "beautyakterff@gmail.com",
          subject: name,
          text: `
            FasBook
            -------------------
            name: ${name}, 
            Email: ${email}
            Message: ${text}
            `,
        });

        res.json({ mgs: "Message send succesful", code: "M1" });
      } catch (error) {
        res.json({mgs:"Somthing wrong in server try again",code:"M0"});
      }
    } else {
      res.send("plz fillup the form");
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

module.exports = sendMail;
