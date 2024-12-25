const express = require('express'); // Import Express
const { getAllRecipes, createRecipe } = require('../controllers/recipeController'); // Import controller methods

const router = express.Router(); // Create a router instance

// Route to fetch all recipes
router.get('/', getAllRecipes);

// Route to create a new recipe (optional, if you want to handle POST requests)
router.post('/', createRecipe);

module.exports = router; // Export the router for use in server.js