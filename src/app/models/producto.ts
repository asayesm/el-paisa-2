export interface Producto {
  id: string;
  nombre: string;
  imagen: string;
  categoria: string;
  precio: number;
  stock: number;
  descripcion: string;
}

export interface Oferta {
  id: string;
  productoId: string;
  titulo: string;
  descripcion: string;
  descuento: number;
  vence: string;
}
