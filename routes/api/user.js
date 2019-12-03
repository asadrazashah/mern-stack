const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const secret = require("../../config/secret");

//bring user model
const User = require("../../models/User");

router.post("/signup", function(req, res) {
  //destructing the body form the req and then indiviual fields of the req
  const { body } = req;
  let { email } = body;
  let { password } = body;
  let { name } = body;

  if (email && name && password) {
    const user = new User({
      name: name,
      email: email,
      password: password
    });

    //verifying email doesnt exist
    User.find({ email: email }, function(err, previousUser) {
      if (err) {
        return res.send({
          success: false,
          message: "Error: Server error"
        });
      }
      if (previousUser.length > 0) {
        return res.send({
          success: false,
          message: "Error: Email already exists,try with different email"
        });
      }
    });

    //saving the user
    user
      .save()
      .then(user => {
        res.sendStatus(200);
      })
      .catch(err => res.json(err));
  }
});

router.post("/signin", function(req, res) {
  const { email, password } = req.body;

  User.authenticate(email, password, function(error, user) {
    if (error || !user) {
      var err = new Error("Wrong email or password.");
      err.status = 401;
      return next(err);
    } else {
      // Issue token using json web token
      const payload = { email };
      const token = jwt.sign(payload, secret, {
        expiresIn: "1h"
      });
      res.cookie("token", token, { httpOnly: true }).sendStatus(200);
      // return res.json({ success: true });
    }
  });
});

module.exports = router;
