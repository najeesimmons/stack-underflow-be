const { Post } = require("../models");
const mongoose = require("mongoose");

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
  const { title, body, image } = req.body;
  let emptyfields = [];

  if (!title) {
    emptyfields.push("title");
  }
  if (!body) {
    emptyfields.push("body");
  }
  if (!image) {
    emptyfields.push("image");
  }
  if (emptyfields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyfields });
  }
  try {
    const post = await Post.create({ title, body, image });
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletePost = async (req, res) => {
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
