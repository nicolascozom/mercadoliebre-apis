// ******** Sequelize ***********

const { Item, Product } = require('../../database/models');

module.exports = {

    async list(req,res){

        let items = await Item.findAll({
            // include: [{association: "users"}], -- NO ES NECESARIO
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
            .catch(e => console.log(e));
            
    },

    find (req,res){

        Item.findByPk(req.params.id)
            .then(item => res.json(item))
            .catch(e => console.log(e));
    },

    store(req,res){      // --- PARA PRUEBAS POR POSTMAN, DEBE VENIR TODO POR REQ.BODY
        
        Product.findByPk(req.body.productId, {
            include: ["user"],
          })
            .then((product) => {
              // Saco el valor del producto, teniendo en cuenta el descuento.
    
              let price =
                Number(product.discount) > 0
                  ? product.price - (product.price * product.discount) / 100
                  : product.price;
    
              // Creo el Item de compra
              return Item.create({
                salePrice: price,
                quantity: req.body.quantity,
                subTotal: price * req.body.quantity,
                state: 1,
                userId: req.session.user.id,
                sellerId: product.user.id,
                productId: product.id,
              });
            })

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
    },

    destroy(req,res){

        Item.destroy({
            where: {
              id: req.body.itemId,
            },
            force: true,
          })
          .then(item => {

            return res.json({
                "meta": {
                    "status": 201,
                    "message": "Product deleted from cart"
                },
                "data": {
                    item
                }
            })
        })
        .catch(e => console.log(e));

    }
}
