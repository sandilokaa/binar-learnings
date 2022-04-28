const authService = require("../services/authService");

const register = async (req, res) => {
    const {email, name, phone_number, password} = req.body;

    const {status, status_code, message, data} = await authService.register({
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
};

const login = async (req, res) => {
    const {email, password} = req.body;

    const {status, status_code, message, data} = await authService.login({
        email,
        password,
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
    
}

module.exports = {register, login};