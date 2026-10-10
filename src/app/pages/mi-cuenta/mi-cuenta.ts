import { Component } from '@angular/core';
import { NgIf, UpperCasePipe, LowerCasePipe, DatePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-mi-cuenta',
  imports: [NgIf, RouterLink, UpperCasePipe, LowerCasePipe, DatePipe],
  templateUrl: './mi-cuenta.html',
  styleUrl: './mi-cuenta.css',
})
export class MiCuenta {
  usuario: any;

  constructor(private auth: AuthService, private router: Router) {
    this.usuario = this.auth.getUsuario();
  }

  cerrarSesion() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
