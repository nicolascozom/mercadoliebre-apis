// ******** Sequelize ***********

// const { Product, Sequelize, Brand, Category } = require('../database/models');
// const Op = Sequelize.Op;

module.exports = {
	index (req, res){

        let respuesta = {
            meta: {
                status: 200,
            },
            data: "hola, soy la data",
          }

		res.json(respuesta)
    }
}
