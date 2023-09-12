document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault();
    // Get input values
    const email = document.getElementById("signup-email").value;
    const username= document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;

     console.log(username)
     console.log(password)
    // Validate email
    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    // Validate username
    if (username.length < 4) {
        alert("Username must be at least 4 characters long.");
        return;
    }

    // Validate password
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    // Check if password contains username
    if (password.includes(username)) {
        alert("Password cannot contain the username.");
        return;
    }

    // Clear input fields
    document.getElementById("signup-username").value = "";
    document.getElementById("signup-password").value = "";
});