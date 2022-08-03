import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";

const Home = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState("");

  const searchBtnHandler = () => {
    navigate("/search/");
  };

  const latest = !articles
    ? "loading article..."
    : articles.sort((a, b) => {
        return b.unixTimeStamp - a.unixTimeStamp;
      })[0];

  useEffect(() => {
    const getArticles = async () => {
      try {
        const request = await axios.get(
          "https://my-json-server.typicode.com/Codaisseur/articles-comments-data/articles"
        );
        setArticles(request.data);
      } catch (e) {
        console.log(e.message);
      }
    };

    getArticles();
  }, []);

  return (
    <div id="home">
      <ArticleCard object={latest} />
      <button onClick={searchBtnHandler}>go to search page</button>
    </div>
  );
};

export default Home;
