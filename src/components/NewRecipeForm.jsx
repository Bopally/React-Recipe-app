import { useState } from "react";
import { v4 as uuid } from "uuid";

const NewRecipeForm = ({ addRecipe }) => {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecipe = {
      id: uuid(),
      name: name,
      calories: calories,
      servings: servings,
      image: image,
      description: description,
    };
    console.log(newRecipe);

    addRecipe(newRecipe);
    setName("");
    setCalories("");
    setServings("");
    setImage("");
    setDescription("");
  };

  return (
    <section className="box">
      <h2>Add a new recipe</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Chocolate Cake"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
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
        {/* Image URL */}
        <label>
          Image URL:
          <input
            type="url"
            name="image"
            placeholder="#"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        {/* Description */}
        <label>
          Description:
          <textarea
            name="description"
            placeholder="Write few words about the recipe!"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button type="submit">Add Recipe</button>
      </form>
    </section>
  );
};

export default NewRecipeForm;
