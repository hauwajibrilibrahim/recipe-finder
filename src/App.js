import React, { useState } from 'react';
import axios from 'axios';
import Recipe from './recipe';
import './style.css';


const App = () => {
  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');

  const APP_ID = '32d07358';   // Edamam APP_ID
  const APP_KEY = '5115a766a3d9c772afe2ede01cbba73e'; // Edamam APP_KEY

  const getRecipes = async () => {
    const response = await axios.get(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(response.data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    getRecipes();
    setSearch('');
  };

  return (
    <div className="App">
      <h1>Recipe Finder</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Search for a recipe..."
        />
        <button type="submit">Search</button>
      </form>

      <div className="recipes">
        {recipes.map((recipe, index) => (
          <Recipe
            key={index}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            healthLabels={recipe.recipe.healthLabels}
            dietLabels={recipe.recipe.dietLabels}
            calories={recipe.recipe.calories}
            totalTime={recipe.recipe.totalTime}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
