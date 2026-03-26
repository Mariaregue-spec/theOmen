# 🎬 THE OMEN – Horror Video Club (English)

**THE OMEN** is a single-page web app built with **React**, inspired by horror, occult aesthetics and cinematic rituals. It simulates a forbidden archive of cursed movies with a dark, cinematic interface.

---

## 🎯 What it includes (Summary)

- SPA built with **React.js** and **React Router DOM**
- **Full CRUD** for movies (Create / Read / Update / Delete)
- Fake API using **JSON Server** and **Axios**
- Pagination in the movies listing
- Image fallback (placeholder) when posters fail to load
- Form with basic validation (year and rating numeric)
- Responsive UI using **Tailwind CSS**

---

## 📸 Screenshots

<div align="center">

![Hero — Home](/src/assets/home/hero-desktop.jpg)

![Our team](/img/theOmerNosotros.png)

</div>

---

## 🚀 Important Routes

- `/` → Home (hero and concept summary)
- `/movies` → Movies section (paginated list)
- `/movies/:id` → Movie detail
- `/form` or `/add-movie` → Add/Edit movie form
- `/aboutus` → About us
- `/contact` → Contact

> Note: The project uses `/form` as the main route for add/edit (there is also `/add-movie` alias).

---

## 🧩 API (JSON Server)

The local API uses `server/db.json` and exposes the main resource at:

- GET /peliculas → List
- GET /peliculas/:id → Detail
- POST /peliculas → Create
- PUT /peliculas/:id → Update
- DELETE /peliculas/:id → Delete

Example structure:

```json
{
  "peliculas": [
    {
      "id": 1,
      "titulo": "The Silence of the Lambs",
      "anio": 1991,
      "rating": 8.6,
      "poster": "/posters/1.jpg",
      "sinopsis": "Short synopsis..."
    }
  ]
}
```

---

## 🧰 Tech & Dependencies

- React 19
- React Router DOM
- Tailwind CSS
- Axios
- JSON Server
- Vite (dev server)

---

## 🏁 How to run (development)

1. Install deps:

```bash
npm install
```

2. Run the fake API in one terminal:

```bash
npm run api
# → listening at http://localhost:8080
```

3. Run the app in another terminal:

```bash
npm run dev
# → default http://127.0.0.1:5173
```

4. Open your browser at `http://localhost:5173`.

> For production:
>
> ```bash
> npm run build
> npm run preview
> ```

---

## ✅ Highlights

- Pagination (10 movies/page)
- Detail pages for each movie
- Inline editing and deletion from the form listing
- Basic frontend validation
- Error handling for data & images

---

## 📄 License & Contributions

- License: MIT (see `LICENSE`)
- Contributions: Open an issue or PR describing changes/bugs.
- Note: This project was completed and corrected with the assistance of AI (assistant). The AI assisted with writing and fixing code and documentation.

---

If you need badges, deployment instructions, or want a shorter/more visual README, tell me and I’ll adapt it. 🎛️
