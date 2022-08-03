import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ArticleCard from "../components/ArticleCard";

import axios from "axios";

// const db = require("../db.json");

const Search = () => {
  const { searchTerm } = useParams();
  const navigate = useNavigate();
  const [articles, setArticles] = useState("");
  const [filterText, setFilterText] = useState(searchTerm ? searchTerm : "");
  //trying to find out how to change the address path according to the search term

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
          return <ArticleCard key={article.id} object={article} />;
        });

  useEffect(() => {
    // //normally this would be an axios call to the server, using it this way now to work without wifi
    // console.log(db);

    // setArticles(db.articles);

    //using axios call
    const getArticles = async () => {
      try {
        console.log("api getter check");
        const response = await axios.get(
          "https://my-json-server.typicode.com/Codaisseur/articles-comments-data/articles"
        );

        setArticles(response.data);
      } catch (e) {
        console.log(e.message);
      }
    };

    getArticles();
  }, []);

  //this updates the address bar whenever the filter state changes
  useEffect(() => {
    navigate(`${filterText}`);
  }, [filterText, navigate]);

  return (
    <div id="searchPage">
      <input
        onChange={filterChanger}
        id="articleFilterInput"
        type="text"
        value={filterText}
        placeholder="Search Articles"
      />

      <div id="articleCounter">{renderArticleList.length} Articles Found</div>
      <div id="articleListDiv">{renderArticleList}</div>
    </div>
  );
};

export default Search;
