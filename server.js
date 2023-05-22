const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/postsdb');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
    console.log('Connected to database successfully');
});

//parse requests to json 
app.use(express.json());

//sample in-memory database
const posts = [
    { id: 1, title: 'Post 1'},
    { id: 2, title: 'Post 2'},
    { id: 3, title: 'Post 3'}
];
let id=4;


app.get('/', (req, res) => {
    res.send('Hello World!');
});

//functions to handle different requests at the /posts endpoint
app.get('/posts', (req, res) => {
    res.json(posts);
});

app.post('/posts', (req, res) => {
    const post = { id:id, title:req.body.title };
    id++;
    posts.push(post);
    res.send('Post added successfully');
    console.log('Post added to the database.');
});

app.delete('/posts' , (req, res) => {
    posts.pop();
    id--;
    res.send('post removed successfully');
    console.log('post removed from the database.');
});

//start the server
const port = 3000;
app.listen(port, () => {
    console.log(`API server listening on port ${port}`);
});