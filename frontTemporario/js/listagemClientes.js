const clientes = [

    {
        id: 1,
        nome: "João da Silva",
        documento: "123.456.789-00",
        telefone: "(53) 99988-2211",
        status: "Ativo"
    },

    {
        id: 2,
        nome: "Empresa XYZ Ltda",
        documento: "12.345.678/0001-90",
        telefone: "(53) 3222-1100",
        status: "Ativo"
    },

    {
        id: 3,
        nome: "Maria Souza",
        documento: "987.654.321-11",
        telefone: "(53) 99877-6655",
        status: "Inativo"
    },

    {
        id: 4,
        nome: "Distribuidora Center",
        documento: "45.678.912/0001-33",
        telefone: "(53) 3225-9988",
        status: "Ativo"
    },

    {
        id: 5,
        nome: "Ateliê Verde Ltda",
        documento: "98.765.432/0001-11",
        telefone: "(53) 3223-4455",
        status: "Ativo"
    }

];

function renderizarClientes(clientesParaMostrar){
      const listaClientes = document.getElementById("listaClientes");
    listaClientes.innerHTML = "";
      
    clientesParaMostrar.forEach(function(cliente){

         const linha = document.createElement("div");
    linha.style.display = "grid";
    linha.style.gridTemplateColumns = "44px 1.6fr 1.1fr  1fr 90px";


    linha.classList.add("linha-tabela");



    listaClientes.appendChild(linha);
    console.log(listaClientes);

    const espacoVazio = document.createElement("div");
    linha.appendChild(espacoVazio);

    const nome = document.createElement("div");
    nome.textContent = cliente.nome;
    linha.appendChild(nome);

    const documento = document.createElement("div");
    documento.textContent = cliente.documento;

    linha.appendChild(documento);

    const telefone = document.createElement("div");
    telefone.textContent = cliente.telefone;
    linha.appendChild(telefone);

    const status = document.createElement("div");

    status.classList.add("badge");

    const bolinha = document.createElement("span");
    bolinha.classList.add("badge__dot");

    const textoStatus = document.createElement("span");
    textoStatus.textContent = cliente.status;

    if ( cliente.status === "Ativo"){
        status.classList.add("badge--ok");
    }

    else {
        status.classList.add("badge--off");
    }

        linha.appendChild(status);
        status.appendChild(bolinha);
        status.appendChild(textoStatus);
    }

)}


const clientesAtivos = clientes.filter(cliente => cliente.status === "Ativo");
const clientesInativos = clientes.filter(cliente => cliente.status === "Inativo" );


const campoBuscaCliente = document.getElementById("campoBusca");

const grupoFiltros = document.getElementById("grupoFiltrosStatus");

grupoFiltros.addEventListener("click", function(event){
    const status = event.target.dataset.status;

    const botoes = grupoFiltros.children;

    for (let botao of botoes){
        botao.classList.remove("ativo");
    }

    event.target.classList.add("ativo");

    if ( status === "Todos" ){
        renderizarClientes(clientes);
    }
    else if ( status === "Ativo" ){
        renderizarClientes(clientesAtivos);
    }
    else {
        renderizarClientes(clientesInativos);
    }
})
renderizarClientes(clientes);

