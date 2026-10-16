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

Los datos están en `api/db.json`. La carpeta `api/` tiene su propio `package.json` para desplegarla sola en Render.

- API publicada: https://asayesm.github.io/el-paisa-2/api/productos y /api/ofertas (archivos JSON en `public/api`, generados desde `api/db.json`)
- En desarrollo (`ng serve`) la app usa `http://localhost:3000` (`src/environments/environment.development.ts`); en producción (`ng build`) usa la API publicada (`src/environments/environment.ts`).

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

- Frontend (GitHub Pages): https://asayesm.github.io/el-paisa-2/
- API: https://asayesm.github.io/el-paisa-2/api/productos
- Repositorio: https://github.com/asayesm/el-paisa-2

El backend está en el plan gratuito de Render: se apaga tras unos 15 minutos sin uso y la primera petición puede tardar ~50 segundos en responder.

Configuración del servicio en Render (Web Service): Root Directory `api`, Build Command `npm install`, Start Command `npm start`.

Para volver a publicar en GitHub Pages:

```bash
ng build --base-href /el-paisa-2/
npx angular-cli-ghpages --dir=dist/el-paisa/browser
```
