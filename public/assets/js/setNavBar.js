const collector = document.getElementsByClassName('my-navbar-right');
let link;
let nameBtn;

setNavBtn();

async function setNavBtn() {
    let answer = await fetch("/v2/findUser");
    answer = await answer.json()
    if (answer.length) {

        addEvents();
        
        async function createLogMenu () {
        let buttonLogIn = "<li><a href='#' , class='my-navbar-btn my-navbar-btn-right my-navbar-active-btn' , id='logout-btn-open'>";
        buttonLogIn += "Welcome, " + answer[0].name + "!</a>";
        buttonLogIn += "<div id='logout-menu' , class='logout-nav'><a href='#' , class='btn-logout-close' , id='logout-btn-close'>&times;</a>";
        buttonLogIn += '<a class="logout-btn" href="../pages/about-us.html" id="first-logout-btn">Cart</a>';
        buttonLogIn += '<a href="../pages/login.html" class="logout-btn" id="LogoutFunction">' + 'Logout' + '</a></li>';
        collector[0].innerHTML = buttonLogIn;
        const logoutFunction = document.getElementById('LogoutFunction');
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
        link = '<a href="../pages/login.html" class="my-navbar-btn my-navbar-btn-right my-navbar-active-btn">';
        nameBtn = 'Login';
        let buttonLogIn = '<li>' + link +  nameBtn + '</a></li>';
        collector[0].innerHTML = buttonLogIn;
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