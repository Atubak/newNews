import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./ArticleDetail.css";

const ArticleDetail = () => {
  const [article, setArticle] = useState("nothing yet");
  const { articleId } = useParams();

  useEffect(() => {
    const getArticle = async () => {
      try {
        const response = await axios.get(
          `https://my-json-server.typicode.com/Codaisseur/articles-comments-data/articles/${articleId}`
        );
        console.log(response.data);
        setArticle(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getArticle();
  }, []);

  return (
    <div id="articleDetailPage">
      <div className="artImageDiv">
        <img src={article.imgUrl} alt="" />
      </div>
      <div id="articleContent">
        <h1>{article.title}</h1>
        <p>{article.author}</p>
        <br />
        <p>{article.content}</p>
      </div>
      {/* here comes the comments component */}
    </div>
  );
};

export default ArticleDetail;
