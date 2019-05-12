const submit_box = document.querySelector('.regform_box');
const error = document.querySelector('#regform_err');
const username_box = document.querySelector('.regform_user');
const password_box = document.querySelector('.regform_pass');


submit_box.addEventListener('submit', (e) => {

    e.preventDefault();

    if (username_box.value === '' || password_box.value === '') {
        error.innerHTML = "Invalid input: username and/or password are empty.";
    }
    else if (username_box.value.length > 12 || password_box.value.length > 12) {
        error.innerHTML = "Invalid input: username and/or password are too long.";
    }
    else if (username_box.value.length < 8 || password_box.value.length < 8) {
        error.innerHTML = "Invalid input: username and/or password are too short.";
    }
    else {
        error.innerHTML = "";
    }
}
);
