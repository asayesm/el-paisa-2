import { Component } from '@angular/core';
import { UpperCasePipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, UpperCasePipe, DatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  nombreNegocio = 'Cevichería El Paisa';
  direccion = 'Av. Túpac Amaru 590';
  fecha = new Date();
  imagen = 'img/ceviche-mixto.jpg';
}
