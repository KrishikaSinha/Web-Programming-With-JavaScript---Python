if (!localStorage.getItem("users")) {
    const defaultUser = [
        { email: "admin@gmail.com", password: "1234" }
    ];
    localStorage.setItem("users", JSON.stringify(defaultUser));
}

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    const users = JSON.parse(localStorage.getItem("users"));

    const validUser = users.find(user => 
        user.email === email && user.password === password
    );

    if (validUser) {

        // Save login session
        localStorage.setItem("isLoggedIn", "true");

        // Direct redirect
        window.location.href = "index.html";

    } else {
        errorMsg.textContent = "Invalid Email or Password!";
    }
});

const defaultUser = [
    { email: "admin@gmail.com", password: "1234" }
];
