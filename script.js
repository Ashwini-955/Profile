document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple validation
    if (name && email && message) {
        alert("Thank you for your message, " + name + "!");
        // Reset form
        document.getElementById("contact-form").reset();
    } else {
        alert("Please fill in all fields.");
    }
});
