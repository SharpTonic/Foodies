const express = require('express'); // Import Express
const Recipe = require('../models/Recipe'); // Import the Recipe model
const router = express.Router(); // Create a router instance

// GET: Fetch all recipes
router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.find(); // Query the database for all recipes
        res.json(recipes); // Return the recipes as a JSON response
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch recipes' }); // Handle errors
    }
});

// Export the router for use in server.js
module.exports = router;