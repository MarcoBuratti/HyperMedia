const collector = document.getElementsByClassName('my-navbar-right');
const sidebar = document.getElementById('side-list');
let link;
let nameBtn;
let buttonLogIn;
let sideLoginBtn;

setNavBtn();

async function setNavBtn() {
    let answer = await fetch("/v2/findUser");
    answer = await answer.json()
    if (answer.length) {

        addEvents();

        async function createLogMenu() {
            buttonLogIn = "<li><a href='#' , class='my-navbar-btn my-navbar-btn-right' , id='logout-btn-open'>";
            buttonLogIn += "Welcome, " + answer[0].name + "!</a>";
            buttonLogIn += "<div id='logout-menu' , class='logout-nav'><a href='#' , class='btn-logout-close' , id='logout-btn-close'>&times;</a>";
            buttonLogIn += '<a class="logout-btn" href="../pages/cart.html" id="first-logout-btn">Cart</a>';
            buttonLogIn += '<a href="../index.html" class="logout-btn" id="LogoutFunction">' + 'Logout' + '</a></li>';
            collector[0].innerHTML = buttonLogIn;


            sideLoginBtn = '<a class="sidebar-btn" id="side-cart-btn" href="../pages/cart.html">Cart</a>';
            sideLoginBtn += '<a class="sidebar-btn" href="../index.html" id="LogoutFunctionSide">Logout</a>';
            sidebar.innerHTML += sideLoginBtn;


            const logoutFunction = document.getElementById('LogoutFunction');
            const logoutFunctionSide = document.getElementById('LogoutFunctionSide');
            logoutFunction.addEventListener('click', async (e) => {

                e.preventDefault();


                await fetch("/v2/user/logout", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    }

                })
                location.replace('../pages/login.html');
            });

            logoutFunctionSide.addEventListener('click', async (e) => {

                e.preventDefault();


                await fetch("/v2/user/logout", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    }

                })
                location.replace('../pages/login.html');
            });

        }


        async function addEvents() {
            await createLogMenu();
            // Get input element
            let logoutOpen = document.getElementById('logout-btn-open');
            // Add Event Listener
            logoutOpen.addEventListener("click", openSlideMenu);

            let logoutClose = document.getElementById('logout-btn-close');

            logoutClose.addEventListener("click", closeSlideMenu);
        }
    } else {
        link = '<a href="../pages/login.html" class="my-navbar-btn my-navbar-btn-right" id="login-btn">';
        nameBtn = 'Login';
        buttonLogIn = '<li>' + link + nameBtn + '</a></li>';
        collector[0].innerHTML = buttonLogIn;

        sideLoginBtn = '<a class="sidebar-btn" href="../pages/login.html" id="login-side-btn">Login</a>'
        sidebar.innerHTML += sideLoginBtn;
    }
}



function openSlideMenu() {
    document.getElementById('logout-menu').style.width = '250px';
    document.getElementById('body').style.opacity = '0.5';
    document.getElementById('footer').style.opacity = '0.5';
}



function closeSlideMenu() {
    document.getElementById('logout-menu').style.width = '0';
    document.getElementById('body').style.opacity = '1.0';
    document.getElementById('footer').style.opacity = '1.0';
}