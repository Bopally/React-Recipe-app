import ListItem from "./ListItem";

const RecipesList = ({ recipes, setRecipes }) => {
  const deleteRecipe = (recipeId) => {
    const newArray = recipes.filter((recipeObj) => {
      return recipeObj.id !== recipeId;
    });
    setRecipes(newArray);
  };

  return (
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
  );
};

export default RecipesList;
