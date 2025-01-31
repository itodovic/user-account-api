let posts = [];
let currentId = 1;

const findPostById = (id) => posts.find(post => post.id === id);

const createPost = ({ userId, title, content }) => {
    if (!title || !content) throw new Error('Title and content are required');
    const newPost = { id: currentId++, userId, title, content };
    posts.push(newPost);
    return newPost;
};

const getPostById = (id) => {
    const post = findPostById(id);
    if (!post) throw new Error('Post not found');
    return post;
};

const updatePost = (id, updates) => {
    const post = findPostById(id);
    if (!post) throw new Error('Post not found');
    Object.assign(post, updates);
    return post;
};

const deletePost = (id) => {
    const postIndex = posts.findIndex(post => post.id === id);
    if (postIndex === -1) throw new Error('Post not found');
    posts.splice(postIndex, 1);
};

const getAllPosts = () => posts;

module.exports = {
    createPost,
    getPostById,
    updatePost,
    deletePost,
    getAllPosts,
    findPostById
};