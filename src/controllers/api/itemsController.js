// ******** Sequelize ***********

const { Item, Product, Brand, Category } = require('../../database/models');

module.exports = {

    async list(req,res){

        let items = await Item.findAll({
            attributes: ['id', 'salePrice', 'quantity','subTotal','state','userId','sellerId','productId','updatedAt','createdAt']
        })

            .then(function(items){

                let respuesta = {
                    
                    "meta": {
                        "status": 201,
                        "message": "Products in database"
                    },
                    "data": {
                        items
                    }

                };

                res.json(respuesta)
            })
            
    },

    store(req,res){

        Product.findByPk(req.params.id)
            .then(product => res.json('products/detail', { product }))
            .catch(e => console.log(e));

    }
}
