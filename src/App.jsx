import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./App.css";

import recipesJson from "./data/recipes.json";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import RecipesList from "./components/RecipesList";
import NewRecipeForm from "./components/NewRecipeForm";
import ItemDetailsPage from "./components/ItemDetailsPage";
import AboutPage from "./components/AboutPage";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  const [recipes, setRecipes] = useState(recipesJson);

  const addRecipe = (newRecipe) => {
    setRecipes([newRecipe, ...recipes]);
  };

  return (
    <div className="App">
      <SideBar />
      <div className="Main">
        <NavBar id="navBar" />
        <NewRecipeForm addRecipe={addRecipe} />
        <Routes>
          <Route
            path="/"
            element={<RecipesList recipes={recipes} setRecipes={setRecipes} />}
          />
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
