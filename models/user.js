let users = [];
let currentId = 1;

const findUserById = (id) => users.find(user => user.id === id);

const createUser = ({ name, email }) => {
    if (!name || !email) throw new Error('Name and email are required');
    const newUser = { id: currentId++, name, email };
    users.push(newUser);
    return newUser;
};

const getUserById = (id) => {
    const user = findUserById(id);
    if (!user) throw new Error('User not found');
    return user;
};

const updateUser = (id, updates) => {
    const user = findUserById(id);
    if (!user) throw new Error('User not found');
    Object.assign(user, updates);
    return user;
};

const deleteUser = (id) => {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) throw new Error('User not found');
    users.splice(userIndex, 1);
};

module.exports = {
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    findUserById
};