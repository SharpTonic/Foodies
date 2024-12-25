const mongoose = require('mongoose'); // Import Mongoose

// Define the Recipe schema
const RecipeSchema = new mongoose.Schema({
    title: { type: String, required: true }, // Recipe title (required)
    ingredients: { type: String, required: true }, // Ingredients list (required)
    instructions: { type: String, required: true }, // Cooking instructions (required)
    user: { type: String, required: true } // Associated user (required)
});

// Export the Recipe model
module.exports = mongoose.model('Recipe', RecipeSchema);