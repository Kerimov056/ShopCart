var shop = (function () {
    cart = [];
    let obj = {};

    function Carts(name, price, count) {
        this.name = name;
        this.price = price;
        this.count = count;
    }

    function dowland() {
        sessionStorage.setItem('ShopCarts', JSON.stringify(cart))
    }

    function Cekmek() {
        cart = JSON.parse(sessionStorage.getItem("ShopCarts"))
    }
    if (sessionStorage.getItem("ShopCarts") != null) {
        Cekmek();
    }


    //Sebete elave etmek
    obj.addToCart = function (name, price, count) {
        for (var item in cart) {
            if (cart[item].name = name) {
                cart[item].count++;
                dowland();
                return;
            }
        }
        var item = new Carts(name, price, count);
        cart.push(item)
        dowland()
    }
    //sebetden cixarmaq
    obj.removeCart = function () {
        for (var item in cart) {
            if (cart[item].name === name) {
                if (cart[item].count == 0) {
                    return;
                }
                cart[item].count--;
            }
        }
        dowland();
    }

    //burda hepsini silme islemini goruruk
    obj.removeAllCart = function () {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart[item].count === 0;
                break;
            }
        }
        dowland()
    }

    //HAMISIN BIRDEN SILME
    obj.clearCart = function () {
        cart = [];
        dowland();
    }

    //Cartin qiymetinin hesabi
    obj.sumCart = function () {
        let sum = 0;
        for (var item in cart) {
            if (cart[item].name === name) {
                sum = cart[item].price * cart[item].count;
            }
            return Number(sum);
        }
    }

    //cartlarin sayi
    obj.sumCount = function () {
        let sum = 0;
        for (var item in cart) {
            sum += cart[item].count;
        }
        return sum;
    }

    //carttlar
    obj.carts = function () {
        let newCart = [];
        for (i in cart) {
            itemCopy = {};
            item = cart[i]
            for (nn in item) {
                itemCopy[nn] = item[nn]
            }
            itemCopy.sum = Number(item.price * item.count);
            newCart.push(itemCopy)
        }
        return newCart;
    }


    return obj;
})();




function displayCart() {
    var cartlist = shoppingCart.listCart();
    var exit = "";
    for(var i in cartArray) {
        let tr = document.createElement("tr")

    let td = document.createElement("td")
    td.textContent = cartlist[i].name
    let td1 = document.createElement("td")
    td1.textContent = cartlist[i].price
    let td2 = document.createElement("td")  //3cu hisse
    let div = document.createElement("div") //div start
    div.className='input-group'
    let btn = document.createElement("button")
    btn.className='minus-item input-group-addon btn btn-primary'
    btn.textContent = "-";
    let input = document.createElement("input")
    input.type = 'number'
    input.className = 'item-count form-control'
    input.value = cartArray[i].count
    let btn2 = document.createElement("button")
    btn2.className='plus-item btn btn-primary input-group-addon'
    btn2.textContent="+"  //div bitdi td bitdi
    let td3 = document.createElement("td")  //td start
    let btn3 = document.createElement("button")
    btn3.className = 'delete-item btn btn-danger'
    btn3.textContent = "X"
    let td4 = document.createElement("td")
    td4.textContent = cartlist[i].sum   //tr end
    }

}

const showCart = document.querySelector()

