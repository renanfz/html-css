function adicionarTarefa() {
    let input = document.getElementById('inputTarefa').value;
    let lista = document.getElementById('lista')
    let item = document.createElement('li')
    let msg = document.querySelector('p')
    msg.remove()
    item.textContent = input
    lista.appendChild(item)


    
    return alert(item)
}
