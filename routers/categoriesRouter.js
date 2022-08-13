const { Router } = require("express");
const router = new Router();

const db = require("../db.json");

router.get("/:categoryId/articles", (req, res, next) => {
  try {
    const { categoryId } = req.params;

    const articleArr = db.articles.filter(
      (article) => article.categoryId === categoryId
    );

    res.json(articleArr);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
