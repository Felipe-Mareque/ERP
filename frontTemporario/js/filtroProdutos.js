const pills = document.querySelectorAll(".pill");
const produtosFiltro = document.querySelectorAll(".linha-produto"); // nome diferente

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