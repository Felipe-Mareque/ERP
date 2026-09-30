import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Sidebar } from '../../../components/sidebar/sidebar';

interface Cliente {
    nome: string;
    tipo: string;
    cpfCnpj: string;
    nomeFantasia: string;
    observacoes: string;
    telefone: string;
    email: string;
    contatoPreferencial: string;
    rua: string;
    numero: string;
    cidade: string;
    uf: string;
    cep: string;
    ativo: boolean;
}

@Component({
    selector: 'app-edicao-cliente',
    templateUrl: './edicao_cliente.html',
    imports: [FormsModule, JsonPipe, Sidebar]
})
export class EdicaoClienteComponent {

    cliente: Cliente ={
    nome: 'Felipaço',
    tipo: 'Pessoa física',
    cpfCnpj: '123.456.789-00',
    nomeFantasia: '',
    observacoes: 'Cliente preferencial, sempre paga à vista.',
    telefone: '(53) 99988-2211',
    email: 'joao.silva@email.com',
    contatoPreferencial: 'WhatsApp',
    rua: 'Rua Gonçalves Chaves',
    numero: '1290',
    cidade: 'Pelotas',
    uf: 'RS',
    cep: '96015-560',
    ativo: true
    };

    desativarCliente(){
        this.cliente.ativo = false;
    }

    ativarCliente(){
        this.cliente.ativo = true;
    }

    alternarStatusCliente(){
        if (this.cliente.ativo) {
            this.desativarCliente();
        } else {
            this.ativarCliente();
        }
    }
}