
// Formulário
const formulario = document.getElementById("form-cadastro-produto");

// Informações do produto
const sku = document.getElementById("sku-produto");
const categoria = document.getElementById("categoria-produto");
const codigoBarras = document.getElementById("codigo-barras");
const marca = document.getElementById("marca-produto");
const descricao = document.getElementById("descricao-produto");
const nomeProduto = document.getElementById("nome-produto");

// Preços
const precoCusto = document.getElementById("preco-custo");
const precoVenda = document.getElementById("preco-venda");
const margemLucro = document.getElementById("margem-lucro");

// Estoque 
const estoqueInicial = document.getElementById("estoque-inicial");
const unidadeMedida = document.getElementById("unidade-medida");
const estoqueMinimo = document.getElementById("estoque-minimo");

// Mensagem de erro
const erroNomeProduto = document.getElementById("erro-nome-produto");
const erroSkuProduto = document.getElementById("erro-sku-produto");
const erroCategoriaProduto = document.getElementById("erro-categoria-produto");
const erroPrecoVenda = document.getElementById("erro-preco-venda");
const erroEstoqueInicial = document.getElementById("erro-estoque-inicial");

// Mensagem Sucesso
const mensagemSucesso = document.getElementById("mensagem-sucesso");

// Botões 
const botaoCancelar = document.getElementById("botao-cancelar");
const botaoSalvarNovo = document.getElementById("botao-salvar-novo");
const botaoSalvar = document.getElementById("botao-salvar");

// ---------------------------------------------------------------------------------

function campoVazio(campo){
    return campo.value === "";
}

function validarCampo (campo, erro){
    
    if (campoVazio(campo)){
        erro.textContent = "Campo obrigatorio";
        erro.classList.add("mensagem-erro--visivel");
        return false;
    }
    else {
        erro.textContent = "";
        erro.classList.remove("mensagem-erro--visivel");
    }
    return true;
}

function validarPreco(valor,erro){
    const numero = Number(valor.value);

    if (campoVazio(valor) || isNaN(numero) || numero<= 0){
        erro.textContent = "Digite novamente";
        erro.classList.add("mensagem-erro--visivel");
        return false;
    }
    else {
        erro.textContent = "";
        erro.classList.remove("mensagem-erro--visivel");
        return true;
    }
}

function calcularMargem(custo, venda){
    const custoTotal = Number(custo.value);
    const vendaTotal = Number(venda.value);

    if (custoTotal<=0){
        return;
    }

    return ((vendaTotal - custoTotal)/custoTotal)*100;
}

function criarProduto(){
    const produto = {
    nome: nomeProduto.value,
    sku: sku.value,
    categoria: categoria.value,
    codigoBarras: codigoBarras.value,
    marca: marca.value,
    descricao: descricao.value,
    precoCusto: Number(precoCusto.value),
    precoVenda: Number(precoVenda.value),
    estoqueInicial: Number(estoqueInicial.value),
    unidadeMedida: unidadeMedida.value,
    estoqueMinimo: Number(estoqueMinimo.value)
};
    return produto;
};

function validarFormulario(){
    const nomeValido = validarCampo(nomeProduto, erroNomeProduto);
    const skuValido = validarCampo(sku, erroSkuProduto);
    const categoriaValida = validarCampo(categoria, erroCategoriaProduto);
    const precoValido = validarPreco(precoVenda, erroPrecoVenda);
    const estoqueValido = validarCampo(estoqueInicial, erroEstoqueInicial);

    return nomeValido &&
           skuValido &&
           categoriaValida &&
           precoValido &&
           estoqueValido;
}
// ----------------------------------------------------------------------------------

    const produtos = [];

formulario.addEventListener("submit",function(event){
    event.preventDefault();

     const validado = validarFormulario();
     
     if (validado === true){
          const produto = criarProduto();
          produtos.push(produto);
          console.log(produto);
     }
   

    
    console.log(produtos);
}
)

precoVenda.addEventListener("input",function(){

    const margem = calcularMargem(precoCusto, precoVenda);

    if (margem === undefined){
        margemLucro.textContent = "-";
        return;
    }

    margemLucro.textContent = margem.toFixed(2) + "%";
})



