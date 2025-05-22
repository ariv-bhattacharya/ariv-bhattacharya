
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('usernameInput');
const passwordInput = document.getElementById('passwordInput');
const loginMessage = document.getElementById('loginMessage');

loginForm.addEventListener('submit', function(event) {

    event.preventDefault(); 

    const username = usernameInput.value;
    const password = passwordInput.value;


    if (username === 'admin' && password === 'admin') {
        loginMessage.textContent = 'Welcome Admin!';
        loginMessage.style.color = 'green';
    } else {
        loginMessage.textContent = 'Incorrect username or password.';
        loginMessage.style.color = 'red';
    }
    passwordInput.value = ''; 
});