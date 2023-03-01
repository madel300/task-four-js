var all = document.getElementById("all");
var iphone = document.getElementById("iphone");
var oppo = document.getElementById("oppo");
var samsung = document.getElementById("samsung");
var allItems = document.querySelectorAll("main .items .card");
var btnAddCart = document.querySelectorAll(".btn-add-cart");
var cartCount = document.getElementById("count");
var cartItems = document.querySelector(".modal-body");
var btnTotal = document.querySelector("#btn-total");
var totalPriceShow = document.querySelector("#total-num");
var itemCount = 0;
var totalPrice = 0;

// navbar links /////////////////////////////////////////////////////////////////
all.addEventListener ("click", function() {
    allItems.forEach(function(item) {
        item.style.display = "flex";
    })
});
iphone.addEventListener("click", function () {
    allItems.forEach(function (item) {
        if (item.getAttribute("kind") == "iphone") {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    })
});
oppo.addEventListener("click", function () {
    allItems.forEach(function (item) {
        if (item.getAttribute("kind") == "oppo") {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    })
});
samsung.addEventListener("click", function () {
    allItems.forEach(function (item) {
        if (item.getAttribute("kind") == "samsung") {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    })
});
// End navbar links ////////////////////////////////////////////////////////////////
if (cartItems.innerHTML == "") {
    cartItems.innerHTML = "No Items"
}

// add to cart/////////////////////////////////////////////////////////
allItems.forEach(function(item) {
    item.addEventListener("click", function() {
        if (cartItems.innerHTML == "No Items") {
            cartItems.innerHTML = "<p class='fw-bold'>" + item.getAttribute("name") + " " + item.getAttribute("price")+"$" + "</p>"
        } else {
            cartItems.innerHTML += "<p class='fw-bold'>" + item.getAttribute("name") + " " + item.getAttribute("price")+"$" + "</p>"
        }
        itemCount++;
        cartCount.innerHTML = itemCount;
        totalPrice += +(item.getAttribute("price"));
    })
})
// End Add To Cart////////////////////////////////////////////////////////////////////

// total price////////////////////////////////////////////////////////////////
btnTotal.onclick = function() {
    totalPriceShow.innerHTML = "total (" +totalPrice + "$)"
}
