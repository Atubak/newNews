const express = require("express");
const app = express();
const port = 4000;

const cors = require("cors");

const articlesRouter = require("./routers/articlesRouter");
const categoriesRouter = require("./routers/categoriesRouter");

app.use(cors());
// Requests to http://localhost:4000/articles get a response of an array with 6 articles
// Requests to http://localhost:4000/articles/:articleId get a response of a specific article
// Requests to http://localhost:4000/articles/:articleId/comments get a response of an array of comments for a specific article
app.use("/articles", articlesRouter);

// Requests to http://localhost:4000/categories/:categoryId/articles get a response of an array of articles with that categoryId
app.use("/categories", categoriesRouter);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
