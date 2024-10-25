import recipes from "../data/recipes.json";
import UpdateRecipe from "./UpdateRecipe";
import { useParams } from "react-router-dom";

const ItemDetailsPage = () => {
  const { recipeId } = useParams();
  const recipeDetails = recipes.find((recipeObj) => recipeObj.id === recipeId);
  if (!recipeDetails) {
    return <p>Recipe not found</p>;
  }

  return (
    <div className="ItemDetailsPage">
      <h2>{recipeDetails.name}</h2>
      <img src={recipeDetails.image} alt={`Image of ${recipeDetails.name}`} />
      <p>Calories: {recipeDetails.calories}</p>
      <p>Servings: {recipeDetails.servings}</p>
      <p>Description: {recipeDetails.description}</p>

      <UpdateRecipe />
    </div>
  );
};

export default ItemDetailsPage;
