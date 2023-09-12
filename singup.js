document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault();
    // Get input values
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;

    // Perform validation and signup logic here
    // You can add your validation code and signup logic here
    // For example, you can send a request to your server to create a new user.

    // Clear input fields
    document.getElementById("signup-username").value = "";
    document.getElementById("signup-password").value = "";
});
