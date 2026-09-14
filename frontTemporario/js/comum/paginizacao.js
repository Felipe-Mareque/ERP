class paginizacao{

    constructor (itens, itensPorPagina, idElemento, aoMudarPagina){
        this.itens = itens;
        this.itensPorPagina = itensPorPagina;
        this.idElemento = idElemento;
        this.paginaAtual = 1;
        this.elemento = document.getElementById(idElemento);
        this.aoMudarPagina = aoMudarPagina;
        
        this.totalPaginas = Math.ceil(
            this.itens.length / this.itensPorPagina);

        this.botaoAnterior = this.elemento.querySelector(".paginacao__pagina--anterior");
        this.botaoProxima = this.elemento.querySelector(".paginacao__pagina--proxima");
        this.informacao = this.elemento.querySelector(".paginacao__info");

        // pegar os botoes dentro do construtor favore a otimização para manter futuros arquivos
        // que sigam o mesmo modelo de apresentacao por paginação

        this.botaoAnterior.addEventListener("click", () => {
            this.anteriorPagina();
        });


        this.botaoProxima.addEventListener ("click",() =>{
            this.proximaPagina();


        
    });
    /* usa-se arrow function pois ela consegue guardar informações do this anterior
    pois com o addEventListener comum, cria-se uma nova function, e o this de chamada 
    de alteração de página está somente no escopo interno dessa nova function.
    e com a arrow function conseguimos capturar o this do contexto externo;
    */
        this.atualizarInformacao();
}


    obterItensPagina(){
        let inicio = (this.paginaAtual - 1) * this.itensPorPagina;
        let fim = inicio + this.itensPorPagina;

        return this.itens.slice(inicio, fim); // retorna uma cópia de parte de um array
    }

    proximaPagina(){

        if( this.paginaAtual < this.totalPaginas){
         this.paginaAtual++;
         this.aoMudarPagina(this.obterItensPagina());
         this.atualizarInformacao();
         return true;
         }

         return false;
    }

    anteriorPagina(){
        if ( this.paginaAtual > 1 ){    
            this.paginaAtual--;
            this.aoMudarPagina(this.obterItensPagina());
            this.atualizarInformacao();
          return true;  
        }

         return false;
    }

    atualizarItens(novosItens){
        this.itens = novosItens;

        this.totalPaginas = Math.ceil(this.itens.length/this.itensPorPagina);

        this.paginaAtual = 1;
        this.atualizarInformacao();

        // CORREÇÃO: faltava chamar a callback aqui. Sem essa linha, a classe
        // atualizava seus próprios números (totalPaginas, paginaAtual), mas
        // nunca avisava quem estava "escutando" que a lista de itens mudou —
        // por isso o listagemClientes.js precisava chamar renderizarClientes()
        // manualmente por fora, duplicando a responsabilidade que a callback
        // já deveria cobrir sozinha.
        this.aoMudarPagina(this.obterItensPagina());
    }

    atualizarInformacao(){
        this.informacao.textContent = `Página ${this.paginaAtual} de ${this.totalPaginas}`;
    }

}