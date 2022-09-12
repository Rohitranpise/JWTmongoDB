const db = require("../models")
const Like = db.like
const Post = db.post
const User = db.user

exports.createLike = (req, res) => {
    const like = new Like({
        postId: req.body.postId,
        userId: req.body.userId
    })
    if(!req.body.postId || !req.body.userId){
        res.status(400).send({message: `content cannot be empty!`})
    }
    like.save()
    .then((data)=>[
        res.status(201).send(data)
    ])
    .catch((err)=>{
        res.status(400).send({message: `error`})
    })
}