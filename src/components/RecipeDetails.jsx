import { useState, useEffect } from "react";
import { getSingleRecipe } from "../api/recipes";
import { updateRecipe } from "../api/recipes";
import { useParams, useNavigate } from "react-router";

function RecipeDetails({ setRecipes, recipes }) {
  const [recipe, setRecipe] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const { recipeId } = useParams();

  const foundRecipeId = recipes.find((recipe) => recipe.id === recipeId);

  useEffect(() => {
    async function loadSingleRecipe() {
      if (foundRecipeId) {
        const recipeData = await getSingleRecipe(foundRecipeId.id);
        setRecipe(recipeData);
      } else {
        navigate("*");
      }
    }
    loadSingleRecipe();
  }, [recipeId]);

  //   if (!recipe) {
  //     return <p>Loading Recipe......</p>;
  //   }

  console.log("recipe is working", recipe);

  const handleBack = () => {
    navigate("/recipes");
  };

  function handleStartEditing() {
    setName(recipe.name);
    setImageUrl(recipe.imageUrl);
    setDescription(recipe.description);

    setIsEditing(true);
  }

  async function handleEditSubmit(event) {
    event.preventDefault();
    const newlyEditedObj = {
      name: name,
      imageUrl: imageUrl,
      description: description,
    };
    const editedRecipe = await updateRecipe(recipeId, newlyEditedObj);
    setRecipes((prevState) => {
      console.log("HERE IN STATE", prevState);
      return prevState.map((item) => {
        if (item.id === recipeId) {
          return { ...item, ...editedRecipe };
        }
        return item;
      });
    });

    setName("");
    setDescription("");
    setImageUrl("");
    setIsEditing(false);
    setRecipe(editedRecipe);
  }

  if (isEditing) {
    return (
      <section className="recipe-details">
        <h2>Edit Recipe</h2>
        <form className="edit-recipe-form" onSubmit={handleEditSubmit}>
          <label htmlFor="edited-recipe-name">Recipe Name:</label>
          <input
            id="edited-recipe-image"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <label htmlFor="edited-recipe-image">Recipe Image:</label>
          <input
            id="edited-recipe-name"
            type="url"
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
          />

          <label htmlFor="edited-recipe-description">
            Recipe Description:{" "}
          </label>
          <textarea
            id="edited-recipe-description"
            type="text"
            row="6"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />

          <div className="recipe-details-actions">
            <button type="submit">Save Changes</button>
            <button className="secondary-button">Cancel</button>
          </div>
        </form>
      </section>
    );
  }

  return (
    <section className="recipe-details">
      <img src={recipe?.imageUrl} alt={recipe?.name} />
      <div className="recipe-details-content">
        <h2>{recipe?.name}</h2>
        <p>{recipe?.description}</p>
        <button onClick={handleBack}> Back to Recipes</button>
        <button type="button" onClick={handleStartEditing}>
          Edit Recipe
        </button>
      </div>
    </section>
  );
}

export default RecipeDetails;
