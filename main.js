let shop = (function () {
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




function creatCart() {
    var cartlist = shop.carts();
    var exit = "";
    for (var i in cartArray) {
        let tr = document.createElement("tr")

        let td = document.createElement("td")
        td.textContent = cartlist[i].name
        let td1 = document.createElement("td")
        td1.textContent = cartlist[i].price
        let td2 = document.createElement("td")  //3cu hisse
        let div = document.createElement("div") //div start
        div.className = 'input-group'
        let btn = document.createElement("button")
        btn.setAttribute("data-name=", cartArray[i].name);
        btn.className = 'minus-item input-group-addon btn btn-primary'
        btn.textContent = "-";
        let input = document.createElement("input")
        input.setAttribute("data-name=", cartArray[i].name);
        input.type = 'number'
        input.className = 'item-count form-control'
        input.value = cartArray[i].count
        let btn2 = document.createElement("button")
        btn2.setAttribute("data-name=", cartArray[i].name);
        btn2.className = 'plus-item btn btn-primary input-group-addon'
        btn2.textContent = "+"  //div bitdi td bitdi
        let td3 = document.createElement("td")  //td start
        let btn3 = document.createElement("button")
        btn3.setAttribute("data-name=", cartArray[i].name);
        btn3.className = 'delete-item btn btn-danger'
        btn3.textContent = "X"
        let td4 = document.createElement("td")
        td4.textContent = cartlist[i].sum   //tr end

        div.children(btn)
        div.children(input)
        div.children(btn2)
        td2.children(div)

        td3.children(btn3)

        tr.children(td)
        tr.children(td1)
        tr.children(td2)
        tr.children(td3)
        tr.children(td4)

        exit += tr;
    }
    var showCartElements = document.getElementsByClassName("show-cart");
    exit = showCartElements
    var totalCartElements = document.getElementsByClassName("total-cart");
    shop.totalCart() = totalCartElements
    var totalCountElements = document.getElementsByClassName("total-cart");
    shop.totalCount() = totalCountElements

}

const showCart = document.querySelectorAll(".add-to-cart")
// console.log(showCart);

//- buttonuna vurdgumuzda sayin azalmasi
showCartElements.addEventListener("click", function (e) {
    if (e.target && e.target.matches(".delete-item")) {
        let name = e.target.getAttribute("data-name")
        shop.removeCart(name)
        creatCart()
    }
})


//+ buttonuna vurdgumuzda sayin artmasi
showCartElements.addEventListener("click", function (e) {
    if (e.target && e.target.matches("plus-item")) {
        let name = e.target.getAttribute("data-name")
        shop.addToCart(name)
        creatCart()
    }
})


// sebete add elemek
showCart.addEventListener("click", function(e) {
    console.log("add");
    e.preventDefault()
    let name = this.getAttribute("data-name")
    let price = Number(this.getAttribute("data-price"))
    shop.addToCart(name,price,1)
    creatCart()

})


//Clear etmek 
showCart.addEventListener("click", function (e) {
    shop.clearCart();
    creatCart()
})


//count 
showCartElements.addEventListener("click",)
creatCart();