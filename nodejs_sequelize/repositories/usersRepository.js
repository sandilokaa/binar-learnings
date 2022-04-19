const {users} = require("../models");

class UsersRepository{
    static async getAll(){
        const getUsers = users.findAll(); 
        return getUsers;
    }

    static async create({name, email}){
        const createdUser = users.create({
            name,
            email
        });

        return createdUser;
    }

    static async getById({id}){
        const getUsersById = users.findOne({
            where: {id}
        });

        return getUsersById;
    }
}

module.exports = UsersRepository;