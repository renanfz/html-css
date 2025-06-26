function processar() {
    validar()
    let subtotal = parseFloat(document.getElementById('subtotal').value);
    let percentual = parseFloat(document.getElementById('desconto').value);
    let recebido = parseFloat(document.getElementById('recebido').value);
    let troco = document.getElementById('troco');
    let total_venda = document.getElementById('total');

    total_venda.value = subtotal * (1 + percentual / 100);
    total_venda.toLocaleString('pt-br', {style: 'currency'})
    troco.value = recebido - parseFloat(total_venda.value);

}

function validar() {
    let subtotal = document.getElementById('subtotal');
    let percentual = document.getElementById('desconto');
    let recebido = document.getElementById('recebido');

    if (!percentual.checkValidity()) {
        window.alert('Campo Percentual inválido!')
        return;
    } else {
        processar();
    }
}

/* 
processar() */