function adicionarTarefa() {
    let input = document.getElementById('inputTarefa');
    let lista = document.getElementById('lista')
    let item = document.createElement('li')
    let msg = document.querySelector('p')

    if (msg) {
        msg.remove()
    }

    item.textContent = input.value
    lista.appendChild(item)
    input.value = ' '
    input.focus()
}

function verificarCampo(campo) {
    if (campo.value == ' ') {
        
    }
}
