import { Component, OnInit } from '@angular/core';
import { NgFor, NgStyle, CurrencyPipe, DatePipe, PercentPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductoService } from '../../services/producto';
import { Oferta, Producto } from '../../models/producto';

@Component({
  selector: 'app-ofertas',
  imports: [NgFor, NgStyle, CurrencyPipe, DatePipe, PercentPipe, RouterLink],
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.css',
})
export class Ofertas implements OnInit {
  ofertas: Oferta[] = [];
  productos: Producto[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    this.productoService.getOfertas().subscribe((data) => {
      this.ofertas = data;
    });
    this.productoService.getProductos().subscribe((data) => {
      this.productos = data;
    });
  }

  buscarProducto(id: string) {
    for (let i = 0; i < this.productos.length; i++) {
      if (this.productos[i].id === id) {
        return this.productos[i];
      }
    }
    return null;
  }

  precioFinal(oferta: Oferta) {
    const producto = this.buscarProducto(oferta.productoId);
    if (producto === null) {
      return 0;
    }
    return producto.precio - producto.precio * oferta.descuento;
  }

  colorDescuento(descuento: number) {
    if (descuento >= 0.5) {
      return 'red';
    }
    if (descuento >= 0.2) {
      return 'orange';
    }
    return 'blue';
  }
}
