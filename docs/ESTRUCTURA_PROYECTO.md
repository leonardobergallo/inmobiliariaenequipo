# 📁 Estructura del Proyecto

## 🗂️ Organización de Carpetas

```
inmobiliaria-en-equipo/
├── 📂 src/                    # Código fuente de la aplicación React
│   ├── components/           # Componentes reutilizables
│   ├── pages/                # Páginas de la aplicación
│   ├── utils/                # Utilidades
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
│   └── *.html                # Herramientas de generación
│
├── 📂 design/                 # Diseños originales (referencia)
│   └── ...                   # Mockups HTML originales
│
├── 📂 docs/                   # Documentación
│   ├── ESTRUCTURA_PROYECTO.md
│   ├── FLUJO_APLICACION.md
│   └── ... (más documentación)
│
└── 📄 Archivos de configuración raíz
```

## 📋 Descripción de Carpetas

### `src/` - Código Fuente
Código principal de la aplicación React.
- **components/**: Componentes reutilizables
- **pages/**: Páginas/componentes de cada ruta
- **utils/**: Funciones de utilidad

### `public/` - Archivos Estáticos
Archivos servidos directamente.
- Iconos PWA
- Manifest.json
- Service Worker

### `database/` - Base de Datos
Configuración y scripts de PostgreSQL.
- Conexión a Neon
- Esquema y migraciones
- Funciones de consulta

### `scripts/` - Scripts de Utilidad
Herramientas y automatización.
- Generadores de iconos
- Scripts de build

### `design/` - Diseños Originales
Mockups HTML (solo referencia, no se usan en producción).

### `docs/` - Documentación
Toda la documentación del proyecto.

