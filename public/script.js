let name = document.getElementById("name");
let email = document.getElementById("email");
let psw = document.getElementById('psw');
let signUp = document.getElementById('sign-up-btn');

signUp.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(name.value);
    console.log(email);
    //here all is ok, so sent the post request
    let details = {
        'name': name.value,
        'password': psw.value,
        'email': email.value
    };

    let formBody = [];
    for (var property in details) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    console.log(formBody);
    getResponse(formBody);
});

const getResponse = async (body) => {
    let answer = await fetch("/v2/user/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: body
    })

    answer = await answer.json()

    if (answer.success === true) {
        window.location.replace();
    } else {
        alert(answer.error + '!');
    }

}