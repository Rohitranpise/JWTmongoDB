const postController = require("../controllers/post.controller")

module.exports = function (app) {
    app.post("/api/auth/post",  postController.createPost);

    app.get("/api/auth/post", postController.getAllPosts);

    app.get("/api/auth/post/count", postController.countPosts);

    // app.get("/api/auth/post/count/:id", postController.countPostsById);
}