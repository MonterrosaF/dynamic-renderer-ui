# 🧩 Dynamic Renderer UI Engine

Este proyecto es una implementación avanzada de un **componente frontend dinámico y completamente desacoplado** que permite renderizar interfaces configurables desde un backend (middleware). Inspirado en tarjetas de producto como las de Mercado Libre, este sistema puede renderizar títulos, imágenes, descripciones, precios, calificaciones, y mucho más, todo controlado por una estructura de datos.

---

## 🚀 Tecnologías

- **Next.js 15 (App Router)**
- **TypeScript** con tipado exhaustivo
- **Tailwind CSS** para estilos responsivos y limpios

---

## 🎯 Características

- ✅ Sistema de renderizado basado en configuración (JSON)
- ✅ Soporte para múltiples tipos de componentes (`title`, `price`, `rating`, `shipping`, etc.)
- ✅ Interacción `hover` con ícono de wishlist funcional
- ✅ Separación clara de responsabilidades: middleware → frontend
- ✅ Altamente reutilizable y mantenible

---

## 🧪 Ejemplo de respuesta del middleware

```json
{
  "components": [
    {
      "type": "vstack",
      "props": {
        "hover": true,
        "className": "flex bg-white rounded-xl shadow-md overflow-hidden max-w-4xl",
        "children": [
          {
            "type": "image",
            "props": {
              "src": "...",
              "alt": "...",
              "className": "w-1/3 object-cover"
            }
          },
          {
            "type": "container",
            "props": {
              "className": "p-4 flex-1 space-y-2",
              "children": [
                {
                  "type": "title",
                  "props": { "text": "Celular...", "className": "text-lg" }
                },
                {
                  "type": "price",
                  "props": { "value": "$144.999", "className": "text-2xl" }
                },
                { "type": "rating", "props": { "score": 4.4, "votes": 78 } },
                {
                  "type": "wishlistIcon",
                  "props": {
                    "showOnHover": true,
                    "addToWishlist": true,
                    "productId": "tcl-503"
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
}
```

---

## 🧰 Cómo usar

### 1. Clona el proyecto

```bash
git clone https://github.com/monterrosaf/dynamic-renderer-ui.git
cd dynamic-renderer-ui
```

### 2. Instala dependencias

```bash
npm install
```

### 3. Crea tu entorno `.env.local` y agrega el puerto donde levantaste el repo, ejemplo:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 4. Corre el servidor local, ejemplo:

```bash
npm run dev
```

Visita `http://localhost:3000` para ver el componente en acción.

---

## 📁 Estructura

```
.
├── app/
│   ├── page.tsx              # Muestra el componente dinámico
│   └── api/middleware/       # Devuelve configuración JSON para renderizar
├── components/
│   └── DynamicRenderer.tsx   # Componente genérico altamente dinámico
├── public/
├── .env.local                # URL base del proyecto (sin hardcodeo)
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 🧠 Inspiración

Este reto fue originalmente planteado en una entrevista técnica para evaluar la capacidad de construir **componentes flexibles y escalables** para múltiples productos, con base en estructuras de datos externas.

---

## 📬 Autor

Desarrollado por [Felipe Monterrosa](mailto:felipe.monterrosa@hotmail.com.com)
