// Import required modules
const express = require('express'); // Framework for building APIs
const mongoose = require('mongoose'); // ODM library to interact with MongoDB
const cors = require('cors'); // Middleware to handle Cross-Origin Resource Sharing
require('dotenv').config(); // Loads environment variables from a .env file

// Initialize Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse JSON bodies from incoming requests

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB')) // Log success
    .catch(err => console.error(err)); // Log errors if connection fails

// Route handlers
app.use('/api/recipes', require('./routes/recipeRoutes')); // Use recipeRoutes for endpoints under /api/recipes

// Start the server
const PORT = process.env.PORT || 5001; // Use the PORT environment variable or default to 5001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // Log which port the server is running on