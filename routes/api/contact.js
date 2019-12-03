const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

//getting contact creds
// const cred = require("../../cred");

//----------------------handling contact form here------------------
var transport = {
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: "iasadsherazi@gmail.com",
    pass: "hassan12345/"
  }
};

const transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

router.post("/", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const content = `name: ${name} \n email: ${email} \n message: ${message}`;

  let mail = {
    from: name,
    to: "iasadsherazi@gmail.com", //Change to email address that you want to receive messages on
    subject: "New Message from Contact Form",
    text: content
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "fail"
      });
    } else {
      res.json({
        msg: "success"
      });
    }
  });
});

module.exports = router;
