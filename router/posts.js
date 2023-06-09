const express = require('express');
const router = express.Router();
const postModel = require('../models/postSchema.js');
const { v4: uuidv4 } = require('uuid');


//functions to handle different requests at the /posts endpoint 
router.get('/', (req, res) => {
    postModel.find({})
    .then((posts) => res.send(posts))
    .catch((err) => console.log(err));
});

router.post('/', (req, res) => {

    const post = new postModel({
        PostId : `${uuidv4()}`,
        Title : `${req.body.Title}`,
        Body : `${req.body.Body}`
    });
    post.save()
    .then(() => {
        res.send(`post added with the title ${req.body.Title} to the database`);
        console.log(`post added with the title ${req.body.Title} to the database`);
    })
    .catch((err) => {
        console.log(err);
    })
  
});

router.delete('/' , (req, res) => {

    res.send('post removed successfully');
    console.log('post removed from the database.');
});

module.exports = router;