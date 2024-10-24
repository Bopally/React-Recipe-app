import ListItem from "./ListItem";
import recipes from "../data/recipes.json";
import { useState } from "react";
import { Link } from "react-router-dom";

const RecipesList = () => {
  const [recipesToDisplay, setrecipesToDisplay] = useState(recipes);

  const deleteRecipe = (recipeId) => {
    const newArray = recipesToDisplay.filter((recipeObj) => {
      return recipeObj.id !== recipeId;
    });
    setrecipesToDisplay(newArray);
  };

  return (
    <section>
      {recipesToDisplay.map((recipeObj) => {
        return (
          <Link to={`/ItemDetailsPage/${recipeObj.id}`} key={recipeObj.id}>
            <ListItem recipeObj={recipeObj} onDelete={deleteRecipe} />
          </Link>
        );
      })}
    </section>
  );
};

export default RecipesList;
