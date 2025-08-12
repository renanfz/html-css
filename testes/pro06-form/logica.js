function expandir() {
    var container = document.getElementById("grupo-nome");
    validar(container)
    container.style.height = "200px";
}

function validar(caixa) {
    var alto = window.getComputedStyle(caixa).height == "200px";


    if (window.getComputedStyle(caixa).height == "200px") {
        caixa.style.height = "30px"
        window.alert("Caixa expandida")
    } else {
        window.alert("Caixa minimizada")
    }

}