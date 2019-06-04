let name = document.getElementById("name");
let email = document.getElementById("email");
let psw = document.getElementById('psw');
let signUp = document.getElementById('sign-up-btn');

/*signUp.addEventListener('submit', (e) => {
    e.preventDefault();

    let details = {
        'user_id': 22,
        'total': 5313,
        'quantity': 5,
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
    
    getResponse(formBody);
});

const getResponse = async (body) => {
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