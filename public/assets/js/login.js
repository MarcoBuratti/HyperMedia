const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('master');

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

/*signUp.addEventListener('submit', (e) => {
    e.preventDefault();

    let details = {
        'total': 5313,
        'quantity': 53,
        'isbn': "1121"
    };

    let formBody = [];
    for (var property in details) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    console.log(formBody)
    getResponse(formBody);
});

const getResponse = async (body) => {
    let answer = await fetch("../../v2/cartInsert", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body
    })

    answer = await answer.json()

    console.log(answer.status);

}

*/

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
    setNavBtn(res);
});

signIn.addEventListener('submit', (e) => {
    e.preventDefault();


    let details = {
        'name': nameLog.value,
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
    setNavBtn(res);
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
    console.log(answer);
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
    console.log(answer);
    return answer.status;
}

let link;
let nameBtn;
let dinamic_btn = document.getElementById("dinamic-btn");

setNavBtn(false);

function setNavBtn(res) {
    if (res) {
        nameBtn = 'Logout';
        link = '<a href="../pages/login.html">';
        let buttonLogIn = '<li class="active" id="LogoutFunction">' + link + '<span class="glyphicon glyphicon-log-in"></span>' + nameBtn + '</a></li>';
        dinamic_btn.innerHTML = buttonLogIn;
        const logoutFunction = document.getElementById('LogoutFunction');
        logoutFunction.addEventListener('click',async (e) => {

            e.preventDefault();
        
        
            let answer = await fetch("/v2/user/logout", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                }
            })
            answer = await answer.json()
            console.log(answer.status);
            console.log("keke");
        
            setNavBtn(false);
        });
        location.replace('../index.html');
    } else {
        link = '<a href="../pages/login.html">';
        nameBtn = 'Login';
        let buttonLogIn = '<li class="active">' + link + '<span class="glyphicon glyphicon-log-in"></span>' + nameBtn + '</a></li>';
        console.log(buttonLogIn);
        alert('Please control your credential, maybe are wrong');
        dinamic_btn.innerHTML = buttonLogIn;
    }
}




