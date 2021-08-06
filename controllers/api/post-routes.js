const router = require("express").Router();
const { User, Post, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const allPost = await Post.findAll({});
    const posts = allPost.map((post) => post.get({ plain: true }));
    res.render("posts", { posts });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/:id", withAuth, async (req, res) => {
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
        { model: User, attributes: ["username"] },
      ],
    });
    const post = onePost.get({ plain: true });
    res.render("single-post", post);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    const onePost = await Post.create({
      title: req.body.title,
      post_url: req.body.post_url,
      user_id: req.session.user_id,
    });
    const onePost = onePost.map((post) => post.post({ plain: true }));
    res.render("new-post", { posts });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    const onePost = await Post.update(
      {
        title: req.body.title,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    const onePost = onePost.map((post) => post.put({ plain: true }));
    res.render("update-post", { posts });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const onePost = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    const onePost = onePost.map((post) => post.delete({ plain: true }));
    res.render("delete-post", { posts });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
