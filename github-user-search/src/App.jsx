
import { useState } from "react";
import SearchUser from "./components/SearchUser";
import UserCard from "./components/UserCard";
import { fetchUser } from "./services/githubApi";
import Search from "./components/Search";

function App() {
  console.log(import.meta.env.VITE_APP_GITHUB_API_KEY);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (username) => {
    try {
      setError("");
      const data = await fetchUser(username);
      setUser(data);
    } catch (err) {
      setUser(null);
      setError("User not found");
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <SearchUser onSearch={handleSearch} />
      {error && <p>{error}</p>}
      <UserCard user={user} />
      <Search />
    </div>
  );
}

export default App;

