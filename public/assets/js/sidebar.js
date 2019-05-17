var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

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

