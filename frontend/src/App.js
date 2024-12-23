// Import required components
import React from 'react'; // Core library for building React applications
import RecipeList from './components/RecipeList'; // Import the RecipeList component

// Define the main App component
const App = () => {
    return (
        <div>
            {/* Application Header */}
            <header>
                <h1>Welcome to the Recipe App</h1> {/* Main title */}
                <p>Discover, create, and share delicious recipes!</p> {/* Subtext */}
            </header>

            {/* Render the RecipeList component */}
            <main>
                <RecipeList />
            </main>
        </div>
    );
};

// Export the App component for rendering
export default App;