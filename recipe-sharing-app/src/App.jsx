import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

const App = () => {
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Recipe Sharing App</h1>

      {/* Add Recipe Form */}
      <AddRecipeForm />

      {/* Recipe List */}
      <RecipeList />
    </div>
  );
};

export default App;