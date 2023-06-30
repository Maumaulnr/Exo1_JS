

// on veut que le message qui s'affiche dans l'alerte soit la class: carre et qu'il affiche son contenu

const element = document.querySelector("#carre");
const style = window.getComputedStyle(element);

// Faire apparaître la boîte d'alerte
function addAlert() {
    alert(
        "color : " +
        style.color +
        "\n background color: " +
        style.backgroundColor +
        "\n height: " +
        style.height +
        "n\ width: " +
        style.width +
        "n\ display: " +
        style.display
    );
}
