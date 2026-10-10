import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto, Oferta } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getProductos() {
    return this.http.get<Producto[]>(this.url + '/productos');
  }

  getOfertas() {
    return this.http.get<Oferta[]>(this.url + '/ofertas');
  }
}
