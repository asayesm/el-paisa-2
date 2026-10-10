import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usuarios = [
    { usuario: 'admin', clave: 'admin123', nombre: 'Administrador', rol: 'Administrador', correo: 'admin@cevicheriaelpaisa.pe' },
    { usuario: 'cliente', clave: 'cliente123', nombre: 'Ana Torres', rol: 'Cliente', correo: 'ana.torres@correo.com' },
  ];

  login(usuario: string, clave: string) {
    for (let i = 0; i < this.usuarios.length; i++) {
      const u = this.usuarios[i];
      if (u.usuario === usuario && u.clave === clave) {
        const datos = {
          usuario: u.usuario,
          nombre: u.nombre,
          rol: u.rol,
          correo: u.correo,
          fechaIngreso: new Date(),
        };
        localStorage.setItem('usuario', JSON.stringify(datos));
        return true;
      }
    }
    return false;
  }

  logout() {
    localStorage.removeItem('usuario');
  }

  getUsuario() {
    const texto = localStorage.getItem('usuario');
    if (texto === null) {
      return null;
    }
    return JSON.parse(texto);
  }

  estaLogueado() {
    return localStorage.getItem('usuario') !== null;
  }
}
