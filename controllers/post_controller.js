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
    const post = await Post.create({ title, body, image, user_id });
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletePost = async (req, res) => {
  //verify whether owner of post is user making request
  // if (req.params.id !== user_id) return
  try {
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
