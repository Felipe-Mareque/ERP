const dados = `{
    "id": 25,
    "nome": "Ka",
    "categoria": "Automóvel",
    "preco": 15000,
    "estoque": 253,
    "status": "ativo"
}`;

// transforme dados em um objeto chamado produto

// depois mostre o nome e o preço
const produto = JSON.parse(dados);
console.log(produto.nome, produto.categoria, produto.estoque);

const produto2 = {
    id: 25,
    nome: "Ka",
    categoria: "Automóvel",
    preco: 15000,
    estoque: 253,
    status: "ativo"
};

const produtoJson = JSON.stringify(produto2);

console.log(produtoJson);

const vetorProdutos = `[
    {
        "id": 1,
        "nome": "Produto A",
        "preco": 100
    },
    {
        "id": 2,
        "nome": "Produto B",
        "preco": 200
    },
    {
        "id": 3,
        "nome": "Produto C",
        "preco": 300
    }
]`

const dadoss = JSON.parse(vetorProdutos);
console.log(dadoss);
console.log(dadoss[0].nome);