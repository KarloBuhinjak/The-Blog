const { Router } = require("express");
const router = Router();
const Post = require("../Models/Post");
const Comment = require("../Models/Comment");

router.get("/allPosts", async (req, res) => {
  const posts = await Post.find();

  res.json(posts);
});

router.get("/post/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);

  res.json(post);
});

router.post("/post/new", (req, res) => {
  const post = new Post({
    title: req.body.title,
    text: req.body.text,
    author: req.body.author,
  });

  post.save();

  res.json(post);
});

router.delete("/post/delete/:id", async (req, res) => {
  const deleted_post = await Post.findByIdAndDelete(req.params.id);
  const deleted_comments = await Comment.deleteMany({ postId: req.params.id });

  res.json({ deleted_post, deleted_comments });
});

module.exports = router;
