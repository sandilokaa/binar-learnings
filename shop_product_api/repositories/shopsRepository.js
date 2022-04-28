const {shops, products} = require("../models");

class ShopsRepository {

    static async getById({id}){
        const getUser = await shops.findOne({
            where: {id}
        });

        return getUser;
    }

    static async getByEmail({email}) {
        const getUser = await shops.findOne({
            where: {email: email}
        });

        return getUser;
    }

    static async create({email, name, phone_number, password}){
        const createdUser = shops.create({
            email,
            name,
            phone_number,
            password,
        });

        return createdUser;
    }

    static async updateByID({id, email, name, phone_number, password}){
        const updatedShop = shops.update({
            email,
            name,
            phone_number,
            password,
        }, 
        {
            where: { id }
        });

        return updatedShop;
    }

    static async getProductsByID({ id }){
        const getProducts = await products.findAll({
            where: {shop_id: id}
        });
        
        return getProducts;
    }
}

module.exports = ShopsRepository;