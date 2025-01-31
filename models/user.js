const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let users = [];
let currentId = 1;

const findUserById = (id) => users.find(user => user.id === id);

const createUser = async ({ name, email, password }) => {
    if (!name || !email || !password) throw new Error('Name, email, and password are required');
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { id: currentId++, name, email, password: hashedPassword };
    users.push(newUser);
    return newUser;
};

const getUserById = (id) => {
    const user = findUserById(id);
    if (!user) throw new Error('User not found');
    return user;
};

const getUserByEmail = (email) => {
    const user = users.find(user => user.email === email);
    if (!user) throw new Error('User not found');
    return user;
};

const updateUser = (id, updates) => {
    const user = findUserById(id);
    if (!user) throw new Error('User not found');
    
    if (updates.password) {
        updates.password = bcrypt.hashSync(updates.password, 10);
    }
    
    Object.assign(user, updates);
    return user;
};

const deleteUser = (id) => {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) throw new Error('User not found');
    users.splice(userIndex, 1);
};

const verifyPassword = async (user, password) => {
    return await bcrypt.compare(password, user.password);
};

const generateAuthToken = (user) => {
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.SECRET_KEY, { expiresIn: '1h' });
    return token;
};

module.exports = {
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    findUserById,
    verifyPassword,
    getUserByEmail,
    generateAuthToken
};