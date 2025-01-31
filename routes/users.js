const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Create a user
router.post('/', userController.createUser);

// Delete a user
router.delete('/:id', userController.deleteUser);

// Update a user
router.put('/:id', userController.updateUser);

// Get a single user
router.get('/:id', userController.getUserById);

module.exports = router;