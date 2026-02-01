const BASE_URL = "https://api.github.com";

// Function to search GitHub users
export const searchUsers = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/search/users?q=${query}`);
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const data = await response.json();
    return data.items; // GitHub returns items array with users
  } catch (error) {
    console.error(error);
    return [];
  }
};