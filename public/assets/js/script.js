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