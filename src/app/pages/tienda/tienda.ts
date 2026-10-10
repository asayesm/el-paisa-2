import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-tienda',
  imports: [NgFor, NgIf, NgClass, FormsModule],
  templateUrl: './tienda.html',
  styleUrl: './tienda.css',
})
export class Tienda implements OnInit {
  nombreNegocio = 'Cevichería El Paisa';
  productos: Producto[] = [];

  nombre = '';
  plato = '';
  atencion = '';
  direccion = '';

  mensaje = '';
  esError = false;

  constructor(private productoService: ProductoService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.productoService.getProductos().subscribe((data) => {
      this.productos = data;
    });
    const platoElegido = this.route.snapshot.queryParamMap.get('plato');
    if (platoElegido !== null) {
      this.plato = platoElegido;
    }
  }

  procesarPedido() {
    if (this.validarPedido()) {
      this.esError = false;
      this.mensaje = this.generarMensajeResumen();
    }
  }

  validarPedido() {
    this.esError = true;
    if (this.nombre === '') {
      this.mensaje = 'Error: Debes ingresar tu nombre.';
      return false;
    }
    if (this.plato === '') {
      this.mensaje = 'Error: Debes elegir un plato.';
      return false;
    }
    if (this.atencion === '') {
      this.mensaje = 'Error: Debes elegir un tipo de atención.';
      return false;
    }
    if (this.atencion === 'Delivery' && this.direccion === '') {
      this.mensaje = 'Error: Para Delivery debes ingresar una dirección.';
      return false;
    }
    return true;
  }

  generarMensajeResumen() {
    let texto = '¡Hola, ' + this.nombre + '! Tu pedido de ' + this.plato + ' para ' + this.atencion + ' ha sido registrado.';
    if (this.atencion === 'Delivery') {
      texto = texto + ' Lo enviaremos a la dirección: ' + this.direccion + '.';
    }
    texto = texto + ' ¡Gracias por elegir ' + this.nombreNegocio + '!';
    return texto;
  }
}
