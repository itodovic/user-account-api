require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001; // Use PORT from .env or default to 3000

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Import routes
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');

// Use routes
app.use('/users', userRoutes);
app.use('/posts', postRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// console.log('Environment Variables:', process.env);

// // Check specific variables
// if (!process.env.SECRET_KEY) {
//     console.error('SECRET_KEY is not defined');
//     process.exit(1);
// }