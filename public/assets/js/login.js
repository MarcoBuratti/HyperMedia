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
        'user_id': 22,
        'total': 5313,
        'quantity': 5,
        'isbn': "111"
    };': 5,
        'isbn': "111"
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

    console.log(answer[0].status);

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

    getResponseReg(formBody);
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

    getResponseLog(formBody);
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

    console.log(answer[0].status);

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

    console.log(answer[0].status);

}