const { User } = require("../models");
const mongoose = require("mongoose");

const loginUser = (req, res) => {
  res.json({
    msg: "loginUser working",
  });
};

const signupUser = (req, res) => {
    const signupUser = async (req, res) => {
        const {email, password} = req.body
      
        try {
          const user = await User.signup(email, password)
      
          res.status(200).json({email, user})
        } catch (error) {
          res.status(400).json({error: error.message})
        }
      }
};

module.exports = {
  loginUser,
  signupUser,
};
