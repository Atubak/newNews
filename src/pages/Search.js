import { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";

const db = require("../db.json");

const Search = () => {
  const [articles, setArticles] = useState("");

  const renderArticleList = !articles
    ? "no articles found"
    : articles.map((article) => {
        return <ArticleCard object={article} />;
      });

  useEffect(() => {
    //normally this would be an axios call to the server, using it this way now to work without wifi
    console.log(db);

    setArticles(db.articles);

    console.log("articles", articles);
  }, []);
  return (
    <div id="searchPage">
      <h1>this is the search page</h1>
      <div id="articleListDiv">{renderArticleList}</div>
    </div>
  );
};

export default Search;
