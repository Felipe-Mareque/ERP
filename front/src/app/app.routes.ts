import { Routes } from '@angular/router';
import { Login } from './auth/login';
import { Dashboard } from './pages/dashboard/dashboard';

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
    }
];
