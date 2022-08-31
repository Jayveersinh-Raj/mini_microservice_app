const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json());

const commentsbyId = {};

app.get('/post/:id/comments', (req, res) => {
    res.send(commentsbyId[req.params.id] || [])
});

app.post('/post/:id/comments', (req, res) => {
    const commentId =  randomBytes(4).toString('hex')
    const { content } = req.body;
    const comments = commentsbyId[req.params.id] || [];
    comments.push({id: commentId, content})
    res.status(201).send(comments)
});

app.listen(4001, () => {
    console.log("listening on 4001");
})