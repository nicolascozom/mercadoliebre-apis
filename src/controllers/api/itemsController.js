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

    find(req,res){

        Item.findByPk(req.params.id)
            .then(item => res.json(item))
            .catch(e => console.log(e));
    },

    store(req,res){
		
        const _body = req.body;
        _body.id = Number(req.body.id);
        _body.salePrice = Number(req.body.salePrice);
        _body.quantity = Number(req.body.quantity);
        _body.subTotal = Number(req.body.subTotal);
        _body.state = Number(req.body.state);
        _body.productId = Number(req.body.productId);
        _body.userId = Number(req.body.userId);
        _body.sellerId = Number(req.body.sellerId);
        _body.cartId = Number(req.body.cartId);
        _body.createdAt = req.body.createdAt;
        _body.updatedAt = req.body.updatedAt;

        Item.create(_body)
            .then(item => {

                return res.json(item)
            })
            .catch(e => console.log(e));
		
    }
}
