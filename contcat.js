// Contact Form Submission
function submitContactForm(e){
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMsg = document.getElementById("formMsg");

    if(name === "" || email === "" || message === ""){
        formMsg.style.color = "red";
        formMsg.textContent = "Please fill in all fields.";
        return;
    }

    formMsg.style.color = "#0066ff";
    formMsg.textContent = "Thank you, " + name + "! Your message has been sent.";
    document.getElementById("contactForm").reset();
}