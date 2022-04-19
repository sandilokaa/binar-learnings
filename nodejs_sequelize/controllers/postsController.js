const postsService = require("../services/postsService");

const getAll = async (req, res) => {
    const getAllPosts = await postsService.getAll();

    res.status(200).send(getAllPosts);
}

const create = async (req, res) => {
    const {title, description, user_id} = req.body;

    const createdPost = await postsService.create({title, description, user_id});

    res.status(201).send({
        message: "successfully created post!",
        created_post: createdPost
    });
}

const update = async (req, res) => {
    const{id} = req.params;
    const {title, description, user_id} = req.body;

    const updatedPostById = await postsService.update({id, title, description, user_id});

    res.status(201).send({
        message: "successfully updated post!",
        updatedPost_ById: updatedPostById
    });
}

const deletePosts = async (req, res) => {
    const {id} = req.params;

    const deletedPostById = await postsService.deletePosts({id});
    res.status(200).send({
        message: "Post deleted successfully!",
        deletedPost_ById: deletedPostById
    });
}

module.exports = {getAll, create, update, deletePosts};