// Get input element
let filterInput = document.getElementById('filterInput');
let buyButton = document.getElementById('buy');

let json;

filterInput.addEventListener('keyup', filterBooks);

function filterBooks(){
    // Get value of input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    
    // Get books ul
    let ul = document.getElementById('books');

    // Get lis from ul
    let li = ul.querySelectorAll('li.collection-item');
   /* let collectionHeaders = ul.querySelectorAll('h5.collection-header');

    for(let i = 0; i < collectionHeaders.length; i++){
        collectionHeaders[i].className = 'collection-header-hidden';
    } */

    // Look through collection-item lis
    for(let i = 0; i < li.length; i++){
        let a = li[i].getElementsByTagName('a')[0];
        // If matches
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            li[i].style.display = '';
        }
        else {
            li[i].style.display = 'none';
        }
    }
}


setNavBtn();

async function setNavBtn() {
    let answer = await fetch("/v2/findUser");
    answer = await answer.json();
    if (answer.length) {
        let cart = document.getElementById('first-logout-btn');
        let sideCart = document.getElementById('side-cart-btn');
        cart.classList.add('my-navbar-active-btn');
        sideCart.classList.add('active-sidebar-btn')
    }
}

const userAction = async () => {
    let response = await fetch('../../v2/carts');
    json = await response.json();
    loadData(json);
}



userAction();

