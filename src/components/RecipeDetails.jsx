import { useState, useEffect } from "react";
import { getSingleRecipe } from "../api/recipes";

function RecipeDetails({ selectedRecipeId, setSelectedRecipeId }) {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    async function loadSingleRecipe() {
      const recipeData = await getSingleRecipe(selectedRecipeId);
      setRecipe(recipeData);
    }
    loadSingleRecipe();
  }, [selectedRecipeId]);

  //   if (!recipe) {
  //     return <p>Loading Recipe......</p>;
  //   }

  const handleBack = () => {
    setSelectedRecipeId(null);
  };
  return (
    <section className="recipe-details">
      <img src={recipe?.imageUrl} alt={recipe?.name} />
      <div className="recipe-details-content">
        <h2>{recipe?.name}</h2>
        <p>{recipe?.description}</p>
        <button onClick={handleBack}> Back to Recipes</button>
      </div>
    </section>
  );
}

export default RecipeDetails;
