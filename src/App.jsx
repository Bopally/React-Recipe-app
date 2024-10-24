import { Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import RecipesList from "./components/RecipesList";
import ItemDetailsPage from "./components/ItemDetailsPage";
import AboutPage from "./components/AboutPage";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="Main">
        <NavBar id="navBar" />
        <Routes>
          <Route path="/" element={<RecipesList />} />
          <Route
            path="/ItemDetailsPage/:recipeId"
            element={<ItemDetailsPage />}
          />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
