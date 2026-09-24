import { Component } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.html'
})
export class Sidebar {
    menuProdutosAberto: boolean = false;
    menuClientesAberto: boolean = false;
    menuVendasAberto: boolean = false;
    menuFinanceiroAberto: boolean = false;
    menuConfiguracoesAberto: boolean = false;

    alternarProdutos(){
        this.menuProdutosAberto = !this.menuProdutosAberto;
    }

    alternarClientes(){
        this.menuClientesAberto = !this.menuClientesAberto;
    }

    alternarVendas(){
        this.menuVendasAberto = !this.menuVendasAberto;
    }


    alternarFinanceiro(){
        this.menuFinanceiroAberto = !this.menuFinanceiroAberto;
    }

    alternarConfiguracoes(){
        this.menuConfiguracoesAberto = !this.menuConfiguracoesAberto;
    }

    menus = [
    {
        id: 1,
        nome: 'Produtos'
    },
    {
        id: 2,
        nome: 'Clientes'
    },
    {
        id: 3,
        nome: 'Vendas'
    },
    {
        id: 4,
        nome: 'Financeiro'
    },
    {
        id: 5,
        nome: 'Configurações'
    }

];
}
