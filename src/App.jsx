import { useState, useEffect } from "react";
import "./App.css";
import { getRecipes } from "./api/recipes";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
// import AuthPanel from "./components/AuthPanel";
import RecipeForm from "./components/RecipeForm";

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
      {/* <AuthPanel /> */}
      {/* <RecipeForm setRecipes={setRecipes} /> */}
      <section className="recipe-layout">
        {selectedRecipeId ? (
          <RecipeDetails
            selectedRecipeId={selectedRecipeId}
            setSelectedRecipeId={setSelectedRecipeId}
            setRecipes={setRecipes}
          />
        ) : (
          <RecipeList
            recipes={recipes}
            setSelectedRecipeId={setSelectedRecipeId}
            setRecipes={setRecipes}
          />
        )}
      </section>
    </main>
  );
}

export default App;
