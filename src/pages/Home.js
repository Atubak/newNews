import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const searchBtnHandler = () => {
    navigate("/search");
  };

  return (
    <div id="home">
      <button onClick={searchBtnHandler}>go to search page</button>
    </div>
  );
};

export default Home;
