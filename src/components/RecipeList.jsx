import { useState } from "react";
import RecipeCard from "./RecipeCard";

function RecipeList({ recipes, setRecipes }) {
  const [searchTerm, setSearchTerm] = useState("");

  // Derived state: do not create useState for filteredRecipes
  const filteredRecipes = recipes.filter((recipe) => {
    const searchText = searchTerm.toLowerCase();
    return (
      recipe.name.toLowerCase().includes(searchText) ||
      recipe.description.toLowerCase().includes(searchText)
    );
  });

  return (
    <section>
      <div className="recipe-list-heading">
        <div className="eyebrow">
          <p>Browse Recipes</p>
          <h1>Find Your Next Meal</h1>
        </div>

        <label htmlFor="search" className="search-field">
          Search Recipes
          <input
            type="search"
            name="search"
            placeholder="Search by name or description"
            id="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </label>
      </div>

      <p>
        Showing {filteredRecipes.length} of {recipes.length} recipes
      </p>

      {filteredRecipes.length ? (
        <div className="recipe-grid">
          {filteredRecipes.map((recipe) => {
            return (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                setRecipes={setRecipes}
              />
            );
          })}
        </div>
      ) : (
        <p className="status-message"> No recipes match "{searchTerm}"</p>
      )}
    </section>
  );
}

export default RecipeList;
