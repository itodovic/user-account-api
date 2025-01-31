const userModel = require('../models/user');

exports.createUser = (req, res) => {
    try {
        const newUser = userModel.createUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getUserById = (req, res) => {
    const userId = parseInt(req.params.id, 10);
    try {
        const user = userModel.getUserById(userId);
        res.json(user);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.updateUser = (req, res) => {
    const userId = parseInt(req.params.id, 10);
    try {
        const updatedUser = userModel.updateUser(userId, req.body);
        res.json(updatedUser);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.deleteUser = (req, res) => {
    const userId = parseInt(req.params.id, 10);
    try {
        userModel.deleteUser(userId);
        res.status(204).send();
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};