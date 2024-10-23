import recipes from "../data/recipes.json";

const RecipesList = () => {
  return (
    <section>
      {recipes.map((recipeObj) => {
        return (
          <div key={recipeObj.id} className="Content">
            <img src={recipeObj.image} />
            <p>Name of recipe: {recipeObj.name}</p>
            <p>Calories: {recipeObj.calories}</p>
            <p>Servings: {recipeObj.servings}</p>
          </div>
        );
      })}
    </section>
  );
};

export default RecipesList;
