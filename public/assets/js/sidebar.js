var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
/*
let json;
let title = document.getElementById('book-title');
let isbn = document.getElementById('isbn-code');
let cover = document.getElementById('book-cover');
let genres = document.getElementById('book-genres');
let themes = document.getElementById('book-themes');
let descr = document.getElementById('book-description');


const userAction = async () => {
    let response = await fetch('../../v2/bookId/');
    console.log(response);
    json = await response.json();
    console.log(json);
    loadData(json);
}


userAction();

function loadData(json) {
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
            collection.innerHTML = innerHTML + "<li class='collection-item'>" +
            "<a class='collection-item' , href='#'>" + json[i].title + "<br><img src='" + "../assets/img/books/" + json[i].isbn + ".jpg' height='300' width='180'></a>" +
            "<h4>Price: "+ json[i].price.toFixed(2) + '€' + "</h4></li>";
        }
    }

}
*/


// Get input element
let btnOpen = document.getElementById('sidebar-btn-open');
// Add Event Listener
btnOpen.addEventListener("click", openSlideMenu);

function openSlideMenu() {
    document.getElementById('side-menu').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
    document.getElementById('main').style.opacity = '0.5';
}

let btnClose = document.getElementById('sidebar-btn-close');

btnClose.addEventListener("click", closeSlideMenu);

function closeSlideMenu() {
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    document.getElementById('main').style.opacity = '1.0';
}

// Get EVENT button element
let btnEvent = document.getElementById('sidebar-btn-event');

// Add EventListener to EVENT button
btnEvent.addEventListener("click", openEventPage);

// Open Event Page
function openEventPage() {
    resetButtons();
    activeButton(btnEvent);
}

let btnBook = document.getElementById('sidebar-btn-info');

btnBook.addEventListener("click", openBookPage);

function openBookPage() {
    resetButtons();
    activeButton(btnBook);
}

let btnGallery = document.getElementById('sidebar-btn-gallery');

btnGallery.addEventListener("click", openGalleryPage);

function openGalleryPage() {
    resetButtons();
    activeButton(btnGallery);
}

let btnReviews = document.getElementById('sidebar-btn-reviews');

btnReviews.addEventListener("click", openReviewsPage);

function openReviewsPage() {
    resetButtons();
    activeButton(btnReviews);
}

// Select Button
function activeButton(btn) {
    btn.classList.add('active-sidebar-btn');
}

// Reset Buttons
function resetButtons() {
    var sidebarBtns = document.getElementsByClassName("sidebar-btn");
    for ( var i = 0; i < sidebarBtns.length ; i++ ) {
        sidebarBtns[i].classList.remove('active-sidebar-btn');
    }
}

