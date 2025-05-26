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
const scriptURL = "https://script.google.com/macros/s/AKfycbyqbP3JlTlHmf1clV0OrpSdfkTD8tPdB8MyZuomwgcxSiTfzg5nGDc7l-NxTgyDeaEjMw/exec"
const form = document.forms['news-to-google-sheet']
const message = document.getElementById("message1")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            message.innerHTML = "You are successfully subscribed to our newsletter!"
            setTimeout(function() {
                message.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
// end javascript voor invoer data contact form //
