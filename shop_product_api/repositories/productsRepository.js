const {products} = require("../models");

class ProductsRepository {

    static async getById({id}){
        const getProduct = await products.findOne({
            where: {id}
        });

        return getProduct;
    }

    static async create({shop_id, name, price, stock}){
        const createdProduct = products.create({
            shop_id,
            name, 
            price,
            stock,
        });

        return createdProduct;
    }

    static async updateByID({id, name, price, stock}){
        const updatedProduct = products.update({
            name,
            price,
            stock
        }, 
        {
            where: { id }
        });

        return updatedProduct;
    }

    static async deleteByID({ id }){
        const deleteProduct = await products.destroy({
            where: { id }
        });

        return deleteProduct;
    }
}

module.exports = ProductsRepository;