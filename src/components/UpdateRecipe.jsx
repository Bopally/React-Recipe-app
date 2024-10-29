import { useState } from "react";

const UpdateRecipe = () => {
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecipe = {
      calories: calories,
      servings: servings,
      description: description,
    };
    console.log(newRecipe);

    setCalories("");
    setServings("");
    setDescription("");
  };

  return (
    <section className="box">
      <h2>Update this recipe</h2>

      <form onSubmit={handleSubmit}>
        {/* Calories */}
        <label>
          Calories:
          <input
            type="number"
            name="calories"
            placeholder="500"
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
            placeholder="4"
            required
            min={1}
            value={servings}
            onChange={(e) => setServings(e.target.value)}
          />
        </label>

        {/* Description */}
        <label>
          Description:
          <text
            name="description"
            placeholder="Write few words about the recipe!"
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
