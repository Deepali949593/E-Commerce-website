const loginForm = document.getElementById("login-form");
const loginError = document.getElementById("login-error");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Replace with your own logic to validate the username and password
    if (username === "Deepa" && password === "Deepa12345"){
        // Successful login
        loginError.textContent = "";
        alert("Login successful!");
    } else {
        // Failed login
        loginError.textContent = "Invalid username or password";
    }
});
