window.onload = function () {
    
    let form = document.getElementById("addToCart");

    let button = document.getElementById("submitButton");

    console.log("Antes del addEventListener")

    form.addEventListener("submit",function(){
        axios.post('localhost:3000/api/items',{
            data: {


            }
        })
        .then(function(res){
            console.log(res + "BBBBBBB")
        })
        .catch(e => console.log(e));
    })
}


//capturo el formulario addToCart
//capturo sus datos
//iniciar pedido de Axios por POST al endpoint api/items
//si nos llega un status 201, redigirir a vista del carrito ??? exportando el método que busca esto y pidiendolo desde las rutas