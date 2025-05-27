# 🌍 Rate My Trip

Una aplicación React para crear, puntuar y gestionar viajes favoritos, con datos enriquecidos de APIs externas.

---

## ✨ Funcionalidades

- Crear viajes con título y destino.
- Integración automática con:
  - **REST Countries**: bandera, región e idiomas.
  - **Unsplash**: imagen del destino.
  - **OpenWeather**: clima actual del destino.
- Añadir/eliminar favoritos.
- Puntuar viajes del 1 al 5 con estrellas
- Filtro de búsqueda por destino.
- Modo oscuro y claro con persistencia en `localStorage`.
- Totalmente responsive.

---

## 🧠 Tecnologías usadas

- **React 19** con `useReducer`, `useState`, `useEffect`
- **react-router-dom v7**
- **Custom Hooks** (`useForm`, `useDestinationData`)
- **framer-motion** para animaciones suaves
- **CSS modularizado** con variables, dark mode y media queries
- **LocalStorage** para persistencia de datos y tema

---

## 📂 Estructura del proyecto

```
src/
├── components/
│   └── TripCard.jsx
│   └── RatingStars.jsx
├── context/
│   └── tripsReducer.js
├── hooks/
│   └── useForm.js
│   └── useDestinationData.js
├── pages/
│   └── Home.jsx
│   └── CreateTrip.jsx
│   └── Favorites.jsx
├── styles/
│   └── App.css
│   └── components/
│       └── TripCard.css
│       └── RatingStars.css
├── App.jsx
└── main.jsx
```

---

## 📝 Requisitos del proyecto

- ✅ Full responsive
- ✅ Buen uso de CSS y HTML semántico
- ✅ Uso de `react-router-dom`
- ✅ Uso de `useReducer`
- ✅ Custom hook
- ✅ Sin re-renderizados innecesarios
- ✅ Componentes bien estructurados

---

## 🚀 Iniciar el proyecto

```bash
npm install
npm run dev
```

---

## 🧪 Extras

- Accesibilidad: texto alternativo, roles, etiquetas semánticas.
- Mejora visual: tarjetas animadas, modo oscuro real.
- Persistencia: datos guardados entre sesiones.

---

## 🧑‍💻 Autor

Creado por Pau Palacios Gordillo
