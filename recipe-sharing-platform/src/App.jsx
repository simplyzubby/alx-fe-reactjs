import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <h1 className="text-red-500 text-4xl font-bold">
        TAILWIND CONFIRMED
         return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
    <AddRecipeForm />
        )
      </h1>
    </div>
  );
}

export default App;
