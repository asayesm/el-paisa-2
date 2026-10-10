# Cevichería El Paisa

Aplicación web tipo e-commerce de la **Cevichería El Paisa** (Av. Túpac Amaru 590, Santa Anita, Lima), desarrollada en Angular para la PC2 del curso **JavaScript Avanzado – Sección 21753** de la Universidad Tecnológica del Perú.

Es la continuación del proyecto de la PC1 (HTML, Bootstrap y JavaScript), ahora organizado en componentes de Angular.

## Integrantes

| Integrante | Código |
|---|---|
| Herbert Alain Gadea Mendoza | U24239559 |
| Amir Angel Manuel Santos Quispe | U24223757 |
| José Antonio Morón Llanco | U23325181 |
| Angel Augusto Sayes Malpartida | U23202144 |
| Solange Angely Luna Astocaza | U24208136 |

Docente: Kevin Edgar Salazar Ruiz

## Tecnologías

- Angular 21
- Bootstrap 5 y Bootstrap Icons
- JSON Server
- HTML, CSS y TypeScript

## Instalación

Requisitos: Node.js y Angular CLI (`npm install -g @angular/cli`).

```bash
git clone https://github.com/asayesm/el-paisa-2.git
cd el-paisa-2
npm install --legacy-peer-deps
```

## Ejecución

Se necesitan dos terminales:

```bash
# Terminal 1: API con JSON Server (http://localhost:3000)
npm run api

# Terminal 2: aplicación Angular (http://localhost:4200)
ng serve
```

## Usuarios de prueba

| Usuario | Contraseña | Rol |
|---|---|---|
| `admin` | `admin123` | Administrador |
| `cliente` | `cliente123` | Cliente |

## Páginas

| Ruta | Página | Descripción |
|---|---|---|
| `/` | Home | Portada del negocio |
| `/productos` | Productos | Carta cargada desde JSON Server, con buscador y filtro por categoría |
| `/ofertas` | Ofertas | Promociones con precio con descuento |
| `/tienda` | Tienda | Formulario para realizar un pedido |
| `/contacto` | Contacto | Datos del local y formulario de contacto |
| `/mi-cuenta` | Mi Cuenta | Datos del usuario que inició sesión |
| `/login` | Login | Inicio de sesión simulado con LocalStorage |
| `/dashboard` | Dashboard | Página protegida: si no hay sesión redirige al Home |
| cualquier otra | 404 | Página no encontrada |

## API (JSON Server)

Los datos están en `db.json`:

| Endpoint | Descripción |
|---|---|
| `GET /productos` | Lista de platos (nombre, imagen, categoría, precio y stock) |
| `GET /ofertas` | Lista de ofertas |

## Estructura

```
src/app
├── components
│   ├── navbar        Barra de navegación reutilizable
│   └── footer        Pie de página reutilizable
├── pages             Home, Productos, Ofertas, Tienda, Contacto, Mi Cuenta, Login, Dashboard y 404
├── services
│   ├── producto.ts   Consumo de la API con HttpClient
│   └── auth.ts       Login, logout y sesión en LocalStorage
├── guards
│   └── auth-guard.ts Protege la ruta /dashboard
└── models
    └── producto.ts   Interfaces Producto y Oferta
```

## Despliegue

- Proyecto desplegado: https://asayesm.github.io/el-paisa-2/
- Repositorio: https://github.com/asayesm/el-paisa-2

Para ver los productos en la versión publicada, JSON Server debe estar corriendo en la misma computadora (`npm run api`).

Para volver a publicar en GitHub Pages:

```bash
ng build --base-href /el-paisa-2/
npx angular-cli-ghpages --dir=dist/el-paisa/browser
```
