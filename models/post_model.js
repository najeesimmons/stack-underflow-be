const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  publishDate: { type: Date, default: Date.now },
  comments: [
    {
      type: String,
      publishDate: { type: Date, default: Date.now },
    },
  ],
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
