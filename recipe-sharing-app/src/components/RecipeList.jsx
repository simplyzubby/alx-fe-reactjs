import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import AddRecipeForm from './AddRecipeForm';
import SearchBar from './SearchBar';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(
    (state) => state.filteredRecipes
  );

  return (
    <div>
      <h1>Recipe Sharing App</h1>

      <SearchBar />
      <AddRecipeForm />

      {filteredRecipes.length === 0 && <p>No recipes found</p>}

      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`}>
            {recipe.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;