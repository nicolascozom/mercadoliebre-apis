window.onload = function () {
    
    let form = document.getElementById("removeFromCart");
    let itemId = document.getElementById("itemId");

    //let button = document.getElementById("submitButton");

    form.addEventListener("submit",function(e){

        e.preventDefault()

        axios.delete('http://localhost:3000/api/items',{

            data:{
                itemId: itemId.value
            }
            
        })
        .then(function(res){
            if (res.data.meta.status == 200){
                console.log(res.data.meta.status)
                window.location.href = "http://localhost:3000/users/cart"
            }else{
                console.log(res)
            }
        })
        
        .catch(e => console.log(e));
    })
}