// begin javascript: responsive navbar
var sidemenu = document.getElementById("sidemenu")

function openmenu() {
    sidemenu.style.left = "0";
}
function closemenu() {
    sidemenu.style.left = "-200px";
}
// begin javascript: responsive navbar //

// Begin javascript voor invoer data contact form //
const scriptURL = "https://script.google.com/macros/s/AKfycbwBNkGSJYR3116tH0XgKwcFZdxI4718rOkbJmV9QSChUGb2i3_rYd8H8z183Dkjv-pv/exec"
const form = document.forms['submit-to-google-sheet']
const message = document.getElementById("message")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            message.innerHTML = "Your message has been sent successfully!"
            setTimeout(function() {
                message.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
// end javascript voor invoer data contact form //