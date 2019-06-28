const collector = document.getElementById('dinamic-li');



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
        link = '<a href="../pages/login.html">';
        let buttonLogIn = '<li class="active" id="LogoutFunction">' + link + '<span class="glyphicon glyphicon-log-in"></span>' + nameBtn + '</a></li>';
        dinamic_btn.innerHTML = buttonLogIn;
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
        link = '<a href="../pages/login.html">';
        nameBtn = 'Login';
        let buttonLogIn = '<li class="active">' + link + '<span class="glyphicon glyphicon-log-in"></span>' + nameBtn + '</a></li>';
        dinamic_btn.innerHTML = buttonLogIn;
    }
}