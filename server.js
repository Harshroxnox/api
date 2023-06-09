const express = require('express');
const app = express();
const mongoose = require('mongoose');


//connect to the mongodb database
mongoose.connect('mongodb://localhost:27017/postsdb');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
    console.log('Connected to database successfully');
});


//parse requests from json string to objects 
app.use(express.json());


//route for my homepage
app.get('/', (req, res) => {
    res.send('Welcome to my rest API!');
});


//handle the posts routes
app.use('/posts' ,require('./router/posts.js'));


//start the server
const port = 3000;
app.listen(port, () => {
    console.log(`API server listening on port ${port}`);
});