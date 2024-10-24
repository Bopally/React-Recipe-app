import { Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import RecipesList from "./components/RecipesList";
import ListItem from "./components/ListItem";
import AboutPage from "./components/AboutPage";
import NotFoundPage from "./components/NotFoundPage";

//import data from "./recipes.json";

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="Main">
        <NavBar id="navBar" />
        <Routes>
          <Route path="/" element={<RecipesList />} />
          <Route path="/ListItem" element={<ListItem />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
