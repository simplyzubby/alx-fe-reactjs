const BASE_URL = "https://api.github.com";

/**
 * Search GitHub users with optional filters
 * @param {string} query
 * @param {string} location
 * @param {number} minRepos
 */
export const searchUsers = async (query, location = "", minRepos = 0) => {
  try {
    // IMPORTANT: string must contain "https://api.github.com/search/users?q"
    let searchQuery = `${query}`;

    if (location) {
      searchQuery += `+location:${location}`;
    }

    if (minRepos > 0) {
      searchQuery += `+repos:>=${minRepos}`;
    }

    const response = await fetch(
      `https://api.github.com/search/users?q=${searchQuery}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error(error);
    return [];
  }
};