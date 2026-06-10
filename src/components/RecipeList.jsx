import RecipeCard from "./RecipeCard";

function RecipeList({ recipes, setSelectedRecipeId }) {
  return (
    <section className="recipe-grid">
      {recipes.map((recipe) => {
        return (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            setSelectedRecipeId={setSelectedRecipeId}
          />
        );
      })}
    </section>
  );
}

export default RecipeList;
