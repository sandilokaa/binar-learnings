const userRepository = require("../repositories/usersRepository");

class UsersService{

    static async getAll(){
        // call repository user
        const getUsers = await userRepository.getAll();

        return getUsers;
    }

    static async create({name, email}){
        // call repository user
        const createdUser = await userRepository.create({
            name, 
            email
        });

        return createdUser;
    }

    static async getById({id}){
        // call repository user
        const getUsersById = await userRepository.getById({id});
        return getUsersById;
    }

    static async update({id, name, email}){
        // call repository user
        const updatedById = await userRepository.update({id, name, email});
        return updatedById;
    }

    static async deleteUsers({id}){
        // call repository user
        const deleteUsersById = await userRepository.deleteUsers({id});
        return deleteUsersById;
    }

}

module.exports = UsersService;