const BASE_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";
const COHORT = "2306-FTB-CT-WEB-PT";
const API_URL = `${BASE_URL}/${COHORT}/recipes`;

export async function getRecipes() {
  try {
    const response = await fetch(API_URL);
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("There was an error fetching recipes /GET", error);
  }
}

export async function getSingleRecipe(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("There was an error /GET single recipe", error);
  }
}

export async function createRecipe(newRecipeObj) {
  try {
    const response = await fetch(`${API_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRecipeObj),
    });
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("There was an error /POST", error);
  }
}

export async function deleteRecipe(id) {
  try {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error("There was an error /DELETE", error);
  }
}

export async function updateRecipe(id, updateRecipeObj) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateRecipeObj),
    });
    const result = await response.json();
    console.log("updated recipe", result.data);
    return result.data;
  } catch (error) {
    console.error("There was an error /PUT", error);
  }
}
