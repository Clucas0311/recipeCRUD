import { deleteRecipe } from "../api/recipes";
import { Link } from "react-router";
function RecipeCard({ recipe, setRecipes }) {
  async function handleRecipeDelete() {
    await deleteRecipe(recipe.id);

    setRecipes((prevRecipes) => {
      return prevRecipes.filter((item) => {
        // loop through and return a new array of all the recipes that do
        // do not equal to the recipe that we deleted
        return item.id !== recipe.id;
      });
    });
  }

  return (
    <article className="recipe-card">
      <img src={recipe.imageUrl} alt={recipe.name} />
      <div className="recipe-card-content">
        <h2>{recipe.name}</h2>
        <p>{recipe.description}</p>

        <div className="recipe-card-actions">
          <Link to={`/recipes/${recipe.id}`}>See Details</Link>
          <button onClick={handleRecipeDelete} className="danger-button">
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}

export default RecipeCard;
