import ListItem from "./ListItem";
import NewRecipeForm from "./NewRecipeForm";

const RecipesList = ({ recipes, setRecipes }) => {
  const deleteRecipe = (recipeId) => {
    const newArray = recipes.filter((recipeObj) => {
      return recipeObj.id !== recipeId;
    });
    setRecipes(newArray);
  };

  const addRecipe = (newRecipe) => {
    setRecipes([newRecipe, ...recipes]);
  };

  return (
    <div>
      <NewRecipeForm addRecipe={addRecipe} />

      <section className="RecipesList">
        {recipes.map((recipeObj) => {
          return (
            <ListItem
              key={recipeObj.id}
              recipeObj={recipeObj}
              onDelete={deleteRecipe}
            />
          );
        })}
      </section>
    </div>
  );
};

export default RecipesList;
