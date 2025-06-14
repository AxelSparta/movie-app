# 🎬 movie-app

**movie-app** es una aplicación web para explorar, buscar y ver detalles de películas. Está desarrollada con tecnologías frontend y consume datos de una API de películas. Puedes ver la demo en vivo en [moviesparta.netlify.app](https://moviesparta.netlify.app/).

---

## 🧩 Tecnologías utilizadas

- **Frontend**
  - **React**: manejo eficiente de UI con componentes.
  - **React Router**: navegación SPA entre secciones.
  - **Tailwind CSS**: estilado responsivo y moderno.
  - **Vite**: entorno de desarrollo optimizado y rápido.
- **API / Backend**
  - Conexión con **The Movie Database (TMDb)** u otra API pública para obtener datos de películas y series.

---

## 🧭 Características

- ✅ Interfaz limpia y responsiva.
- 🎞️ Listado de películas populares.
- 🔍 Búsqueda por título.
- 🧾 Páginas de detalle: sinopsis, tráiler, calificación, reparto.
- ️ Manejo de estado y loading indicators.
- ⚠️ Gestión de errores (mensajes en caso de fallo en API).

---

## 🚀 Instalación local

1. Clona el repo:
   ```bash
   git clone https://github.com/AxelSparta/movie-app.git
   cd movie-app
2. Instala las dependencias:
   ```bash
   pnpm install
   ```
3. Configura la API_KEY en el archivo .env:
   ```bash
   API_KEY=your_api_key
   ```
4. Ejecuta el servidor de desarrollo:
   ```bash
   pnpm dev
   ```
5. Abre tu navegador y ve a http://localhost:5173 para ver la aplicación.

---

## Estructura del proyecto

```bash
movie-app/
├─ node_modules/               # Dependencias
├─ public/                     # index.html, favicon, etc.
├─ src/
│  ├─ components/             # UI reutilizable (MovieCard, Navbar…)
│  ├─ pages/                  # Vistas (Home, MovieDetail…)
│  ├─ services/               # Lógica de API (TMDb)
│  ├─ hooks/                  # Hooks personalizados
│  ├─ App.jsx                 # Rutas principales
│  └─ index.jsx               # Entrada principal
├─ .env                       # Clave de API
├─ tailwind.config.js
├─ package.json
└─ vite.config.js
```

---

Disponible en: https://moviesparta.netlify.app