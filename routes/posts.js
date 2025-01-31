const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const { authenticateToken } = require('../middleware/authMiddleware');

// User creates a post
router.post('/:userId/posts', authenticateToken, postController.createPost);

// User deletes a post
router.delete('/:postId', authenticateToken, postController.deletePost);

// User updates a post
router.put('/:postId', authenticateToken, postController.updatePost);

// User gets all posts
router.get('/', postController.getAllPosts);

// User gets a post
router.get('/:postId', postController.getPostById);

module.exports = router;