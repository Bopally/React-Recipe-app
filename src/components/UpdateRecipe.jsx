import { useState } from "react";

const UpdateRecipe = ({ recipeDetails, setRecipes, recipes }) => {
  const [title, setTitle] = useState(recipeDetails.name || "");
  const [calories, setCalories] = useState(recipeDetails.calories || "");
  const [servings, setServings] = useState(recipeDetails.servings || "");
  const [description, setDescription] = useState(
    recipeDetails.description || ""
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedRecipe = {
      ...recipeDetails,
      name: title,
      calories: Number(calories),
      servings: Number(servings),
      description: description,
    };

    // Update the information from the recipe with the new one
    const updatedRecipes = recipes.map((recipe) =>
      recipe.id === recipeDetails.id ? updatedRecipe : recipe
    );

    setRecipes(updatedRecipes);

    setTitle(updatedRecipe.name);
    setCalories(updatedRecipe.calories.toString());
    setServings(updatedRecipe.servings.toString());
    setDescription(updatedRecipe.description);
  };

  return (
    <section className="box">
      <h2>Update this recipe</h2>
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <label>
          Title:
          <input
            type="text"
            name="title"
            placeholder={recipeDetails.name}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        {/* Calories */}
        <label>
          Calories:
          <input
            type="number"
            name="calories"
            placeholder={recipeDetails.calories.toString()}
            required
            min={0}
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
        </label>

        {/* Servings */}
        <label>
          Servings:
          <input
            type="number"
            name="servings"
            placeholder={recipeDetails.servings.toString()}
            required
            min={1}
            value={servings}
            onChange={(e) => setServings(e.target.value)}
          />
        </label>

        {/* Description */}
        <label>
          Description:
          <textarea
            name="description"
            placeholder={recipeDetails.description}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button type="submit">Edit the recipe</button>
      </form>
    </section>
  );
};

export default UpdateRecipe;
