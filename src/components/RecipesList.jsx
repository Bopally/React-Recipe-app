import ListItem from "./ListItem";
import recipes from "../data/recipes.json";
import { useState } from "react";

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
      {recipesToDisplay.map((recipeObj) => (
        <ListItem
          key={recipeObj.id}
          recipeObj={recipeObj}
          onDelete={deleteRecipe}
        />
      ))}
    </section>
  );
};

export default RecipesList;
