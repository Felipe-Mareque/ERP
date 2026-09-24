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
}
