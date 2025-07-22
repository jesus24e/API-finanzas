# APP-Finanzas

[![Render](https://img.shields.io/badge/render-live-blue)](https://app-finanzas-front.onrender.com)

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

---

## Descarga del repositorio

Para poder descargar el repositorio simplemente es necesario abrir un terminal en el escritorio o en el lugar donde desee descargar el repositorio.

Con el siguiente comando de descargara el repositorio en una carpeta llamada Api-finanzas:

```
git clone https://github.com/jesus24e/API-finanzas.git Api-finanzas

```