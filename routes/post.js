// const { application } = require("express");
const express = require("express");
const {
  getPost,
  getPosts,
  createPost,
  deletePost,
  updatePost,
} = require("../controllers/post_controller");

const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// router.use(requireAuth);

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", requireAuth, createPost);
router.delete("/:id", requireAuth, deletePost);
router.put("/:id", requireAuth, updatePost);

module.exports = router;
