const {users} = require("../models");

class UsersRepository{
    static async getAll(){
        const getUsers = users.findAll(); 
        return getUsers;
    }

    static async create({
        name, 
        email
    }){
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

    static async update({
        id, 
        name, 
        email
    }){
        const updatedById = users.update({
            name,
            email
        }, {
            where: {id}
        });
        return updatedById;
    }

    static async deleteUsers({id}){
        const deleteUsersById = users.destroy({
            where: {id}
        });
    }
}

module.exports = UsersRepository;