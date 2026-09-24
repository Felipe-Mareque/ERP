import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.html',
    imports: [FormsModule]
})
export class Login {

    constructor(private router: Router){

        }

    email: string = "";
    senha: string = "";
    mensagemErro: string = "";

    entrar(){
        if(this.email === "administrador@gmail.com" && this.senha === "123456"){
            this.mensagemErro = "";
            this.router.navigate(['/dashboard']);
        }
        else{
            this.mensagemErro = "Email ou senha incorretos.";
        }
    }

}