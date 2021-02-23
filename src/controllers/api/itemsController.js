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
                        "message": "Items in database"
                    },
                    "data": {
                        items
                    }

                };

                res.json(respuesta)
            })
            
    },

    find (req,res){

        Item.findByPk(req.params.id)
            .then(item => res.json(item))
            .catch(e => console.log(e));
    },

    store(req,res){      
        

        Item.create({            

            id : req.body.id,
            salePrice : Number(req.body.salePrice),
            quantity : Number(req.body.quantity),
            subTotal : Number(req.body.subTotal),
            state : Number(req.body.state),
            productId : Number(req.body.productId),
            userId : Number(req.body.userId),
            sellerId : Number (req.body.sellerID),
            // cartId : Number (req.body.cartId),
            updatedAt : req.body.updatedAt,
            createdAt : req.body.createdAt,
            
        }
        )

            .then(item => {

                return res.json({
                    "meta": {
                        "status": 201,
                        "message": "Product added to cart"
                    },
                    "data": {
                        item
                    }
                })
            })
            .catch(e => console.log(e));
    }
}
