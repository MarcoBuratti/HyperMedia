const collector = document.getElementById('dinamic-nav');



let link;
let nameBtn;
let dinamic_btn = document.getElementById("dinamic-btn");

setNavBtn();

async function setNavBtn() {
    let answer = await fetch("/v2/findUser");
    answer = await answer.json()
    console.log(answer);
    console.log(answer.length);
    if (answer.length) {
        nameBtn = 'Logout';
        link = '<a href="../pages/login.html" class="my-navbar-btn my-navbar-btn-right my-navbar-active-btn">';
        let buttonLogIn = '<li><a class="my-navbar-btn">'+ answer[0].name + '</a></li>';
        buttonLogIn += '<li><a class="my-navbar-btn" href="../pages/about-us.html"> Cart</a></li>';
        buttonLogIn += '<li class="active" id="LogoutFunction">' + link + '<span class="glyphicon glyphicon-log-in"></span>' + nameBtn + '</a></li>';
        collector.innerHTML = buttonLogIn;
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
    } else {
        link = '<a href="../pages/login.html" class="my-navbar-btn my-navbar-btn-right my-navbar-active-btn">';
        nameBtn = 'Login';
        let buttonLogIn = '<li class="active">' + link + '<span class="glyphicon glyphicon-log-in"></span>' + nameBtn + '</a></li>';
        collector.innerHTML = buttonLogIn;
    }
}