function processar() {
    let subtotal = parseFloat(document.getElementById('subtotal').value);
    let percentual = parseFloat(document.getElementById('desconto').value);
    let recebido = parseFloat(document.getElementById('recebido').value);
    let total_venda = document.getElementById('total');


    total_venda.value = subtotal * (1 + percentual / 100);
    
}

processar()