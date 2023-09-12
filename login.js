document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    // Get input values
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    const rememberMe = document.getElementById("remember-me").checked;

    // Perform validation and login logic here
    // You can add your validation code and login logic here
    // For example, you can send a request to your server to authenticate the user.

    // If "Remember Me" is checked, you can store the user's credentials securely (e.g., using cookies or localStorage).

    // Clear input fields
    document.getElementById("login-username").value = "";
    document.getElementById("login-password").value = "";
});
