import AddRecipeForm from './AddRecipeForm';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h1>Recipes</h1>

      <AddRecipeForm />

      {recipes.length === 0 && <p>No recipes yet</p>}


      {recipes.map((recipe) => (
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