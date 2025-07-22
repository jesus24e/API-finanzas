# APP-Finanzas

[![Render](https://img.shields.io/badge/render-live-blue)](https://app-finanzas-front.onrender.com)
[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)


En este repositorio se tiene el codigo fuente para un aplicacion web que tiene como objetivo el monitoreo y captura de gastos e ingresos para un mejor monitoreo de las finanzas.

---

## 🧩 Tecnologías utilizadas

- 📦 **Backend**: Node.js, Express, Mongoose
- 🖥️ **Frontend**: HTML, JavaScript, bootstrap
- 🌐 **Base de datos**: MongoDB Atlas
- 🚀 **Despliegue**: Render

---

## Estructura

el codigo se comopone por dos grandes apartados el frontend y el back end:

```
📁 back-end/
├── 📁 controllers/         # Lógica que gestiona las peticiones y coordina la respuesta
├── 📁 databases/           # Configuración de conexión y acceso a la base de datos
├── 📁 helpers/             # Funciones auxiliares y utilitarias reutilizables
├── 📁 repositories/        # Capa intermedia entre la base de datos y los controladores
├── 📁 routes/              # Definición de las rutas y endpoints de la API
├── 📁 schemas/             # Esquemas de validación y estructuras de datos (Mongoose)
└──  📄 index.js             # Punto de entrada principal del servidor

📁 front-end/
├── 📁 public/              # Archivos HTML y JS para las vistas del sitio
│   ├── 📄 register.html    
│   ├── 📄 login.html       
│   └── 📄 ...              # Otros archivos HTML/JS utilizados en la interfaz
├── 📄 config.js            # Configuraciones como el puerto o URL de la API
└── 📄 index.html           # Página inicial del frontend
```

---

## Descarga del repositorio

Para poder descargar el repositorio simplemente es necesario abrir un terminal en el escritorio o en el lugar donde desee descargar el repositorio.

Con el siguiente comando de descargara el repositorio en una carpeta llamada Api-finanzas:

```

git clone https://github.com/jesus24e/API-finanzas.git Api-finanzas

```