import { Routes } from '@angular/router';
import { Login } from './auth/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { EdicaoClienteComponent } from './pages/clientes/edicaoCliente/edicao_cliente';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    },

    {
        path: "login",
        component: Login
    },

    {
        path: "dashboard",
        component: Dashboard
    },

    {
        path: "clientes/editar",
        component: EdicaoClienteComponent
    }
];