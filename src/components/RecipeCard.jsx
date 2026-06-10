function RecipeCard({ recipe, setSelectedRecipeId }) {
  return (
    <article className="recipe-card">
      <img src={recipe.imageUrl} alt={recipe.name} />
      <div className="recipe-card-content">
        <h2>{recipe.name}</h2>
        <p>{recipe.description}</p>
        <button onClick={() => setSelectedRecipeId(recipe.id)}>
          See Details
        </button>
      </div>
    </article>
  );
}

export default RecipeCard;
