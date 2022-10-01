const jwt = require("jsonwebtoken");
const User = require("../models/user_model");

const requireAuth = async (req, res, next) => {
  const { authorization } = req.body;

  if (!authorization) {
    res.status(401).json({ error: "Authorization token required" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { id } = jwt.verify(token, process.env.SECRET);

    req.user = await User.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is not authorized" });
  }
};

module.exports = requireAuth;
