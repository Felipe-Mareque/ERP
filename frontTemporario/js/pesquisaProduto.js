const produtos = document.querySelectorAll(".linha-produto");



const campoBusca = document.getElementById("campo-busca-produto");

campoBusca.addEventListener("input",function() {


    const busca = campoBusca.value.toLowerCase();

    console.log(busca);

    produtos.forEach(function(produto){
    const nome = produto.querySelector(".produto-nome");
    const codigo = produto.querySelector(".produto-codigo");

    const codigoProduto = codigo.textContent.toLowerCase();
    const nomeProduto = nome.textContent.toLowerCase();
    if (nomeProduto.includes(busca) || codigoProduto.includes(busca)){
        produto.style.display = "grid";
    }
    else {
        produto.style.display = "none";
    }
    console.log(nome.textContent);
});


});