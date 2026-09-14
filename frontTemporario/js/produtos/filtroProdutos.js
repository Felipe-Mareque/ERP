const pills = document.querySelectorAll(".pill");
const produtosFiltro = document.querySelectorAll(".linha-produto"); // nome diferente

/* ===== CÓDIGO ANTIGO (filtro escondendo linhas direto no DOM, sem paginação) — mantido como comentário =====

  pills.forEach(function(pill){
        pill.addEventListener("click",function(){
            pills.forEach(function(outroPill){
                outroPill.classList.remove("ativo");
            });
            pill.classList.add("ativo")

            produtosFiltro.forEach(function(produto){  // usa o nome novo aqui também
                const status = produto.querySelector(".badge");
                const valorStatus = status.textContent.trim();
                const textoPill = pill.textContent.trim();

                if (textoPill === "Todos") {
                    produto.style.display = "grid";
                }
                else if (textoPill === "Ativos") {
                    produto.style.display = (valorStatus === "Ativo") ? "grid" : "none";
                }
                else if (textoPill === "Inativos") {
                    produto.style.display = (valorStatus === "Inativo") ? "grid" : "none";
                }
            });
        });
  });

===== FIM DO CÓDIGO ANTIGO ===== */


// mesmo padrão de listagemClientes.js: o clique só troca o filtro ativo e
// pede pra aplicarFiltrosProdutos (em listagemProdutos.js) refazer a
// filtragem do array e repaginar
pills.forEach(function(pill){
    pill.addEventListener("click", function(){

        pills.forEach(function(outroPill){
            outroPill.classList.remove("ativo");
        });
        pill.classList.add("ativo");

        filtroStatusProduto = pill.dataset.status;

        aplicarFiltrosProdutos(filtroStatusProduto, textoBuscaProduto);
    });
});
