const { Post } = require("../models");

const getPosts = async (req, res) => {
  try {
    res.json(await Post.find({}).sort({ createdAt: -1 }));
  } catch (error) {
    res.status(400).json(error);
  }
};

const getPost = async (req, res) => {
  try {
    res.json(await Post.findById(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
};

const createPost = async (req, res) => {
  const { title, body } = req.body;
  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!body) {
    emptyFields.push("body");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields });
  }
  try {
    const user_id = req.user._id;
    const post = await Post.create({ title, body, user_id });
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletePost = async (req, res) => {
  const { user } = req;

  try {
    const postObj = await Post.findById(req.params.id);
    console.log(postObj);
    if (postObj.user_id !== user._id) {
      console.log("NOT AUTHORIZED TO DELETE");
      return res.status(403).json({ message: "unauthorized" });
    }
    res.json(await Post.findByIdAndRemove(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
};

const updatePost = async (req, res) => {
  try {
    res.json(
      await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  getPost,
  getPosts,
  createPost,
  deletePost,
  updatePost,
};
