import { useState } from "react";
import { createRecipe } from "../api/recipes";

function RecipeForm({ setRecipes }) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(event) {
    // prevent default behavior
    event.preventDefault();
    if (!name.trim() || !imageUrl.trim() || !description.trim()) {
      return;
    }

    const newRecipeObject = {
      name: name,
      imageUrl: imageUrl,
      description: description,
    };
    const createdRecipe = await createRecipe(newRecipeObject);
    console.log("createRecipe", createdRecipe);

    setRecipes((prevRecipes) => [createdRecipe, ...prevRecipes]);

    // clears form
    setName("");
    setImageUrl("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit} className="recipe-form">
      <h2>Add Recipe</h2>

      <label htmlFor="recipe-name">Recipe Name: </label>
      <input
        id="recipe-name"
        type="text"
        placeholder="Recipe Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label htmlFor="recipe-image">Image URL:</label>
      <input
        id="recipe-image"
        type="url"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(event) => setImageUrl(event.target.value)}
      />

      <label htmlFor="recipe-description">Description:</label>
      <textarea
        id="recipe-description"
        placeholder="Describe the recipe"
        rows={4}
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button type="submit">Create Recipe</button>
    </form>
  );
}

export default RecipeForm;
