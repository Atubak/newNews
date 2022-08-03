import { useEffect } from "react";

const db = require("../db.json");

const Search = () => {
  useEffect(() => {
    //normally this would be an axios call to the server, using it this way now to work without wifi
    console.log(db);
  }, []);
  return (
    <div id="searchPage">
      <h1>this is the search page</h1>
    </div>
  );
};

export default Search;
