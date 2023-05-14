
var shop = (function () {
    var obj = {};
    cart = [];

    // cllass
    const Item = class {
        constructor(name, price, count) {
            this.name = name;
            this.price = price;
            this.count = count;
        }
    }

    function setAdd() {
        sessionStorage.setItem('shop', JSON.stringify(cart));
    }

    function getSesion() {
        cart = JSON.parse(sessionStorage.getItem('shop'));
    }
    if (sessionStorage.getItem("shop") != null) {
        getSesion();
    }

    obj.sumcart = function () {
        var sumcart = 0;
        for (var item in cart) {
            sumcart += cart[item].price * cart[item].count;
        }
        return Number(sumcart.toFixed(2));
    }

    obj.addCart = function (name, price, count) {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart[item].count++;
                setAdd();
                return;
            }
        }
        var item = new Item(name, price, count);
        cart.push(item);
        setAdd();
    }
    obj.clear = function () {
        cart = [];
        setAdd();
    }
    
    obj.removeitem = function (name) {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart[item].count--;
                if (cart[item].count === 0) {
                    cart.splice(item, 1);
                }
                break;
            }
        }
        setAdd();
    }

    obj.remove = function (name) {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart.splice(item, 1);
                break;
            }
        }
        setAdd();
    }

    
    obj.setItwem = function (name, count) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count = count;
                break;
            }
        }
    };
    obj.sumCount = function () {
        var sumCount = 0;
        for (var item in cart) {
            sumCount += cart[item].count;
        }
        return sumCount;
    }

  

    obj.list = function () {
        var cartCopy = [];
        for (i in cart) {
            item = cart[i];
            itemCopy = {};
            for (p in item) {
                itemCopy[p] = item[p];

            }
            itemCopy.total = Number(item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy)
        }
        return cartCopy;
    }

    return obj;
})();

let addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    let name = button.getAttribute('data-name');
    let price = Number(button.getAttribute('data-price'));
    shop.addCart(name, price, 1);
    cartCreate();
  });
});

var clearCartButton = document.querySelector('.clear-cart');
clearCartButton.addEventListener('click', function() {
  shop.clear();
  cartCreate();
});




function cartCreaate() {
    var carts = shop.list();
    var output = "";
    for (var i in carts) {
        output += "<tr>"
            + "<td>" + carts[i].name + "</td>"
            + "<td>(" + carts[i].price + ")</td>"
            + "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + carts[i].name + ">-</button>"
            + "<input type='number' class='item-count form-control' data-name='" + carts[i].name + "' value='" + carts[i].count + "'>"
            + "<button class='plus-item btn btn-primary input-group-addon' data-name=" + carts[i].name + ">+</button></div></td>"
            + "<td><button class='delete-item btn btn-danger' data-name=" + carts[i].name + ">X</button></td>"
            + " = "
            + "<td>" + carts[i].total + "</td>"
            + "</tr>";
    }
    $('.show-cart').html(output);
    $('.total-cart').html(shop.sumcart());
    $('.total-count').html(shop.sumCount());
}



let showCart = document.querySelector('.show-cart');




showCart.addEventListener('click', function(event) {
    event.preventDefault();
  if (event.target.classList.contains('delete-item')) {
    var name = event.target.getAttribute('data-name');
    shop.remove(name);
    cartCreate();
  }
});


showCart.addEventListener('click', function(event) {
    event.preventDefault();
  if (event.target.classList.contains('minus-item')) {
    var name = event.target.getAttribute('data-name');
    shop.removeItem(name);
    cartCreate();
  }
});

showCart.addEventListener('click', function(event) {
    event.preventDefault();
  if (event.target.classList.contains('plus-item')) {
    var name = event.target.getAttribute('data-name');
    shop.addCart(name);
    cartCreate();
  }
});


showCart.addEventListener('change', function(event) {
    event.preventDefault();
  if (event.target.classList.contains('item-count') && event.target.nodeName === 'INPUT') {
    var name = event.target.getAttribute('data-name');
    var count = Number(event.target.value);
    shop.setItem(name, count);
    cartCreate();
  }
});


cartCreaate();
