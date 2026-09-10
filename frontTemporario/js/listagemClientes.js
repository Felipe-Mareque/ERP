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


function renderizarClientes(clientesParaMostrar) {

    const listaClientes = document.getElementById("listaClientes");

    const linhas = clientesParaMostrar.map(cliente => {
        const statusAtivo = cliente.status === "Ativo";
        const badgeClasse = statusAtivo ? "badge--ok" : "badge--off";

        return `
        <div class="linha-tabela" style="display:grid;grid-template-columns:44px 1.6fr 1.1fr 1fr 90px">
            <div></div>
            <div>${cliente.nome}</div>
            <div>${cliente.documento}</div>
            <div>${cliente.telefone}</div>
            <div class="badge ${badgeClasse}">
                <span class="badge__dot"></span>
                <span>${statusAtivo ? "Ativo" : "Inativo"}</span>
            </div>
        </div>
        `;
    });

    listaClientes.innerHTML = linhas.join("");
}


function aplicarFiltros(filtroStatus, textoBusca) {

    let listaClientes;

    if (filtroStatus === "Todos") {
        // aqui usarei clientes
        listaClientes = clientes;

    } else if (filtroStatus === "Ativo") {
        // aqui usarei clientesAtivos
        listaClientes = clientesAtivos;

    } else {
        // aqui usarei clientesInativos
        listaClientes = clientesInativos;
    }

    let listaClientesCorreta = listaClientes.filter(function(cliente) {

        return cliente.nome.toLowerCase().includes(textoBusca) ||
               cliente.documento.includes(textoBusca) ||
               cliente.telefone.includes(textoBusca);
    });

    renderizarClientes(listaClientesCorreta);
}


const clientesAtivos = clientes.filter(
    cliente => cliente.status === "Ativo"
);

const clientesInativos = clientes.filter(
    cliente => cliente.status === "Inativo"
);


const campoBuscaCliente = document.getElementById("campoBusca");
const grupoFiltros = document.getElementById("grupoFiltrosStatus");

let filtroStatus = "Todos";
let textoBusca = "";


renderizarClientes(clientes);


grupoFiltros.addEventListener("click", function(event) {

    const status = event.target.dataset.status;

    const botoes = grupoFiltros.children;

    for (let botao of botoes) {
        botao.classList.remove("ativo");
    }

    event.target.classList.add("ativo");

    filtroStatus = status;
    aplicarFiltros(filtroStatus, textoBusca);
});


campoBuscaCliente.addEventListener("input", function(event) {

    textoBusca = campoBuscaCliente.value.toLowerCase();

    aplicarFiltros(filtroStatus, textoBusca);
});
