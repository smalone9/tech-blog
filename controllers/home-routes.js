const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../../utils/auth");

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/", withAuth, async (req, res) => {
  try {
    const allPost = await Post.findAll({});
    const posts = allPost.map((post) => post.get({ plain: true }));
    res.render("homepage", { posts });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/post/:id", withAuth, async (req, res) => {
  try {
    const onePost = await Post.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: Comment,
          include: {
            model: User,
            attributes: ["username"],
          },
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    const post = onePost.get({ plain: true });
    res.render("single-post", post);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
