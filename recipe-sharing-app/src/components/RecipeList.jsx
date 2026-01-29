import AddRecipeForm from './AddRecipeForm';
import SearchBar from './SearchBar';
import FavoritesList from './FavoritesList';
import RecommendationsList from './RecommendationsList';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      <h1>Recipe Sharing App</h1>

      {/* Search and Add */}
      <SearchBar />
      <AddRecipeForm />

      {/* Favorites and Recommendations */}
      <FavoritesList />
      <RecommendationsList />

      {/* All Recipes */}
      <h2>All Recipes</h2>
      {filteredRecipes.length === 0 && <p>No recipes yet</p>}
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;