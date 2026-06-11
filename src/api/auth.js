const API = "https://fsa-jwt-practice.herokuapp.com";

export async function signup(credentials) {
  try {
    const response = await fetch(`${API}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    console.log("response", response);
    const result = await response.json();
    console.log("result does this work---> ", result);
    return result.token;
  } catch (error) {
    console.error("There was an error /signup", error);
  }
}

export async function authenticate(token) {
  try {
    const response = await fetch(`${API}/authenticate`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("There was an error /authenticate", error);
  }
}
