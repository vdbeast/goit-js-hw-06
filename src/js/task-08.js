const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const inputEmail = loginForm.elements.email;
    const inputPassword = loginForm.elements.password;
   
    if (inputEmail.value === "" || inputPassword.value === "") {
        alert("Будь-ласка, заповніть всі поля!!!");
    }

    const form = {
        email: inputEmail.value,
        password: inputPassword.value,
    }

    console.log(form)

    loginForm.reset()
});

