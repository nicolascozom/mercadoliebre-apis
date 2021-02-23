// ******** Sequelize ***********

// const { Product, Sequelize, Brand, Category } = require('../database/models');
// const Op = Sequelize.Op;

module.exports = {
	index (req, res){

        let respuesta = {
                "meta": {
                    "status": 201,
                    "message": "Product added to cart"
                },
                "data": {
                    "item": {
                        "id": 126,
                        "salePrice": 4968,
                        "quantity": "1",
                        "subTotal": 4968,
                        "state": 1,
                        "userId": 102,
                        "sellerId": 101,
                        "productId": 221,
                        "updatedAt": "2020-10-01T19:36:24.590Z",
                        "createdAt": "2020-10-01T19:36:24.590Z"
                    }
                }
        }

		res.json(respuesta)
    }
}
