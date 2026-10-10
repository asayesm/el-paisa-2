import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, NgIf],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  mensajes = [
    '¡Promo del día: Ceviche con 10% de descuento!',
    'Delivery gratis por compras mayores a S/ 50',
    '¡Prueba nuestro nuevo Arroz con Mariscos!',
    'Atención en salón de 8 AM a 10 PM',
  ];
  notificacion = this.mensajes[Math.floor(Math.random() * this.mensajes.length)];

  constructor(public auth: AuthService, private router: Router) {}

  cerrarSesion() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
