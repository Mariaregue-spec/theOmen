# 🎬 THE OMEN – Horror Video Club

<p align="right"><a href="README_EN.md"><button style="background:#b91c1c;color:#fff;border:none;padding:6px 12px;border-radius:6px;">English</button></a></p>

**THE OMEN** es una aplicación web SPA (Single Page Application) creada con **React** y una estética inspirada en el terror, lo oculto y el cine ritual. Simula un archivo/colección de películas malditas con una UI oscura y cinematográfica.

---

## 📸 Capturas

A continuación, algunas capturas representativas del proyecto:

<div align="center">

![theOmer — Home](img/theOmer.png)

![Nuestro equipo](/img/theOmerNosotros.png)

</div>

---

## 🎯 Qué incluye

- SPA con **React.js** y **React Router DOM**
- **CRUD completo** sobre películas (Crear / Leer / Editar / Borrar)
- Consumo de API fake con **JSON Server** y **Axios**
- **Paginación** en la lista de películas
- Manejo de imágenes con **placeholder** cuando falla la carga
- Formulario con validaciones básicas (año y rating numéricos)
- Diseño **responsive** con **Tailwind CSS**

---

## 🚀 Rutas importantes

- `/` → Home (hero y resumen)
- `/movies` → Sección de películas (lista con paginación)
- `/movies/:id` → Detalle de película
- `/form` o `/add-movie` → Formulario para crear/editar películas
- `/aboutus` → Sobre nosotros
- `/contact` → Contacto

> Nota: El proyecto utiliza `/form` como ruta principal para crear/editar películas (el código también incluye `/add-movie` como alias).

---

## 🧩 API (JSON Server)

La API local utiliza el archivo `server/db.json` y expone el recurso principal en:

- GET /peliculas → Lista de películas
- GET /peliculas/:id → Detalle
- POST /peliculas → Crear
- PUT /peliculas/:id → Actualizar
- DELETE /peliculas/:id → Borrar

Ejemplo de estructura (fragmento):

```json
{
  "peliculas": [
    {
      "id": 1,
      "titulo": "El silencio de los corderos",
      "anio": 1991,
      "rating": 8.6,
      "poster": "/posters/1.jpg",
      "sinopsis": "Resumen..."
    }
  ]
}
```

- Las imágenes de póster pueden ser rutas locales (`/posters/*.jpg`) o URLs externas. Si la imagen falla, se muestra un `placeholder`.

---

## 🧰 Tecnologías y dependencias

- React 19
- React Router DOM
- Tailwind CSS
- Axios
- JSON Server
- Vite (dev server)

---

## 🏁 Cómo ejecutar el proyecto (desarrollo)

1. Instala dependencias:

```bash
npm install
```

2. En una terminal ejecuta la API local (JSON Server):

```bash
npm run api
# → escucha en http://localhost:8080
```

3. En otra terminal ejecuta la aplicación (Vite):

```bash
npm run dev
# → por defecto en http://127.0.0.1:5173
```

4. Abre el navegador y navega a `http://localhost:5173`.

> Para producción:
>
> ```bash
> npm run build
> npm run preview
> ```

---

## ✅ Funcionalidades destacadas

- Paginación en `/movies` (10 películas por página)
- Enlaces a detalle por cada tarjeta (`/movies/:id`)
- Formulario con creación y edición (edición en línea, con botones Editar / Borrar)
- Validaciones sencillas en frontend (campo año y rating numéricos)
- Manejo de errores en carga de datos e imágenes

---

## 🧪 Nota sobre el entorno

- Asegúrate de que la API (`npm run api`) esté corriendo antes de abrir la app; la UI espera `http://localhost:8080/movies`.
- Si quieres ejecutar API y app en una sola terminal considera instalar `concurrently` y añadir un script, pero actualmente se ejecutan en terminales separadas.

---

## 📄 License & Contribuciones

- Licencia: MIT (revisar `LICENSE`)
- Contribuciones: Abre un issue o PR describiendo cambios/errores.
- Nota: Este proyecto se finalizó y se corrigieron errores con la ayuda de IA (asistente). La IA asistió en la redacción y en correcciones de código y documentación.

---