import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto, Oferta } from '../models/producto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  url = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getProductos() {
    return this.http.get<Producto[]>(this.url + '/productos');
  }

  getOfertas() {
    return this.http.get<Oferta[]>(this.url + '/ofertas');
  }
}
