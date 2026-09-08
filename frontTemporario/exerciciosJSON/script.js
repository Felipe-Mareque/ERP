const resposta = fetch("./produtos.json") 
    .then(response => response.json())
    .then(produtos => {
     const nomes = produtos.map(produto=> produto.nome);
     const produtosFormatados = produtos.map( produto => `${produto.nome} - R$ ${produto.preco}`);
    console.log(produtosFormatados);
});



fetch("./produtos.json")
    .then(response => response.json())
    .then(produtos => {

        const produtosComDesconto = produtos.map(produto => ({
            
            nome: produto.nome,
            preco: produto.preco *0.9,
            id: produto.id,
            categoria: produto.categoria,
            estoque: produto.estoque,


        }));

        console.log(produtosComDesconto);
    });