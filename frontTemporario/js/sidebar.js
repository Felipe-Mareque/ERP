const itensExpansiveis = document.querySelectorAll(".sidebar-item--expandable");

itensExpansiveis.forEach(function (item) {

    const subItens = item.nextElementSibling;
    /* pega o proximo elemento html com os subItens dentro dele, fazendo
    um efeito de hierarquia seja criado
    */
    subItens.classList.add("sidebar-subitens--recolhido");
    item.addEventListener("click",function(){

    subItens.classList.toggle("sidebar-subitens--recolhido");
    item.classList.toggle("aberto");

    })
});


/*
    A estrutura HTML da sidebar é organizada em itens expansíveis e seus respectivos subitens.
    O querySelectorAll() encontra todos os itens que possuem a classe de item expansível.
    O forEach() percorre cada um desses itens individualmente.
    O nextElementSibling() encontra o bloco de subitens correspondente ao item atual.
    Os subitens recebem inicialmente a classe "sidebar-subitens--recolhido", deixando-os ocultos.
    O addEventListener() identifica quando o usuário clica em um item da sidebar.
    O classList.toggle() adiciona ou remove a classe "sidebar-subitens--recolhido".
    Dessa forma, os subitens são exibidos quando a classe é removida e ocultados quando ela é adicionada.
    O toggle() também é utilizado na classe "aberto" para controlar a rotação da seta do item.
    Assim, cada item possui seu próprio estado de aberto ou fechado, sem interferir nos demais.
*/

