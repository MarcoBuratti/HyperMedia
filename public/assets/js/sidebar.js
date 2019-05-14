// Get input element
let btnOpen = document.getElementById('sidebar-btn-open');
// Add Event Listener
btnOpen.addEventListener("click", openSlideMenu);

function openSlideMenu() {
    document.getElementById('side-menu').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
}

let btnClose = document.getElementById('sidebar-btn-close');

btnClose.addEventListener("click", closeSlideMenu);

function closeSlideMenu() {
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
}