import React from 'react';
import RecipeList from './components/RecipeList'; // Ensure the import matches the export in RecipeList.js

const App = () => {
    return (
        <div>
            <h1>Recipe App</h1>
            <RecipeList /> {/* Render the RecipeList component */}
        </div>
    );
};

export default App;