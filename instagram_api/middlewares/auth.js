const jwt = require("jsonwebtoken");
const {
    JWT
} = require("../lib/conts");
const usersRepository = require("../repositories/usersRepository");
const {
    ROLES
} = require("../lib/conts");

const authenticate = async (req, res, next) => {
    const authHeader = req.get("Authorization");

    let token = "";

    if (authHeader && authHeader.startsWith("Bearer"))
        token = authHeader.split(" ")[1];
    else
        return res.status(401).send({
            status: false,
            message: "Anda harus login untuk mengakses resource ini.",
            data: null,
        });

    try {
        const {
            email
        } = jwt.verify(token, JWT.SECRET);

        const getUser = await usersRepository.getByEmail({
            email
        });

        req.user = getUser;

        next();
    } catch (err) {
        return res.status(401).send({
            status: false,
            message: "Sesi telah kadaluarsa. Silakan login kembali",
            data: null,
        });
    }
};

const isAdmin = async (req, res, next) => {
    const user = req.user;

    if (user.role === ROLES.ADMIN) return next();

    return res.status(401).send({
        status: false,
        message: "Akun anda harus admin untuk mengakses resource ini.",
        data: null,
    });
};
module.exports = {
    authenticate,
    isAdmin
};