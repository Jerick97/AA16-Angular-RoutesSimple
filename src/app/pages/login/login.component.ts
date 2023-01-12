import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  correcto : boolean = false;
  incorrecto : boolean = false;
  errorMessage !: string;
  public formRegister !: FormGroup;
  //Almacenamos el usuario y contraseña de manera local
  usuarios : any[] = [
    {
      username : "admin",
      password : "123"
    }
  ]

  constructor(private formBuilder:FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      usuario:['',[
        Validators.required,
        Validators.minLength(5)
      ]],
      password:['',[
        Validators.required,
        Validators.minLength(3)
      ]],
    })
  }
  send(): any{
    // Obtener los valores de usuario y contraseña ingresados
    const username = this.formRegister.get('usuario')?.value;
    const password = this.formRegister.get('password')?.value;

    // Verificar si el usuario y la contraseña ingresados coinciden con alguno de los registros almacenados
    const userExists = this.usuarios.some(user => {
      return user.username === username && user.password === password;
    });
    
    // Si el usuario y la contraseña son válidos
    if (userExists) {
      this.correcto = true;
      // Redirigir al usuario a la página deseada
      this.router.navigate(['/paises']);
    } else {
      this.incorrecto = true;
      // Mostrar un error al usuario
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }

    //Después de 3 Segundos, Reinicia el Form
    setTimeout(() => {
      this.correcto = false;
      this.incorrecto = false;
      this.formRegister.reset();
      
    }, 3000);
  }


}
