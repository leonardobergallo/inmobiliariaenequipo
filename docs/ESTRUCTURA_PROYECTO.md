# 📁 Estructura del Proyecto - Inmobiliaria en Equipo Agente

## 🗂️ Organización de Carpetas

```
inmobiliariaenequipoagente/
├── 📂 src/                    # Código fuente de la aplicación React
│   ├── components/           # Componentes reutilizables
│   │   ├── Header.jsx
│   │   ├── Logo.jsx
│   │   ├── Navbar.jsx
│   │   └── PropertyCard.jsx
│   ├── pages/                # Páginas de la aplicación
│   │   ├── Onboarding.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Home.jsx
│   │   ├── SearchResults.jsx
│   │   ├── PropertyDetail.jsx
│   │   └── ... (más páginas)
│   ├── utils/                # Utilidades
│   │   └── pwa.js
│   ├── App.jsx               # Componente principal
│   ├── main.jsx              # Punto de entrada
│   └── index.css             # Estilos globales
│
├── 📂 public/                 # Archivos estáticos y PWA
│   ├── manifest.json         # Configuración PWA
│   ├── sw.js                 # Service Worker
│   └── icon-*.png            # Iconos PWA
│
├── 📂 database/               # Base de datos PostgreSQL
│   ├── config.js             # Configuración de conexión
│   ├── schema.sql            # Esquema de la base de datos
│   ├── init.js               # Script de inicialización
│   └── queries.js            # Funciones de consulta
│
├── 📂 scripts/                # Scripts de utilidad
│   ├── generate-icons.js     # Generador de iconos PWA
│   ├── create-icons-simple.html
│   └── icon-generator.html
│
├── 📂 design/                 # Diseños originales (referencia)
│   ├── alerta_de_propiedades/
│   ├── calculadora_de_hipotecas/
│   ├── chat_en_vivo_con_agente/
│   ├── contacto/
│   ├── detalle_de_propiedad_*/
│   ├── inicio/
│   ├── mapa_de_propiedades/
│   ├── onboarding_de_usuario/
│   └── ... (más diseños)
│
├── 📂 docs/                   # Documentación
│   ├── ESTRUCTURA_PROYECTO.md
│   ├── FLUJO_APLICACION.md
│   ├── GUIA_INSTALACION_IPHONE.md
│   ├── INSTRUCCIONES_PWA.md
│   ├── README_DATABASE.md
│   ├── README_PWA.md
│   └── DEPLOY_VERCEL.md
│
├── 📄 index.html              # HTML principal
├── 📄 package.json           # Dependencias y scripts
├── 📄 vite.config.js         # Configuración Vite
├── 📄 tailwind.config.js     # Configuración Tailwind
├── 📄 vercel.json            # Configuración Vercel
├── 📄 .env.example           # Ejemplo de variables de entorno
├── 📄 .gitignore            # Archivos ignorados por Git
└── 📄 README.md             # Documentación principal
```

## 📋 Descripción de Carpetas

### `src/`
Código fuente principal de la aplicación React.
- **components/**: Componentes reutilizables (Header, Navbar, etc.)
- **pages/**: Páginas/componentes de cada ruta
- **utils/**: Funciones de utilidad

### `public/`
Archivos estáticos servidos directamente.
- Iconos PWA
- Manifest.json
- Service Worker

### `database/`
Configuración y scripts de base de datos.
- **config.js**: Conexión a PostgreSQL (Neon)
- **schema.sql**: Esquema completo de la BD
- **init.js**: Script de inicialización
- **queries.js**: Funciones de consulta

### `scripts/`
Scripts de utilidad y herramientas.
- Generadores de iconos
- Scripts de automatización

### `design/`
Diseños originales HTML (solo referencia).
- Mockups y prototipos originales
- No se usan en producción

### `docs/`
Documentación del proyecto.
- Guías de instalación
- Documentación de flujos
- Instrucciones de deployment

## 🎯 Archivos Principales

- **package.json**: Dependencias y scripts npm
- **vite.config.js**: Configuración del build tool
- **tailwind.config.js**: Configuración de estilos
- **vercel.json**: Configuración de deployment
- **.env**: Variables de entorno (no en Git)

## 📝 Convenciones

- **Componentes**: PascalCase (ej: `PropertyCard.jsx`)
- **Utilidades**: camelCase (ej: `pwa.js`)
- **Páginas**: PascalCase (ej: `Home.jsx`)
- **Archivos de config**: kebab-case (ej: `vite.config.js`)

## ✅ Organización Completada

- ✅ Código fuente en `src/`
- ✅ Archivos estáticos en `public/`
- ✅ Base de datos en `database/`
- ✅ Scripts en `scripts/`
- ✅ Diseños en `design/`
- ✅ Documentación en `docs/`
- ✅ Configuración en raíz
