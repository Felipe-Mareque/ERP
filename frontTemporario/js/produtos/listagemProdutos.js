let produtos = [
    {
        id: "e123",
        sku: "2030",
        nome: "notebook",
        categoria: "eletronico",
        preco: 1500,
        estoque: 18,
        status: "ativo"
    },
    {
        id: "p123",
        sku: "2040",
        nome: "mouse",
        categoria: "periferico",
        preco: 123,
        estoque: 52,
        status: "ativo"


    },
     {
        id: "i123",
        sku: "3040",
        nome: "cabo de rede",
        categoria: "internet",
        preco: 0.50,
        estoque: 320,
        status: "ativo"


    },


]

/* ===== CÓDIGO ANTIGO (renderização direta, sem paginação) — mantido como comentário =====

 const nomes = produtos.map(produto => {
        return produto.nome;
    })

    console.log(nomes[0]);

    const corpoTabela = document.getElementById("corpoTabela");
    console.log(corpoTabela);

    const linhas = produtos.map (produto =>{
    const statusAtivo = produto.status === "ativo";
    const badgeClasse = statusAtivo ? "badge--ok" : "badge--off";
    const statusTexto = statusAtivo ? "Ativo" : "Inativo";
    const precoFormatado = produto.preco.toFixed(2).replace(".", ",");

    return `
    <tr class="linha-produto">
          <td class="produto-codigo tabela__celula--sub">${produto.sku}</td>
          <td class="produto-nome">${produto.nome}</td>
          <td class="produto-categoria tabela__celula--sub">${produto.categoria}</td>
          <td class="produto-preco tabela__celula--right">R$ ${precoFormatado}</td>
          <td class="produto-estoque tabela__celula--center">${produto.estoque}</td>
          <td class="produto-status tabela__celula--center">
              <span class="badge ${badgeClasse}">${statusTexto}</span>
          </td>
          <td class="tabela__acoes">
              <i class="ti ti-eye" aria-hidden="true"></i>
              <i class="ti ti-edit" aria-hidden="true"></i>
              <i class="ti ti-trash icone-excluir" aria-hidden="true"></i>
          </td>
    </tr>
    `
})
console.log(linhas);

corpoTabela.innerHTML = linhas.join("");
console.log(document.querySelectorAll(".linha-produto"));

const precos = produtos.map(produto =>{
    return produto.preco;

})


const estoques = produtos.map (produto => {
    return produto.estoque;
})

const informacoes = produtos.map (produto => {
    const frases = `
        ${produto.nome} - R$ ${produto.preco}
    `;
    return frases;
});

===== FIM DO CÓDIGO ANTIGO ===== */


const corpoTabela = document.getElementById("corpoTabela");


// mesmo padrão usado em listagemClientes.js: uma função de renderização
// que recebe apenas os itens da página atual e é chamada pela classe paginizacao
function renderizarProdutos(produtosParaMostrar) {

    const linhas = produtosParaMostrar.map(produto => {
        const statusAtivo = produto.status === "ativo";
        const badgeClasse = statusAtivo ? "badge--ok" : "badge--off";
        const statusTexto = statusAtivo ? "Ativo" : "Inativo";
        const precoFormatado = produto.preco.toFixed(2).replace(".", ",");

        return `
        <tr class="linha-produto">
              <td class="produto-codigo tabela__celula--sub">${produto.sku}</td>
              <td class="produto-nome">${produto.nome}</td>
              <td class="produto-categoria tabela__celula--sub">${produto.categoria}</td>
              <td class="produto-preco tabela__celula--right">R$ ${precoFormatado}</td>
              <td class="produto-estoque tabela__celula--center">${produto.estoque}</td>
              <td class="produto-status tabela__celula--center">
                  <span class="badge ${badgeClasse}">${statusTexto}</span>
              </td>
              <td class="tabela__acoes">
                  <i class="ti ti-eye" aria-hidden="true"></i>
                  <i class="ti ti-edit" aria-hidden="true"></i>
                  <i class="ti ti-trash icone-excluir" aria-hidden="true"></i>
              </td>
        </tr>
        `;
    });

    corpoTabela.innerHTML = linhas.join("");
}


const paginacaoProdutos = new paginizacao(produtos, 3, "paginacaoProdutos",
    (itensDaPagina) => {
        renderizarProdutos(itensDaPagina);
    }
);
console.log(paginacaoProdutos);


// estado dos filtros compartilhado com pesquisaProduto.js e filtroProdutos.js
let filtroStatusProduto = "Todos";
let textoBuscaProduto = "";


function aplicarFiltrosProdutos(filtroStatus, textoBusca) {

    let listaProdutos;

    if (filtroStatus === "Todos") {
        listaProdutos = produtos;

    } else if (filtroStatus === "Ativo") {
        listaProdutos = produtosAtivos;

    } else {
        listaProdutos = produtosInativos;
    }

    let listaProdutosCorreta = listaProdutos.filter(function(produto) {

        return produto.nome.toLowerCase().includes(textoBusca) ||
               produto.sku.toLowerCase().includes(textoBusca);
    });

    paginacaoProdutos.atualizarItens(listaProdutosCorreta);
}


const produtosAtivos = produtos.filter(
    produto => produto.status === "ativo"
);

const produtosInativos = produtos.filter(
    produto => produto.status === "inativo"
);


renderizarProdutos(paginacaoProdutos.obterItensPagina());
