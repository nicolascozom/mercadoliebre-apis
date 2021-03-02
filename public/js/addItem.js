window.onload = function () {
    
    let form = document.getElementById("addToCart");
    let quantity = document.getElementById("quantity")
    let productId = document.getElementById("productId");
    let salePrice = document.getElementById("salePrice");

    //let button = document.getElementById("submitButton");

    console.log("Antes del addEventListener")

    form.addEventListener("submit",function(e){

        e.preventDefault();

        axios.post('http://localhost:3000/api/items',{
            productId: productId.value, 
            quantity: quantity.value, 
            userId: 102, 
            salePrice: salePrice.value
            
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