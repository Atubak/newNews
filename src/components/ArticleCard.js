import "./ArticleCard.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ArticleCard = ({ object }) => {
  const navigate = useNavigate();

  const redirecter = () => {
    navigate(`/article/${object.id}`);
  };

  return (
    <div className="articleCardDiv">
      <div className="artImageDiv">
        <img src={object.imgUrl} alt="" />
      </div>
      <div className="articleCardInfo">
        <h3>{object.title}</h3>
        <p>{object.author}</p>
        <p>
          categoryId:{" "}
          <Link to={`/category/${object.categoryId}`}>{object.categoryId}</Link>{" "}
        </p>
        <button onClick={redirecter} className="articleRedirectButton">
          Click to Read More
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
