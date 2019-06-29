

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('master');

setNavBtn();

async function setNavBtn() {
    let answer = await fetch("/v2/findUser");
    answer = await answer.json();
    if (answer.length) {
        let logoutBtn = document.getElementById('LogoutFunction');
        let logoutSideBtn = document.getElementById('LogoutFunctionSide');
        let welcomeBtn = document.getElementById('logout-btn-open');
        logoutBtn.classList.add('my-navbar-active-btn');
        logoutSideBtn.classList.add('active-sidebar-btn');
        welcomeBtn.classList.add('my-navbar-active-btn');
    }
    else {
        let loginBtn = document.getElementById('login-btn');
        let loginSideBtn = document.getElementById('login-side-btn');
        loginBtn.classList.add('my-navbar-active-btn');
        loginSideBtn.classList.add('active-sidebar-btn');
    }
}

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});


let nameLog = document.getElementById("nameLog");
let emailLog = document.getElementById("emailLog");
let pswLog = document.getElementById('pswLog');
let nameReg = document.getElementById("nameReg");
let emailReg = document.getElementById("emailReg");
let pswReg = document.getElementById('pswReg');
let signUp = document.getElementById('sign-up-btn');
let signIn = document.getElementById('sign-in-btn');

signUp.addEventListener('submit', async(e) => {
    e.preventDefault();


    let details = {
        'name': nameReg.value,
        'password': pswReg.value,
        'email': emailReg.value
    };

    let body = [];
    for (var property in details) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(details[property]);
        body.push(encodedKey + "=" + encodedValue);
    }
    body = body.join("&");

    let answer = await fetch("/v2/user/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: body
    })

    answer = await answer.json()
   
    if (answer.status){
        location.replace('../pages/successful-registration.html');
        }
    else{
        //message error
        window.alert("Fuck you, you can't login!");
        location.replace('../pages/login.html');
    }
    });

signIn.addEventListener('submit',async (e) => {
    e.preventDefault();


    let details = {
        'password': pswLog.value,
        'email': emailLog.value
    };

    let body = [];
    for (var property in details) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(details[property]);
        body.push(encodedKey + "=" + encodedValue);
    }
    body = body.join("&");

    let answer = await fetch("/v2/user/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: body
    })
    answer = await answer.json()
    
    if (answer.status){
        
        location.replace('../index.html');
        }
    else{
        //se non loggato
        window.alert("Email or password not valid!");
        
        location.replace('../pages/login.html');
    }
});
