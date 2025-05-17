var executada = false;

function enviar() {
    var btn = document.getElementById("btn");
    var msg = document.getElementById("msg");

    if (!validar(msg)) {
        return;
    }

    if (!executada) {
        window.alert("Obrigado por compartilhar!")
        exibir(msg.value)
        msg.value = ''
        executada = true;
    } else {
        window.alert("Você já enviou uma resposta!")
    }
}

function validar(textbox) {
    if (textbox.value.trim() === '') {
        window.alert("O campo está vazio!")
        return false;
    }
    return true;
}

function exibir(mensg) {
    var hora = `${new Date().getHours()}:${new Date().getMinutes()}`;

    var popup = document.getElementById("resposta");
    popup.innerHTML = `<h4>Você</h4>
                       <p>${mensg}</p>
                       <p id="hora">${hora}</p>`
    popup.style.transition = "2s"
    popup.style.display = "block"
}