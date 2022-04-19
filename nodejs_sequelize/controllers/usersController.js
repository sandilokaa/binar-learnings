const userService = require("../services/usersService");

const getAll = async (req, res) => {
    const getUsers = await userService.getAll();

    res.status(200).send(getUsers);
}

const create = async (req, res) => {
    const {name, email} = req.body;

    const createdUser = await userService.create({name, email});

    res.status(201).send({
        message: "successfully created user!",
        created_user: createdUser
    });
}

module.exports = {getAll, create};