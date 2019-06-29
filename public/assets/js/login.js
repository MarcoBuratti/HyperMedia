

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

signUp.addEventListener('submit', (e) => {
    e.preventDefault();


    let details = {
        'name': nameReg.value,
        'password': pswReg.value,
        'email': emailReg.value
    };

    let formBody = [];
    for (var property in details) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    let res = getResponseReg(formBody);
    if (res){
        //se loggato
        location.replace('../pages/login.html');
        }
    else{
        //se non loggato
        location.replace('../pages/login.html');
    }
    });

signIn.addEventListener('submit', (e) => {
    e.preventDefault();


    let details = {
        'password': pswLog.value,
        'email': emailLog.value
    };

    let formBody = [];
    for (var property in details) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    let res = getResponseLog(formBody);
    if (res){
        //se loggato
        location.replace('../pages/login.html');
        }
    else{
        //se non loggato
        location.replace('../pages/login.html');
    }
});

const getResponseReg = async (body) => {
    let answer = await fetch("/v2/user/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: body
    })

    answer = await answer.json()
    return answer.status;
}

const getResponseLog = async (body) => {
    let answer = await fetch("/v2/user/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: body
    })
    answer = await answer.json()
    return answer.status;
}
