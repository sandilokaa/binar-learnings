const shopsService = require("../services/shopsService");

const updateByID = async (req, res) => {
    const {id} = req.params;
    const {email, name, phone_number, password} = req.body;

    const {status, status_code, message, data} = await shopsService.updateByID({
        id,
        email,
        name,
        phone_number,
        password,
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
}

const getProductsByID = async (req, res, next) => {

    const {id} = req.params;
    
    const {status, status_code, message, data} = await shopsService.getProductsByID({
        id,
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
}

module.exports = {updateByID, getProductsByID};