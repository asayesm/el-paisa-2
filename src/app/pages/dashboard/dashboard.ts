import { Component, OnInit } from '@angular/core';
import { NgFor, NgClass, UpperCasePipe, DatePipe, CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';
import { ProductoService } from '../../services/producto';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-dashboard',
  imports: [NgFor, NgClass, UpperCasePipe, DatePipe, CurrencyPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  usuario: any;
  productos: Producto[] = [];

  constructor(private auth: AuthService, private productoService: ProductoService, private router: Router) {
    this.usuario = this.auth.getUsuario();
  }

  ngOnInit() {
    this.productoService.getProductos().subscribe((data) => {
      this.productos = data;
    });
  }

  totalStock() {
    let total = 0;
    for (let i = 0; i < this.productos.length; i++) {
      total = total + this.productos[i].stock;
    }
    return total;
  }

  totalAgotados() {
    let total = 0;
    for (let i = 0; i < this.productos.length; i++) {
      if (this.productos[i].stock === 0) {
        total = total + 1;
      }
    }
    return total;
  }

  cerrarSesion() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
