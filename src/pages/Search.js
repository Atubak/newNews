import { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";

const db = require("../db.json");

const Search = () => {
  const [articles, setArticles] = useState("");
  const [filterText, setFilterText] = useState("");

  const filterChanger = (e) => {
    //change the state of the input value
    setFilterText(e.target.value);
  };

  const renderArticleList = !articles
    ? "no articles found"
    : articles
        .filter((article) => {
          return (
            //filter on title or author or category if user writes lowercase
            article.title.toLowerCase().includes(filterText) ||
            article.author.toLowerCase().includes(filterText) ||
            article.categoryId.toLowerCase().includes(filterText) ||
            // filter on the same but sensitive to caps
            article.title.includes(filterText) ||
            article.author.includes(filterText) ||
            article.categoryId.includes(filterText)
          );
        })
        .map((article) => {
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
      <input
        onChange={filterChanger}
        id="articleFilterInput"
        type="text"
        value={filterText}
        placeholder="Search Articles"
      />
      <div id="articleListDiv">{renderArticleList}</div>
    </div>
  );
};

export default Search;
