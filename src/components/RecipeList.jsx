import RecipeCard from "./RecipeCard";

function RecipeList({ recipes, setRecipes }) {
  return (
    <section className="recipe-grid">
      {recipes.map((recipe) => {
        return (
          <RecipeCard key={recipe.id} recipe={recipe} setRecipes={setRecipes} />
        );
      })}
    </section>
  );
}

export default RecipeList;
