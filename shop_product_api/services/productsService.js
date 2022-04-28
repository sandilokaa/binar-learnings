const productsRepository = require("../repositories/productsRepository");

class ProductsService {

    // Create 

    static async create({shop_id, name, price, stock}){
        // Payload
        
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

        if(!price){
            return {
                status: false,
                status_code: 400,
                message: "Harga wajib diisi",
                data: {
                    registered_user: null,
                },
            };
        }

        if(!stock){
            return {
                status: false,
                status_code: 400,
                message: "Stock wajib diisi",
                data: {
                    registered_user: null,
                },
            };
        }

        const createdProduct = await productsRepository.create({
            shop_id,
            name, 
            price,
            stock,
        });

        return {
            status: true,
            status_code: 201,
            message: "Product created successfully",
            data: {
                created_product: createdProduct,
            },
        };
    }

    // End Create 


    // Update

    static async updateByID({id, shop_id, name, price, stock}){
        const getProduct = await productsRepository.getById({id});

        if(getProduct.shop_id == shop_id){
            const updatedProduct = await productsRepository.updateByID({
                id,
                name,
                price,
                stock
            });

            return {
                status: true,
                status_code: 200,
                message: "Product updated successfully",
                data: {
                    updated_product: updatedProduct,
                },
            };
        } else {
            return {
                status: false,
                status_code: 401,
                message: "Resource Unauthorized",
                data: {
                    updated_product: null,
                },
            };
        }
    }

    // End Update


    // Delete

    static async deleteByID({id, shop_id}){
        const getProduct = await productsRepository.getById({ id });

        if (getProduct.shop_id == shop_id){
            const deletedProduct = await productsRepository.deleteByID({
                id,
            });

            return {
                status: true,
                status_code: 200,
                message: "Product deleted successfully",
                data: {
                    deleted_product: deletedProduct,
                },
            };
        } else {
            return {
                status: false,
                status_code: 401,
                message: "Resource Unauthorized",
                data: {
                    deleted_product: null,
                },
            };
        }
    }    

    // End Delete
}

module.exports = ProductsService;