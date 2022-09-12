const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    post: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

const Post = mongoose.model("Post", postSchema);
module.exports = Post;