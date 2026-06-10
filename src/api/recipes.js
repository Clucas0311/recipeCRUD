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
