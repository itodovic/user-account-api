const postModel = require('../models/post');
const userModel = require('../models/user');

exports.createPost = (req, res) => {
    const userId = parseInt(req.params.userId, 10);
    try {
        userModel.findUserById(userId); // Ensure user exists
        const newPost = postModel.createPost({ userId, ...req.body });
        res.status(201).json(newPost);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getPostById = (req, res) => {
    const postId = parseInt(req.params.postId, 10);
    try {
        const post = postModel.getPostById(postId);
        res.json(post);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.updatePost = (req, res) => {
    const postId = parseInt(req.params.postId, 10);
    try {
        const updatedPost = postModel.updatePost(postId, req.body);
        res.json(updatedPost);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.deletePost = (req, res) => {
    const postId = parseInt(req.params.postId, 10);
    try {
        postModel.deletePost(postId);
        res.status(204).send();
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.getAllPosts = (req, res) => {
    try {
        const allPosts = postModel.getAllPosts();
        res.json(allPosts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};