var shop = (function(){
    cart = [];
    let obj = {};

    function Carts(name, price, count) {
        this.name = name;
        this.price = price;
        this.count = count;
    }

    function dowland() {
            sessionStorage.setItem('ShopCarts',JSON.stringify(cart))
    }

    function Cekmek() {
            cart = JSON.parse(sessionStorage.getItem("ShopCarts"))
    }
    if(sessionStorage.getItem("ShopCarts") != null){
        Cekmek();
    }


    //Sebete elave etmek
    obj.addToCart = function (name,price,count) {
        for(var item in cart){
            if (cart[item].name = name) {
                cart[item].count++;
                dowland();
                return;
            }
        }
        var item = new Carts(name,price,count);
        cart.push(item)
        dowland()
    }
    //sebetden cixarmaq
    obj.removeCart = function() {
        for(var item in cart){
            if(cart[item].name === name){
                if(cart[item].count==0){
                    return;
                }
                cart[item].count--;
            }
        }
        dowland();
    }

    //burda hepsini silme islemini goruruk
    obj.removeAllCart = function() {
        for(var item in cart){
            if(cart[item].name === name){
                cart[item].count === 0;
                break;
            }
        }
        dowland()
    }

    //HAMISIN BIRDEN SILME
    obj.clearCart =  function() {
        cart = [];
        dowland();
    }
})