const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    PostId: Number,
    Title: String,
    Body: String
});

module.exports = studentSchema.model('student', postSchema);