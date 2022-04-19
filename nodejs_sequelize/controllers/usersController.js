const userService = require("../services/usersService");

const getAll = async (req, res) => {
    const getUsers = await userService.getAll();

    res.status(200).send(getUsers);
}

const create = async (req, res) => {
    const {name, email} = req.body;

    const createdUser = await userService.create({
        name, 
        email
    });

    res.status(201).send({
        message: "successfully created user!",
        created_user: createdUser
    });
}

const getById = async (req, res) => {
    const {id} = req.params;

    const getUsersById = await userService.getById({id});

    res.status(200).send(getUsersById);
}

const update = async (req, res) => {
    const {id} = req.params;
    const {name, email} = req.body;

    const updatedById = await userService.update({
        id, 
        name, 
        email
    });

    res.status(201).send({
        message: "successfully updated user!",
        updated_ById: updatedById
    });
}

const deleteUsers = async (req, res) => {
    const {id} = req.params;

    const deleteUsersById = await userService.deleteUsers({id});

    res.status(200).send(deleteUsersById);
}

module.exports = {getAll, create, getById, update, deleteUsers};