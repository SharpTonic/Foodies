const Recipe = require('../models/Recipe'); // Import the Recipe model

// Controller function to fetch all recipes
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find(); // Query the database for all recipes
    res.status(200).json(recipes); // Return the recipes as a JSON response
  } catch (err) {
    console.error('Error fetching recipes:', err); // Log the error for debugging
    res.status(500).json({ error: 'Failed to fetch recipes' }); // Respond with a 500 error
  }
};

// Controller function to create a new recipe
exports.createRecipe = async (req, res) => {
    try {
      // Include the `user` field in the request body destructuring
      const { title, ingredients, instructions, user } = req.body;
  
      // Create a new Recipe instance, including the `user` field
      const newRecipe = new Recipe({ title, ingredients, instructions, user });
  
      // Save the recipe to the database
      const savedRecipe = await newRecipe.save();
  
      // Respond with the saved recipe
      res.status(201).json(savedRecipe);
    } catch (err) {
      console.error('Error creating recipe:', err); // Log the error for debugging
      res.status(400).json({ error: 'Failed to create recipe' }); // Respond with a 400 error
    }
  };