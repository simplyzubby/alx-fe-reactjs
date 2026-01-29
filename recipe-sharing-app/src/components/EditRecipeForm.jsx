import { useState } from 'react';
import useRecipeStore from '../store/useRecipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState(recipe.title);
  const [ingredients, setIngredients] = useState(recipe.ingredients);

  const handleSubmit = (e) => {
    e.preventDefault();

    updateRecipe({
      ...recipe,
      title,
      ingredients,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />
      <textarea
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />
      <button className="bg-green-500 text-white p-2 rounded w-full">
        Save Changes
      </button>
    </form>
  );
};

export default EditRecipeForm;