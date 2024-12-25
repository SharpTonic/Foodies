const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

// Import recipe routes
const recipeRoutes = require('./api/routes/recipeRoutes');

const app = express();

// Middleware
app.use(cors()); // Allow Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON requests


// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Define API routes
app.use('/api/recipes', recipeRoutes); // Routes for all recipe-related actions

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));