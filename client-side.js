const axios = require('axios');


function add(post){
    axios.post('http://localhost:3000/posts', post)
    .then(res => console.log(res.data))
    .catch(err => console.log(err.message));
}

function getAll(){
    axios.get('http://localhost:3000/posts')
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err.message);
    });
}

function deletePost(){
    axios.delete('http://localhost:3000/posts')
    .then(res => console.log(res.data))
    .catch(err => console.log(err.message));
}









