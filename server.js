const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/postsdb');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
    console.log('Connected to database successfully');
});

//parse requests from json string to objects 
app.use(express.json());

//handle the routes
app.use(require('./routes.js'));

//start the server
const port = 3000;
app.listen(port, () => {
    console.log(`API server listening on port ${port}`);
});