import "./ArticleCard.css";

const ArticleCard = ({ object }) => {
  return (
    <div className="articleCardDiv">
      <div className="artImageDiv">
        <img src={object.imgUrl} alt="" />
      </div>
      <div className="articleCardInfo">
        <h3>{object.title}</h3>
        <p>{object.author}</p>
        <p>categoryId: {object.categoryId} </p>
      </div>
    </div>
  );
};

export default ArticleCard;
