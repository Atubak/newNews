const { Router } = require("express");
const router = new Router();

const db = require("../db.json");

router.get("/", (req, res, next) => {
  try {
    res.json(db.articles);
  } catch (error) {
    next(error);
  }
});

router.get("/:articleId", (req, res, next) => {
  try {
    const { articleId } = req.params;

    const foundArticle = db.articles.find(
      (article) => article.id === +articleId
    );

    res.json(foundArticle);
  } catch (error) {
    next(error);
  }
});

router.get("/:articleId/comments", (req, res, next) => {
  try {
    const { articleId } = req.params;

    console.log("hello");
    const commentArr = db.comments.filter(
      (comment) => comment.articleId === +articleId
    );
    console.log(commentArr);
    res.json(commentArr);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
