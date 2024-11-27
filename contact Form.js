// contactForm.js

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    if(name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return;
    }

    // Here, you can handle form submission to a server or email service.
    console.log("Form submitted:", { name, email, message });
});
