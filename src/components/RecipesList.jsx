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
      {recipesToDisplay.map((recipeObj) => {
        return (
          <div key={recipeObj.id} className="Content">
            <img src={recipeObj.image} />
            <p>Name of recipe: {recipeObj.name}</p>
            <p>Calories: {recipeObj.calories}</p>
            <p>Servings: {recipeObj.servings}</p>
            {recipeObj.calories < 200 && <p>Low calories</p>}
            <button
              onClick={() => {
                deleteRecipe(recipeObj.id);
              }}
            >
              Delete this recipe
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default RecipesList;
