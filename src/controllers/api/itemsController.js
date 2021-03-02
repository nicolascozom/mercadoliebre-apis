// ******** Sequelize ***********

const { Item } = require('../../database/models');

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
        

        Item.create({            

            id : req.body.id,
            salePrice : Number(req.body.salePrice),
            quantity : Number(req.body.quantity),
            subTotal : Number(req.body.subTotal),
            state : Number(req.body.state),
            productId : Number(req.body.productId),
            userId : Number(req.session.user.id),
            sellerId: Number(req.session.user.id),
            // cartId : Number (req.body.cartId),
            // updatedAt : Date(req.body.updatedAt),
            // createdAt : Date(req.body.createdAt),
            
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
