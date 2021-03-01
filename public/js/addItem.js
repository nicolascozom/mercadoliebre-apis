window.onload = function () {
    
    let form = document.getElementById("addToCart");
    let quantity = document.getElementById("quantity")
    let productId = document.getElementById("productId");

    //let button = document.getElementById("submitButton");

    console.log("Antes del addEventListener")

    form.addEventListener("submit",function(e){

        axios.post('http://localhost:3000/api/items',{

            data: {
                id:91,
                salePrice:1000,
                quantity:1,
                subTotal:2500,
                state:0,
                productId:18,
                userId:10,
                sellerID:10,
                //cartId
                updatedAt:"2020-06-18T04:08:40.000Z",
                createdAt:"2020-06-18T04:08:21.000Z"

            }
        })
        .then(function(res){
            console.log(res)
        })
        .catch(e => console.log(e));
    })
}


//capturo el formulario addToCart
//capturo sus datos
//iniciar pedido de Axios por POST al endpoint api/items
//si nos llega un status 201, redigirir a vista del carrito ??? exportando el método que busca esto y pidiendolo desde las rutas