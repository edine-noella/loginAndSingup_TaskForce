document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    // Get input values
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const rememberMe = document.getElementById("remember-me").checked;

    // Validate email
    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    // Validate password
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!regex.test(password)) {
        alert("Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character.");
        return;
    }

    // Clear input values
    document.getElementById("login-username").value = "";
    document.getElementById("login-password").value = "";
});