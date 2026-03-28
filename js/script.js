/* Typing Animation Logic
   Displays the subtitle with a typewriter effect */

const text = " A Software Engineer";
// Keeps track of the current character index
let index = 0;
// Typing speed in milliseconds 
const speed = 100;
// Select the HTML element where the text will appear
const typingElement = document.querySelector(".typing");

function typeWriter() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

/* Start typing animation */
typeWriter();



/* Dark / Light Mode Toggle
   Toggles a CSS class on the body element */

const toggleBtn = document.getElementById("theme-toggle");

/* Load saved theme when page loads */
document.addEventListener("DOMContentLoaded", function () {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        toggleBtn.textContent = "Light";
    } else {
        toggleBtn.textContent = "Dark";
    }
});

toggleBtn.addEventListener("click", () => {

    /* Toggle theme class */
    document.body.classList.toggle("light-mode");

    /* Update button label */
    if (document.body.classList.contains("light-mode")) {
        toggleBtn.textContent = "Light";
        localStorage.setItem("theme", "light");

    } else {
        toggleBtn.textContent = "Dark";
        localStorage.setItem("theme", "dark");
    }
});


// Get form and message element
const form = document.getElementById("contact-form");
const msg = document.getElementById("form-msg");


// Toggle project details show more or show less
function toggleDetails(button) {
    const fullText = button.previousElementSibling;
    const shortText = fullText.previousElementSibling;

    // Check if details are hidden
    if (window.getComputedStyle(fullText).display === "none") {
        fullText.style.display = "block";   // Show full text
        shortText.style.display = "none";   // Hide short text
        button.textContent = "Show Less";
    } else {
        fullText.style.display = "none";    // Hide full text
        shortText.style.display = "block";  // Show short text
        button.textContent = "Show More";
    }
}


// Handle form submission
form.addEventListener("submit", function (e) {

    if (!form.checkValidity()) {
        msg.textContent = "Please fill all fields correctly";
        msg.style.color = "#ff6b6b";
        return;
    }

    e.preventDefault(); // Prevent page reload

    // Show success message
    msg.textContent = "Message sent successfully";
    msg.style.color = "#4ade80";

    form.reset(); // Clear form fields
});


// Show browser validation while typing
const emailInput = document.getElementById("email");

emailInput.addEventListener("input", function () {
    emailInput.reportValidity();
});