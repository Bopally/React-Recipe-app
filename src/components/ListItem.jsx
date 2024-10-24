const ListItem = ({ recipeObj, onDelete }) => {
  return (
    <div key={recipeObj.id} className="Content">
      <img src={recipeObj.image} alt={`Image of ${recipeObj.name}`} />
      <div className="Details">
        <p>Name of recipe: {recipeObj.name}</p>
        <p>Calories: {recipeObj.calories}</p>
        <p>Servings: {recipeObj.servings}</p>
        {recipeObj.calories < 200 && <p>Low calories</p>}
      </div>

      <div>
        <button onClick={() => onDelete(recipeObj.id)}>
          Delete this recipe
        </button>
      </div>
    </div>
  );
};

export default ListItem;
