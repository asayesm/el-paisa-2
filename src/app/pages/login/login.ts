import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [NgIf, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  usuario = 'admin';
  clave = 'admin123';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  ingresar() {
    if (this.usuario === '' || this.clave === '') {
      this.error = 'Debes ingresar usuario y contraseña.';
      return;
    }
    if (this.auth.login(this.usuario, this.clave)) {
      this.router.navigate(['/dashboard']);
    } else {
      this.error = 'Usuario o contraseña incorrectos.';
    }
  }
}
