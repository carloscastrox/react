# React App — Vite + Bootstrap (Feature‑Based)

Proyecto base en **React** creado con **Vite**, organizado con **arquitectura Feature‑Based**, estilos con **Bootstrap** y preparado para **despliegue continuo en GitHub Pages** mediante **GitHub Actions**.

> **Autor:** Carlos Andrés Castro Jaramillo  
> **Licencia:** MIT

---

## 🚀 Demo

- **Producción (GitHub Pages):** `https://<tu-usuario>.github.io/<tu-repo>/`
- **Build local (preview):** `http://localhost:4173` (tras `npm run build && npm run preview`)  
  > El comando `vite preview` sirve para **previsualizar el build localmente**, no es un servidor de producción. 

---

## 🧰 Stack

- **React** (SPA)
- **Vite** (desarrollo ultrarrápido y build optimizado)
- **Bootstrap 5** (+ Bootstrap Icons opcional)
- **ESLint** (reglas recomendadas)
- **React Router** (opcional; ver sección de Rutas)

---

## 📦 Requisitos

- **Node.js** LTS y **npm** instalados.

---

## ⚙️ Instalación y uso

```bash
# 1) Instalar dependencias
npm install

# 2) Entorno de desarrollo
npm run dev
# Vite abrirá la app en modo HMR

# 3) Compilar para producción
npm run build
# Salida en ./dist

# 4) Previsualizar el build localmente
npm run preview
````

> Por defecto, Vite deja la salida en **`dist/`**. Puedes desplegar ese directorio en cualquier hosting estático. [\[vite.dev\]](https://vite.dev/guide/static-deploy)

***

## 🗂️ Estructura (Feature‑Based sugerida)

    /public
      favicon.svg
    /src
      /app
        App.jsx
        main.jsx
        routes.jsx           # (si usas React Router)
      /shared
        /components          # UI reutilizable (Boton, Modal, etc.)
        /hooks               # hooks compartidos
        /styles              # estilos globales (Bootstrap override, variables)
      /features
        /home
          HomePage.jsx
          home.api.js
          home.slice.js      # (si usas store)
          index.js
        /users
          UsersPage.jsx
          users.api.js
          components/
            UserCard.jsx
      /assets
        logo.svg
    index.html
    vite.config.js

> Esta organización facilita escalabilidad, separación de responsabilidades y reuso. Ajusta nombres/archivos según tus necesidades.

***

## 🎨 Estilos

*   Carga **Bootstrap** (CDN o `npm i bootstrap`) y, si quieres, **Bootstrap Icons**.
*   Añade estilos propios en `src/shared/styles/`.

***

## 🧭 Rutas (opcional)

Si usas **React Router**, crea `src/app/routes.jsx` y define tus rutas. Para producción en **GitHub Pages** bajo `https://<usuario>.github.io/<repo>/` recuerda configurar `base` en `vite.config.js` como `'/<repo>/'` (ver sección de Despliegue). [\[vite.dev\]](https://vite.dev/guide/static-deploy)

***

## 🚀 Despliegue a GitHub Pages (CI/CD con Actions)

### 1) Configura `vite.config.js`

Si el sitio se publica en `https://<usuario>.github.io/<repo>/`, añade:

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: usa el nombre EXACTO del repo
  base: '/<repo>/', // ejemplo: '/react/'
})
```

> Cuando se despliega en un subpath (`/<repo>/`), Vite requiere ajustar `base` para que los assets se resuelvan bien. [\[vite.dev\]](https://vite.dev/guide/static-deploy)

### 2) Activa Pages con **GitHub Actions**

En el repo: **Settings → Pages → Build and deployment → Source = GitHub Actions**. [\[vite.dev\]](https://vite.dev/guide/static-deploy)

### 3) Crea el workflow

Guarda este archivo en `.github/workflows/deploy.yml`:

```yaml
name: Deploy Vite app to GitHub Pages

on:
  push:
    branches: [ "main" ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: 🛎️ Checkout
        uses: actions/checkout@v4

      - name: 🧩 Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: 'npm'

      - name: 📦 Install deps
        run: npm ci

      - name: 🏗️ Build
        run: npm run build

      - name: 📤 Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    needs: build
    environment:
      name: github-pages
    runs-on: ubuntu-latest
    steps:
      - name: 🚀 Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
```

> Flujo recomendado por la documentación de Vite/Pages: compila con `npm run build`, sube `dist` como artefacto y publica con Pages/Actions. [\[vite.dev\]](https://vite.dev/guide/static-deploy), [\[github.com\]](https://github.com/vitejs/vite/blob/main/docs/guide/static-deploy.md)

***

## ✅ Scripts útiles

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview --port 4173",
    "lint": "eslint ."
  }
}
```

***

## 📄 Licencia
