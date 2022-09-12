const db = require("../models")
const User = db.user;
const Post = db.post;

exports.createPost = (req, res) => {
    const post = new Post({
        post: req.body.post,
        userId: req.body.userId
    })
    if (!req.body.post) {
        res.status(400).send({ message: `content cannot be empty!` })
    }
    post.save()
        .then((data) => {
            res.send(data);
            res.status(201).send({ message: `post created successfully!` })
        })
        .catch((err) => {
            return res.status(404).send({ message: "User Not found." });
        })
}


exports.getAllPosts = async (req, res) => {
    try {
        const data = await Post.find();
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send({ message: `error` })
    }
};



exports.countPosts =  (req, res) => {
    const query = Post.find();
    try {
        query.count(function (err, count) {
            if (err) {
                console.log(err)
            } else {
                res.status(200).send(`count is` + count)
            }
        })
    } catch (error) {
        res.status(400).send({ message: `error` })
    }
}



// exports.countPostsById =  async(req, res) => {
//     const id = req.params.userId;
//     const user= await User.findById({id});
//     console.log(user)
//     // const query = Post.findById(id);
//     // try {
//     //     query.count(function (err, count) {
//     //         if (err) {
//     //             console.log(err)
//     //         } else {
//     //             res.status(200).send(`count is ` + count)
//     //         }
//     //     })
//     // } catch (error) {
//     //     res.status(400).send({ message: `error` })
//     // }
// }