async function loadData(json) {

    if(json.length===0){
        let emptyCart = document.getElementById('empty-cart');
        emptyCart.innerHTML = 'Your cart is currently empty. You can add books to your cart by clicking the "Add to Cart" button on the page of the book you desire to buy.';
    }
    else {
        let total = 0;
        let searchbox = document.getElementById('search-box-container');
        searchbox.style.display = 'block';
        for(var i=0; i<json.length; i++) {

            var collection;
            var collectionHeader;
            switch(json[i].title.charAt(0).toUpperCase()) {
                case 'A':
                    collection = document.getElementById('a-collection-items');
                    collectionHeader = document.getElementById('a-collection-header');
                    break;
                case 'B':
                    collection = document.getElementById('b-collection-items');
                    collectionHeader = document.getElementById('b-collection-header');
                    break;
                case 'C':
                    collection = document.getElementById('c-collection-items');
                    collectionHeader = document.getElementById('c-collection-header');
                    break;
                case 'D':
                    collection = document.getElementById('d-collection-items');
                    collectionHeader = document.getElementById('d-collection-header');
                    break;
                case 'E':
                    collection = document.getElementById('e-collection-items');
                    collectionHeader = document.getElementById('e-collection-header');
                    break;
                case 'F':
                    collection = document.getElementById('f-collection-items');
                    collectionHeader = document.getElementById('f-collection-header');
                    break;
                case 'G':
                    collection = document.getElementById('g-collection-items');
                    collectionHeader = document.getElementById('g-collection-header');
                    break;
                case 'H':
                    collection = document.getElementById('h-collection-items');
                    collectionHeader = document.getElementById('h-collection-header');
                    break;
                case 'I':
                    collection = document.getElementById('i-collection-items');
                    collectionHeader = document.getElementById('i-collection-header');
                    break;
                case 'J':
                    collection = document.getElementById('j-collection-items');
                    collectionHeader = document.getElementById('j-collection-header');
                    break;
                case 'K':
                    collection = document.getElementById('k-collection-items');
                    collectionHeader = document.getElementById('k-collection-header');
                    break;
                case 'L':
                    collection = document.getElementById('l-collection-items');
                    collectionHeader = document.getElementById('l-collection-header');
                    break;
                case 'M':
                    collection = document.getElementById('m-collection-items');
                    collectionHeader = document.getElementById('m-collection-header');
                    break;
                case 'N':
                    collection = document.getElementById('n-collection-items');
                    collectionHeader = document.getElementById('n-collection-header');
                    break;
                case 'O':
                    collection = document.getElementById('o-collection-items');
                    collectionHeader = document.getElementById('o-collection-header');
                    break;
                case 'P':
                    collection = document.getElementById('p-collection-items');
                    collectionHeader = document.getElementById('p-collection-header');
                    break;
                case 'Q':
                    collection = document.getElementById('q-collection-items');
                    collectionHeader = document.getElementById('q-collection-header');
                    break;
                case 'R':
                    collection = document.getElementById('r-collection-items');
                    collectionHeader = document.getElementById('r-collection-header');
                    break;
                case 'S':
                    collection = document.getElementById('s-collection-items');
                    collectionHeader = document.getElementById('s-collection-header');
                    break;
                case 'T':
                    collection = document.getElementById('t-collection-items');
                    collectionHeader = document.getElementById('t-collection-header');
                    break;
                case 'U':
                    collection = document.getElementById('u-collection-items');
                    collectionHeader = document.getElementById('u-collection-header');
                    break;
                case 'V':
                    collection = document.getElementById('v-collection-items');
                    collectionHeader = document.getElementById('v-collection-header');
                    break;
                case 'W':
                    collection = document.getElementById('w-collection-items');
                    collectionHeader = document.getElementById('w-collection-header');
                    break;
                case 'X':
                    collection = document.getElementById('x-collection-items');
                    collectionHeader = document.getElementById('x-collection-header');
                    break;
                case 'Y':
                    collection = document.getElementById('y-collection-items');
                    collectionHeader = document.getElementById('y-collection-header');
                    break;
                case 'Z':
                    collection = document.getElementById('z-collection-items');
                    collectionHeader = document.getElementById('z-collection-header');
                    break;
            }
            if (json[i].title.charAt(0).match(/[a-z]/i)) {
                if (collectionHeader.className === 'collection-header-hidden')
                    collectionHeader.className = "collection-header";
                var innerHTML = collection.innerHTML;
                innerHTML = innerHTML + "<li class='collection-item'>" +
                "<a class='collection-item' , href='../pages/sidebar.html?isbn=" + json[i].isbn + "'>" + json[i].title + "<br><img src='" + "../assets/img/books/" + json[i].isbn + ".jpg' class='cart-img'></a>" +
                "<h4 class='cart-details'>Quantity: " + json[i].quantity + "</h4><h4 class='cart-details'>Price: " + json[i].total.toFixed(2) + '€' + "</h4><form id='remove-form-" + i + "'><input type='number' id='remove-quantity' value=1 min=1 max=" +
                json[i].quantity + "><br><input type='submit' id='remove-submit' value='Remove'></form>";
                
                
                //innerHTML += " <button class='pay-btn' onclick=deleteBook(/"+json[i].isbn+"/)>Remove</button>";
            
                collection.innerHTML = innerHTML;
            }

            total += json[i].total;
        
        }
    

        buyButton.innerHTML = "<h4 class='cart-details'>Total:"+total.toFixed(2) + '€' + "</h4><button id='buy-btn'>Buy Now</button>";

        let removeForm;

        for (var k = 0; k < json.length ; k++) {

            removeForm = document.getElementById('remove-form-' + k);

            removeForm.addEventListener('submit', async (e) => {

            e.preventDefault();
            let removeQuantity = removeForm.querySelector("#remove-quantity").value;
            let newQuantity = json[k].quantity - removeQuantity;
            let total = (json[k].total / json[k].quantity) * newQuantity;
            let details = {
                'total': total,
                'quantity': newQuantity,
                'isbn': json[k].isbn
            };
            
            let body = [];
            for (var property in details) {
                let encodedKey = encodeURIComponent(property);
                let encodedValue = encodeURIComponent(details[property]);
                body.push(encodedKey + "=" + encodedValue);
            }
            body = body.join("&");
            
            
            let answer = await fetch("../../v2/cartInsert", {
                method: 'POST',
                headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: body
            })
            
            answer = await answer.json()
            console.log(answer.status);
            if (!answer.status)
                window.alert("No login");
            else
                location.replace("../pages/cart.html");
            
            });
        }


    }
}

async function deleteBook(isbn){
    await fetch('../../v2/bookDelete'+isbn, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
    });
    location.replace('../pages/cart.html');
}

buyButton.addEventListener('click',async (e) => {
    e.preventDefault();
    await fetch('../../v2/cartDelete', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
    });
    location.replace('../pages/cart.html');

    
});