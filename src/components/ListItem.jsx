import { Link } from "react-router-dom";

const ListItem = ({ recipeObj, onDelete }) => {
  return (
    <div key={recipeObj.id} className="Content">
      <Link to={`/ItemDetailsPage/${recipeObj.id}`} key={recipeObj.id}>
        <img src={recipeObj.image} alt={`Image of ${recipeObj.name}`} />
        <div className="Details">
          <p>Name of recipe: {recipeObj.name}</p>
          <p>Calories: {recipeObj.calories}</p>
          <p>Servings: {recipeObj.servings}</p>
          <div className="Tags">
            {recipeObj.calories < 200 && (
              <div className="LowCalories">Low calories</div>
            )}
          </div>
        </div>
      </Link>
      <div>
        <button onClick={() => onDelete(recipeObj.id)}>
          Delete this recipe
        </button>
      </div>
    </div>
  );
};

export default ListItem;
