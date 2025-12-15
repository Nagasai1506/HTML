// SIGNUP
function signup(event) {
    event.preventDefault();

    let user = document.getElementById("signupUser").value;
    let pass = document.getElementById("signupPass").value;

    // store in browser
    localStorage.setItem("fbUser", user);
    localStorage.setItem("fbPass", pass);

    alert("Registration successful!");
    window.location.href = "login.html";
}

// LOGIN
function login(event) {
    event.preventDefault();

    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    let savedUser = localStorage.getItem("fbUser");
    let savedPass = localStorage.getItem("fbPass");

    let msg = document.getElementById("msg");

    if (user === savedUser && pass === savedPass) {
        msg.style.color = "green";
        msg.innerText = "Login successful ✔️";
    } else {
        msg.style.color = "red";
        msg.innerText = "Invalid username or password";
    }
}
