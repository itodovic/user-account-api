const userModel = require('../models/user');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.getUserByEmail(email);
        
        const isMatch = await userModel.verifyPassword(user, password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const token = userModel.generateAuthToken(user);
        res.json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};