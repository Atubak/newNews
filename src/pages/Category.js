import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ArticleCard from "../components/ArticleCard";

const Category = () => {
  const { categoryId } = useParams();

  const [articles, setArticles] = useState("");

  const renderArticleList = !articles
    ? "no articles found"
    : articles.map((article) => {
        return <ArticleCard key={article.id} object={article} />;
      });

  useEffect(() => {
    const getCategoryArticles = async () => {
      try {
        const response = await axios.get(
          `https://my-json-server.typicode.com/Codaisseur/articles-comments-data/categories/${categoryId}/articles`
        );

        console.log(response.data);
        setArticles(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getCategoryArticles();
  }, []);

  return (
    <div id="categoryPage">
      <h1>{categoryId}</h1>
      <div id="categoryArticleList">{renderArticleList}</div>
    </div>
  );
};

export default Category;
