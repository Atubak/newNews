import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Comments from "../components/Comments";

import "./ArticleDetail.css";

const ArticleDetail = () => {
  const [article, setArticle] = useState("nothing yet");
  const { articleId } = useParams();

  useEffect(() => {
    const getArticle = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/articles/${articleId}`
        );
        console.log(response.data);
        setArticle(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getArticle();
  }, [articleId]);

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
      {<Comments />}
    </div>
  );
};

export default ArticleDetail;
