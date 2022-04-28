const {users} = require("../models");

class UsersRepository {
    static async getByEmail({email}) {
        const getUser = await users.findOne({
            where: {email: email}
        });

        return getUser;
    }

    static async create({name, email, password}){
        const createdUser = users.create({
            name,
            email,
            password,
        });

        return createdUser;
    }
}

module.exports = UsersRepository;