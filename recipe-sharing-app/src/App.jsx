import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';

const App = () => {
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Recipe Sharing App</h1>

      {/* Add Recipe Form */}
      <RecipeForm />

      {/* Recipe List */}
      <RecipeList />
    </div>
  );
};

export default App;