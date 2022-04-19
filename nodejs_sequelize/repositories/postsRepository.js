const {posts} = require("../models");

class PostsRepository{
    static async getAll(){
        const getAllPosts = posts.findAll();
        return getAllPosts;
    }

    static async create({
        title, 
        description, 
        user_id
    }){
        const createdPost = posts.create({
            title,
            description,
            user_id
        });

        return createdPost;
    }

    static async update({
        id, 
        title, 
        description, 
        user_id
    }){
        const updatedPostById = posts.update({
            title, 
            description, 
            user_id
        }, {
            where: {id}
        });

        return updatedPostById;
    }

    static async deletePost({id}){
        const deletedPostById = posts.destroy({
            where: {id}
        });

        return deletedPostById;
    }
}

module.exports = PostsRepository;