const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  try {
    const allComment = await Comment.findAll({});
    const comments = allComment.map((comment) => comment.get({ plain: true }));
    res.render("comments", { comments });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    const oneComment = await Comment.create({
      comment_text: req.body.comment_text,
      user_id: req.session.user_id,
      post_id: req.body.post_id,
    });
    const oneComment = oneComment.map((comment) =>
      comment.comment({ plain: true })
    );
    res.render("new-comment", { comments });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const oneComment = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });
    const oneComment = oneComment.map((comment) =>
      comment.delete({ plain: true })
    );
    res.render("delete-comment", { comments });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
