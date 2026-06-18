import { useState, useEffect } from "react";
import "./App.css";
import { getRecipes } from "./api/recipes";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import AuthPanel from "./components/AuthPanel";
import RecipeForm from "./components/RecipeForm";
import HomePage from "./components/HomePage";
import Layout from "./components/Layout";
import NotFoundPage from "./components/NotFoundPage";

import { Route, Routes } from "react-router";

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
    <>
      {/* <AuthPanel /> */}
      {/* <RecipeForm setRecipes={setRecipes} /> */}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/recipes"
            element={<RecipeList recipes={recipes} setRecipes={setRecipes} />}
          />

          <Route
            path="/recipes/:recipeId"
            element={<RecipeDetails recipes={recipes} />}
          />
          <Route path="/login" element={<AuthPanel />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

//  <section className="recipe-layout">
//    {selectedRecipeId ? (
//      <RecipeDetails
//        selectedRecipeId={selectedRecipeId}
//        setSelectedRecipeId={setSelectedRecipeId}
//        setRecipes={setRecipes}
//      />
//    ) : (
//      <RecipeList
//        recipes={recipes}
//        setSelectedRecipeId={setSelectedRecipeId}
//        setRecipes={setRecipes}
//      />
//    )}
//  </section>;
