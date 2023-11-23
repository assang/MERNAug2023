const express = require('express')
const jwt = require("jsonwebtoken");
const router = express.Router()

var asyncHandler = require("express-async-handler");

const User = require("../models/Users").User;

router.post('/signup', asyncHandler(async (req, res) => {
    const newUser = new User({
        name:req.body.name,
        email:req.body.email
    })

    let hash = await newUser.createHash(req.body.password)
    newUser.password_hash = hash;

    await newUser.save();

    return res.status(201).json({
        message: "User created successfully.",
      });

}))

router.post('/signin', asyncHandler(async (req, res) =>{
    // email, password
    let user = await User.findOne({email: req.body.email})
    // res db -> name, email, hashed_password
    
    if (user === null) {
        return res.status(400).json({
          message: "User not found.",
        });
      } else {
        if (await user.validatePassword(req.body.password)) {
              const token = jwt.sign(
                { email: user.email },
                '123456',
                {
                    expiresIn: "2h",
                }
            );
          return res.status(200).json({
            token: token,
            message: "User Successfully Logged In",
          });
        } else {
          return res.status(400).json({
            token: "jbjesfjk",
            message: "Incorrect Password",
          });
        }
      }
}))

module.exports = router;