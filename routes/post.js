// const { application } = require("express");
const express = require("express");
const {
  getPost,
  getPosts,
  createPost,
  deletePost,
  updatePost,
} = require("../controllers/post_controller");

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", createPost);
router.delete("/:id", deletePost);
router.patch("/:id", deletePost);

module.exports = router;
