const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

router.get("/", async (req, res) => {
  const allPosts = await Post.findAll({});
});
module.exports = router;
