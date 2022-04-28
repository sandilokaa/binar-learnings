const productsService = require("../services/productsService");

const create = async (req, res, next) => {
    const {name, price, stock} = req.body;

    const shop_id = req.user.id;

    const { status, status_code, message, data } = await productsService.create({
        shop_id,
        name, 
        price,
        stock,
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

const updateByID = async (req, res, next) => {
    const {id} = req.params;
    const {name, price, stock} = req.body;

    const shop_id = req.user.id;

    const { status, status_code, message, data } = await productsService.updateByID({
        id,
        shop_id,
        name, 
        price,
        stock,
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
}

const deleteByID = async (req, res, next) => {
    const { id } = req.params;
    
    const shop_id = req.user.id;

    const { status, status_code, message, data } = await productsService.deleteByID({
        id,
        shop_id,
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

module.exports = {create, updateByID, deleteByID};