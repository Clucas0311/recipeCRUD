import { useState, useEffect } from "react";
import "./App.css";
import { getRecipes } from "./api/recipes";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import AuthPanel from "./components/AuthPanel";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  useEffect(() => {
    async function loadAllRecipes() {
      const recipeData = await getRecipes();
      setRecipes(recipeData);
    }
    loadAllRecipes();
  }, []);

  console.log("selectedId", selectedRecipeId);
  return (
    <main className="app">
      <header className="page-header">
        <p className="eyebrow">Recipe Explorer</p>
        <h1>Find Your Next Meal</h1>
        <p>Browse our collection Recipes</p>
      </header>
      <AuthPanel />
      {selectedRecipeId ? (
        <RecipeDetails
          selectedRecipeId={selectedRecipeId}
          setSelectedRecipeId={setSelectedRecipeId}
        />
      ) : (
        <RecipeList
          recipes={recipes}
          setSelectedRecipeId={setSelectedRecipeId}
        />
      )}
    </main>
  );
}

export default App;
