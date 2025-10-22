import { Component} from '@angular/core';
// 1. Importar el Router
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})

export class login {

  // 2. Inyectar el Router en el constructor
  //    Angular lo da automáticamente.
  constructor(private router: Router) { }


 // 3. Define la función login() que se decalro en el (ngSubmit) HTML
  login() {
    console.log('Botón de login presionado');
    
    // 4. Aquí se realiza la navegación
    //    Usando el método .navigate() y pasandole un array
    //    con la ruta a la que se quiera ir (la que se definio en el routing).
    this.router.navigate(['/inicio']);
  }
}

