const router = require("express").Router();
const { Post, User, Comment } = require("../models");

router.get("/dashboard", async (req, res) => {
  try {
    const allPost = await Post.findAll({});
    const posts = allPost.map((post) => post.get({ plain: true }));
    res.render("dashboard", { posts });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/post/:id", (req, res) => {
  try {
    const onePost = await Post.findOne({
      where: { id: req.params.id },
      include: {
        model: Comment,
      },
    });
    const post = onePost.get({ plain: true });
    res.render("single-post", post);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/create-post", (req, res) => {});

module.exports = router;
