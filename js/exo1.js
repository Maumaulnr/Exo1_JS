const carre = document.createElement("div")
carre.classList.add("carre")

const content = document.querySelector("#content")
content.appendChild(carre)
carre.innerText = "Texte"

// Faire apparaître la boîte d'alerte
carre.addEventListener("click", function() {
    alert("")
})
