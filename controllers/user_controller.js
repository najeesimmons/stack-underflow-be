const { User } = require("../models");
const mongoose = require("mongoose");

const loginUser = (req, res) => {
  res.json({
    msg: "loginUser working",
  });
};

const signupUser = (req, res) => {
  res.json({
    msg: "signupUser working",
  });
};

module.exports = {
  loginUser,
  signupUser,
};
