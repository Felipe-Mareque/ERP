// Tipos básicos
let nome: string = "Felipe";
let idade: number = 20;
let estudante: boolean = true;


// Arrays
const nomes: string[] = ["Felipe", "João", "Maria"];
nomes.push("Carlos");

const idades: number[] = [18, 20, 25];
idades.push(30);


// Objeto simples
const clienteSimples = {
    id: 1,
    nome: "Felipe",
    telefone: "99999-9999",
    ativo: true
};


// Interface
interface Cliente {
    id: number;
    nome: string;
    telefone?: string;
    status: StatusCliente;
}


// Type para representar os status possíveis
type StatusCliente = "Ativo" | "Inativo";


// Objeto utilizando a interface
const cliente: Cliente = {
    id: 1,
    nome: "Felipe",
    telefone: "99999-9999",
    status: "Ativo"
};


// Array de objetos Cliente
const clientes: Cliente[] = [
    {
        id: 1,
        nome: "Felipe",
        telefone: "99999-9999",
        status: "Ativo"
    },
    {
        id: 2,
        nome: "João",
        telefone: "98888-8888",
        status: "Inativo"
    }
];


// Acessando propriedades
console.log(clientes[0].nome);
console.log(clientes[1].status);


// map() com objetos tipados
const nomesDosClientes = clientes.map(cliente => cliente.nome);

console.log(nomesDosClientes);


// Union type
type Identificador = number | string;

let identificador: Identificador;

identificador = 10;
identificador = "CLI001";


// null
let telefone: string | null;

telefone = "99999-9999";
telefone = null;


// Função com parâmetros e retorno tipados
function somar(a: number, b: number): number {
    return a + b;
}

console.log(somar(10, 20));


// Função calculando dobro
function calcularDobro(numero: number): number {
    return numero * 2;
}

console.log(calcularDobro(10));


// Função que recebe um Cliente
function mostrarCliente(cliente: Cliente): void {
    console.log(cliente.nome);
}

mostrarCliente(cliente);


// Também podemos passar o objeto diretamente
mostrarCliente({
    id: 3,
    nome: "Maria",
    status: "Ativo"
});