import React, { useEffect, useState } from 'react'; // Import React, useEffect for lifecycle methods, and useState for state management

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]); // Initialize state to store recipes

    // Fetch recipes from the API when the component loads
    useEffect(() => {
        fetch('/api/recipes') // Make a GET request to the backend API
            .then(res => res.json()) // Parse the JSON response
            .then(data => setRecipes(data)) // Update state with fetched recipes
            .catch(err => console.error(err)); // Log errors if any
    }, []); // Empty dependency array ensures this runs only once

    return (
        <div>
            <h1>Recipes</h1>
            {recipes.map(recipe => ( // Map over the recipes array to display each recipe
                <div key={recipe._id}> {/* Use _id as a unique key */}
                    <h2>{recipe.title}</h2>
                    <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                    <p><strong>Instructions:</strong> {recipe.instructions}</p>
                </div>
            ))}
        </div>
    );
};

export default RecipeList; // Export the component