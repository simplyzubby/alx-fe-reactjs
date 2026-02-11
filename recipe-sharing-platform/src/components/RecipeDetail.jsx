import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import recipesData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipesData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) return <p className="p-6">Recipe not found...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Link
        to="/"
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        ← Back to Home
      </Link>

      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <p className="text-gray-700 mb-6">{recipe.summary}</p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-700">
            {recipe.ingredients?.map((ing, idx) => (
              <li key={idx}>{ing}</li>
            )) || <li>No ingredients listed</li>}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            {recipe.steps?.map((step, idx) => (
              <li key={idx}>{step}</li>
            )) || <li>No instructions provided</li>}
          </ol>
        </section>
      </div>
    </div>
  );
};

export default RecipeDetail;