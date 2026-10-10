import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, NgClass, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoService } from '../../services/producto';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-productos',
  imports: [NgFor, NgIf, NgClass, CurrencyPipe, FormsModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos implements OnInit {
  productos: Producto[] = [];
  categorias = ['Todos', 'Ceviches', 'Entradas', 'Fondos', 'Bebidas'];
  categoriaSeleccionada = 'Todos';
  busqueda = '';

  constructor(private productoService: ProductoService, private router: Router) {}

  ngOnInit() {
    this.productoService.getProductos().subscribe((data) => {
      this.productos = data;
    });
  }

  filtrarProductos() {
    let resultado: Producto[] = [];
    for (let i = 0; i < this.productos.length; i++) {
      const p = this.productos[i];
      const categoriaOk = this.categoriaSeleccionada === 'Todos' || p.categoria === this.categoriaSeleccionada;
      const busquedaOk = p.nombre.toLowerCase().includes(this.busqueda.toLowerCase());
      if (categoriaOk && busquedaOk) {
        resultado.push(p);
      }
    }
    return resultado;
  }

  seleccionarPlato(producto: Producto) {
    if (producto.stock === 0) {
      alert('Lo sentimos, este plato está agotado por hoy.');
    } else {
      this.router.navigate(['/tienda'], { queryParams: { plato: producto.nombre } });
    }
  }
}
