window.onload = function () {
    
    let form = document.getElementById("addToCart");
    let quantity = document.getElementById("quantity")
    let productId = document.getElementById("productId");
    let salePrice = document.getElementById("salePrice");
    let subTotal = document.getElementById("subTotal")

    //let button = document.getElementById("submitButton");

    form.addEventListener("submit",function(e){

        e.preventDefault();

        axios.post('http://localhost:3000/api/items',{

            productId: productId.value, 
            quantity: quantity.value,
            salePrice: salePrice.value,
            subTotal: subTotal.value            

        })

        .then(function(res){
            if (res.data.meta.status == 201){
                console.log(res.data.meta.status)
                window.location.href = "http://localhost:3000/users/cart"
            }else{
                console.log(res)
            }
        })
        
        .catch(e => console.log(e));
    })
}


//capturo el formulario addToCart
//capturo sus datos
//iniciar pedido de Axios por POST al endpoint api/items
//si nos llega un status 201, redigirir a vista del carrito
