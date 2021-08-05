const router = require("express").Router();
const { Post, User, Comment } = require("../models");

router.get("/dashboard", async (req, res) => {
  const allPost = await Post.findAll({});
  const posts = allPost.map((post) => post.get({ plain: true }));
  res.render("dashboard", { posts });
});

router.get("/post/:id", (req, res) => {});

router.get("/create-post", (req, res) => {});

module.exports = router;
