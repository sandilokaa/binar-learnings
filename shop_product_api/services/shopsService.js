const shopsRepository = require("../repositories/shopsRepository");
const bcrypt = require("bcrypt");

const SALT_ROUND = 10;

class ShopsService {
    static async updateByID({id, shop_id, email, name, phone_number, password}){
        
        if(shop_id != id){
            return {
                status: true,
                status_code: 200,
                message: "Akses ditolak",
                data: {
                    update_shops: null
                }
            };
        }
        
        const hashedPassword = await bcrypt.hash(password, SALT_ROUND);
        const updatedUser = await shopsRepository.updateByID({
            id,
            email,
            name,
            phone_number,
            password: hashedPassword,
        });

        return {
            status: true,
            status_code: 200,
            message: "User updated successfully",
            data: {
                updated_user: updatedUser
            }
        };
    }

    static async getProductsByID({ id }){
        const getProducts = await shopsRepository.getProductsByID({ id });

        return {
            status: true,
            status_code: 200,
            message: "Success",
            data: {
                products: getProducts
            }
        };
    }
}

module.exports = ShopsService;