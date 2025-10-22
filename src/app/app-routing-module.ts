import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// 1. Importar los componentes
import { LoginComponent } from 'src/app/auth/login';
import { HomeComponent } from './home/home';

// 2. Definir las rutas
const routes: Routes = [
  // Ruta para el login
  { path: 'login', component: LoginComponent },
  
  // Ruta para la pantalla de inicio
  { path: 'inicio', component: HomeComponent },
  
  // Ruta por defecto: si alguien entra a la raíz,
  // redirígirlo al login.
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
