import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [NgIf, FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  nombre = '';
  correo = '';
  mensaje = '';
  enviado = false;
  error = '';

  enviar() {
    if (this.nombre === '' || this.correo === '' || this.mensaje === '') {
      this.error = 'Completa todos los campos.';
      this.enviado = false;
      return;
    }
    if (!this.correo.includes('@')) {
      this.error = 'Ingresa un correo válido.';
      this.enviado = false;
      return;
    }
    this.error = '';
    this.enviado = true;
    this.nombre = '';
    this.correo = '';
    this.mensaje = '';
  }
}
