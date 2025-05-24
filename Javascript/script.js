// begin javascript: responsive navbar
var sidemenu = document.getElementById("sidemenu")

function openmenu() {
    sidemenu.style.left = "0";
}
function closemenu() {
    sidemenu.style.left = "-200px";
}

// Start dynamic JS
// Typing animation for hero section
const titleText = "I'm Sam Lam";
const subtitleText = "3rd year IT student, specialized in  \"If it works, we don't touch it anymore\"";

const titleElement = document.getElementById("typed-title");
const subtitleElement = document.getElementById("typed-subtitle");

let titleIndex = 0;
let subtitleIndex = 0;

// Function to type the title text character by character
function typeTitle() {
    // Check if there are still characters left to type
    if (titleIndex < titleText.length) {
        // Add the next character to the title element
        titleElement.textContent += titleText.charAt(titleIndex);
        titleIndex++;
        // Call this function again after 70 milliseconds
        setTimeout(typeTitle, 70);
    } else {
        // Once the title is done, wait a bit then start typing the subtitle
        setTimeout(typeSubtitle, 400);
    }
}

// Function to type the subtitle text with line breaks
function typeSubtitle() {
    // Check if there are still characters left to type
    if (subtitleIndex < subtitleText.length) {
        const char = subtitleText.charAt(subtitleIndex);
        // Add character to subtitle, replace newline characters with <br>
        subtitleElement.innerHTML += (char === "\n" ? "<br>" : char);
        subtitleIndex++;
        // Call this function again after 40 milliseconds
        setTimeout(typeSubtitle, 40);
    } else {
        // Add a blinking cursor once typing is complete
        subtitleElement.innerHTML += '<span class="typed-cursor">|</span>';
    }
}


// Start typing animation
typeTitle();
// End dynamic JS

// Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();