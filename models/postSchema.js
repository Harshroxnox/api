const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    PostId: String,
    Title: String,
    Body: String
});

module.exports = mongoose.model('post', postSchema);
