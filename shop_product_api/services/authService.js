const shopsRepository = require("../repositories/shopsRepository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT } = require("../lib/const");

const SALT_ROUND = 10;

class AuthService{
    static async register({email, name, phone_number, password}){
        // Payload Validation
        if(!email){
            return {
                status: false,
                status_code: 400,
                message: "Email wajib diisi",
                data: {
                    registered_user: null,
                },
            };
        }

        if(!name){
            return {
                status: false,
                status_code: 400,
                message: "Nama wajib diisi",
                data: {
                    registered_user: null,
                },
            };
        }

        if(!phone_number){
            return {
                status: false,
                status_code: 400,
                message: "Nomor telepon wajib diisi",
                data: {
                    registered_user: null,
                },
            };
        }

        if(!password){
            return {
                status: false,
                status_code: 400,
                message: "Password wajib diisi",
                data: {
                    registered_user: null,
                },
            };
        }else if (password.length < 8){
            return {
                status: false,
                status_code: 400,
                message: "Password minimal 8 karakter",
                data: {
                    registered_user: null,
                },
            };
        }

        const getUserByEmail = await shopsRepository.getByEmail({email});

        if(getUserByEmail){
            return {
                status: false,
                status_code: 400,
                message: "Email sudah digunakan",
                data: {
                    registered_user: null,
                },
            };
        }else {
            const hashedPassword = await bcrypt.hash(password, SALT_ROUND);
            const createdUser = await shopsRepository.create({
                email,
                name,
                phone_number,
                password: hashedPassword,
            });

            return {
                status: true,
                status_code: 201,
                message: "Berhasil mendaftarkan user",
                data: {
                    registered_user: createdUser,
                },
            };
        }
    }

    static async login({email, password}) {
        // Payload Validation

        if(!email){
            return {
                status: false,
                status_code: 400,
                message: "Email wajib diisi",
                data: {
                    registered_user: null,
                },
            };
        }

        if(!password){
            return {
                status: false,
                status_code: 400,
                message: "Password wajib diisi",
                data: {
                    registered_user: null,
                },
            };
        }else if (password.length < 8){
            return {
                status: false,
                status_code: 400,
                message: "Password minimal 8 karakter",
                data: {
                    registered_user: null,
                },
            };
        }

        const getUser = await shopsRepository.getByEmail({email});

        if(!getUser) {
            return {
                status: false,
                status_code: 404,
                message: "Email belum terdaftar",
                data: {
                    user: null,
                },
            };
        }else {
            const isPasswordMatch = await bcrypt.compare(password, getUser.password);

            if(isPasswordMatch){
                const token = jwt.sign(
                    {
                        id: getUser.id,
                        email: getUser.email,
                    },
                    JWT.SECRET, 
                    {
                        expiresIn: JWT.EXPIRED,
                    }
                );

                return {
                    status: true,
                    status_code: 200,
                    message: "User berhasil login",
                    data: {
                        token,
                    },
                };
            }else {
                return {
                    status: false,
                    status_code: 400,
                    message: "Password salah",
                    data: {
                        user: null,
                    },
                };
            }
        }
    }
}

module.exports = AuthService;