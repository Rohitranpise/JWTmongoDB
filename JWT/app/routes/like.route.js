const likeController = require("../controllers/like.Controller")

module.exports = function (app) {
    app.post("/api/auth/like", likeController.createLike)
}