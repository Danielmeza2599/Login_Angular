import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// 1. Importar los componentes
import { login } from './auth/login/login';
import { Home } from './home/home';

// 2. Definir las rutas
const routes: Routes = [
  // Ruta para el login
  { path: 'login', component: login },
  
  // Ruta para la pantalla de inicio
  { path: 'inicio', component: Home },
  
  // Ruta por defecto: si alguien entra a la raíz,
  // redirígirlo al login.
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
