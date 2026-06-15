import RecipeCard from "./RecipeCard";

function RecipeList({ recipes, setSelectedRecipeId, setRecipes }) {
  return (
    <section className="recipe-grid">
      {recipes.map((recipe) => {
        return (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            setSelectedRecipeId={setSelectedRecipeId}
            setRecipes={setRecipes}
          />
        );
      })}
    </section>
  );
}

export default RecipeList;
