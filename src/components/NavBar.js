import logo from "../logo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="navbar">
      <Link to="/">
        <img src={logo} className="App-logo" alt="logo" />
        <span>newNews()</span>
      </Link>
    </div>
  );
};

export default NavBar;
