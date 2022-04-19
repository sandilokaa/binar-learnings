const postsRepository = require("../repositories/postsRepository");

class PostsService{

    static async getAll(){
        const getAllPosts = await postsRepository.getAll();
        return getAllPosts;
    }

    static async create({
        title, 
        description, 
        user_id
    }){
        const createdPost = await postsRepository.create({
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
        const updatedPostById = await postsRepository.update({
            id, 
            title, 
            description, 
            user_id
        });
        return updatedPostById;
    }

    static async deletePosts({id}){
        const deletedPostById = await postsRepository.deletePost({id});
        return deletedPostById;
    }
}

module.exports = PostsService;