const app = require('express');
const router = app.Router();


router.get('/', (req, res) => {
    res.send('Welcome to my rest API!');
});

//functions to handle different requests at the /posts endpoint 
router.get('/posts', (req, res) => {
    res.json(posts);
});

router.post('/posts', (req, res) => {
    const post = { id:id, title:req.body.title };
    id++;
    posts.push(post);
    res.send('Post added successfully');
    console.log('Post added to the database.');
});

router.delete('/posts' , (req, res) => {
    posts.pop();
    id--;
    res.send('post removed successfully');
    console.log('post removed from the database.');
});

module.exports = router;