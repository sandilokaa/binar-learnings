const e = require("express");
const jwt = require("jsonwebtoken");
const { JWT } = require("../lib/const");
const shopsRepository = require("../repositories/shopsRepository");

const authenticate = async (req, res, next) => {
    const authHeader = req.get("Authorization");

    let token = "";

    if (authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1];
    }else {
        return res.status(401).send({
            status: false,
            message: "Anda harus login untuk mengakses resource ini.",
            data: null,
        });
    }

    try {
        const { email } = jwt.verify(token, JWT.SECRET);

        const getUser = await shopsRepository.getByEmail({ email });

        req.user = getUser;
        
        next();
    } catch (err) {
        return res.status(401).send({
            status: false,
            message: "Sesi ini telah kadaluarsa. Silahkan login kembali",
            data: null,
        });
    }
};

module.exports = { authenticate };