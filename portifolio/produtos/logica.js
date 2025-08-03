lucide.createIcons();


/* Produtos */
const smartphone = document.getElementById('smartphone')
const headphone = document.getElementById('headphone')
const mouse = document.getElementById('mouse')
const desktop = document.getElementById('desktop')
const carrinho = document.getElementById('carrinho')
const listaProdutos = []

function adicionarItem(idProduto) {
    const produto = document.getElementById(idProduto)
    listaProdutos.push(produto)
    carrinho.appendChild(produto)
    console.log(listaProdutos)
}














/* const minhaDiv = document.createElement("div");
minhaDiv.innerHTML = `
  <h2>Olá, Renan!</h2>
  <p>Isso aqui está dentro da div.</p>
`;

const arrayDeDivs = [];
arrayDeDivs.push(minhaDiv);

console.log(arrayDeDivs[0]); */ // mostra a div completa com seu conteúdo