function adicionarTarefa() {
    let input = document.getElementById('inputTarefa');
    let lista = document.getElementById('lista')
    let item = document.createElement('li')
    let msg = document.querySelector('p')

    input.addEventListener('keypress', function() {
        this.style.borderColor = 'white'
    })
    
    if (!verificarCampo(input)) { // Se for false
        return;
    }
    
    if (msg) {
        msg.remove()
    }

    item.textContent = input.value
    lista.appendChild(item)
    input.value = ' '
    input.focus()
}

function verificarCampo(campo) {
    if (campo.value.trim() == '') {
        campo.style.borderColor = 'red';
        campo.placeholder = 'Campo obrigatório!';
        return false
    }
    return true
}
