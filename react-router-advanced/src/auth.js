// Simple fake auth
const isAuthenticated = () => {
  return localStorage.getItem("auth") === "true";
};

export default isAuthenticated;