import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Category from "./pages/Category";
import ArticleDetail from "./pages/ArticleDetail";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/article/:articleId" element={<ArticleDetail />} />
      </Routes>
    </div>
  );
}

export default App;
