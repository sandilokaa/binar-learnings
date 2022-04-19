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

}

module.exports = UsersService;