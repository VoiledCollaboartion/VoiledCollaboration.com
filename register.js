let username;
let email;
let password;
let user = JSON.parse(localStorage.getItem('user'));

function registerSubmit(){
    let usernameInput = document.querySelector('.regUsername');
    let emailInput = document.querySelector('.email');
    let passwordInput = document.querySelector('.regPassword');
    let agreedToTC = document.querySelector('.agreTC');
    let loginForm = document.querySelector('.logInForm');
    let registerForm = document.querySelector('.register-form');


    if (usernameInput.value.length >=3 && emailInput
            .value.includes('@gmail.com') &&  emailInput
                .value.length >= 13 && passwordInput.value
                    .length >= 8 && agreedToTC.checked) {
    
        let user = {
            username,
            email,
            password,
        }
        user.username = usernameInput?.value;
        user.email = emailInput?.value;
        user.password = passwordInput?.value;
        localStorage.setItem('user', JSON.stringify(user))

            loginForm.style.display = "block";
            registerForm.style.display = "none";
        } 
    if (usernameInput.value.length < 3) {
            console.log('Username is too short');
    }

    if (!emailInput.value.includes('@gmail.com')){
            console.log('Email should contain @email.com')
    }

    if (passwordInput.value.length < 8) {
            console.log('Password must be more than 8 digits')
    }

    if (!agreedToTC.checked) {
        console.log('You must agree with terms and conditions')
        }
}
function login(){
    let usernameInput = document.querySelector('.username');
    let passwordInput = document.querySelector('.password');
    let loginButton = document.querySelector('.loginButton');
    let user = JSON.parse(localStorage.getItem('user'));
    
    if (usernameInput.value == user.username || usernameInput
            .value == user.email && passwordInput
                .value == user.password) {
        userISLogged = true;
        localStorage.setItem('userISLogged', JSON.stringify(userISLogged));
        location.href = 'page2.html';
    }
}
function test() {
    console.log(JSON.parse(localStorage.getItem('user')))
    console.log(JSON.parse(localStorage.getItem('userISLogged')))
    }


function goToRegister(){
    let loginForm = document.querySelector('.logInForm');
    let registerForm = document.querySelector('.register-form');

        if (loginForm.style.display === "none") {
            loginForm.style.display = "block";
            registerForm.style.display = "none";
        } else if (loginForm.style.display = "block") {
            loginForm.style.display = "none";
            registerForm.style.display = "block";
        }
    }