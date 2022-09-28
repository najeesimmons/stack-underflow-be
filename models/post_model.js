const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
  title: {
    type: String,
    required: [true, "you must enter a title"],
  },
  body: {
    type: String,
    required: [true, "copy and paste your issue"],
  },
  image: {
    type: String,
    required: [true, "you must provide a screenshot of your issue"],
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
