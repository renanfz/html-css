
function processar() {
    /* validar() */
    let subtotal = parseFloat(document.getElementById('subtotal').value);
    let percentual = parseFloat(document.getElementById('desconto').value);
    let recebido = parseFloat(document.getElementById('recebido').value);
    let troco = document.getElementById('troco');
    let total_venda = document.getElementById('total');
    
    let total_calculado = subtotal * (1 - percentual / 100);
    total_venda.value = total_calculado.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    troco.value = (recebido - total_calculado).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    
}

document.getElementById('formulario').addEventListener('submit', function (e) {
    // Se o formulário for inválido, ele não chama isso aqui
    e.preventDefault(); // impede o envio, mas valida antes
    processar();
});
/* function validar() {
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



processar() */