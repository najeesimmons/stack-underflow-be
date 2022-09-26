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
  try {
    res.json(await Post.create(req.body));
  } catch (error) {
    res.status(400).json(error);
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
  updatePost
}
