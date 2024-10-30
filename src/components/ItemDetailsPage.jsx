// import recipes from "../data/recipes.json";
import UpdateRecipe from "./UpdateRecipe";
import { useParams } from "react-router-dom";

const ItemDetailsPage = ({ recipes, setRecipes }) => {
  const { recipeId } = useParams();
  const recipeDetails = recipes.find((recipe) => recipe.id === recipeId);
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

      <UpdateRecipe
        recipeDetails={recipeDetails}
        setRecipes={setRecipes}
        recipes={recipes}
      />
    </div>
  );
};

export default ItemDetailsPage;
