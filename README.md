# 🏠 Inmobiliaria en Equipo Agente

Aplicación web moderna para búsqueda y gestión de propiedades inmobiliarias, inspirada en Remax. **Totalmente responsive** - funciona perfectamente en móvil y desktop. **PWA lista** - se puede instalar como app nativa.

🌐 **Demo**: [inmobiliariaenequipoagente.vercel.app](https://inmobiliariaenequipoagente.vercel.app)

## ✨ Características

### 📱 PWA (Progressive Web App)
- ✅ Instalable desde el navegador (sin Play Store/App Store)
- ✅ Funciona offline con Service Worker
- ✅ Icono en pantalla de inicio
- ✅ Experiencia como app nativa

### 🎨 Diseño Responsive
- **Móvil**: Navegación inferior, diseño vertical optimizado
- **Desktop**: Sidebar lateral, diseño en grid, más espacio
- **Adaptativo**: Se ajusta automáticamente al tamaño de pantalla

### 🗄️ Base de Datos
- ✅ PostgreSQL con Neon
- ✅ Esquema completo
- ✅ Funciones de consulta listas

## 🛠️ Tecnologías

- **React 18** - Framework de UI
- **Vite** - Build tool y dev server
- **React Router** - Navegación
- **Tailwind CSS** - Estilos responsive
- **PostgreSQL** - Base de datos (Neon)
- **PWA** - Service Worker y Manifest

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Inicializar base de datos
npm run db:init

# Build para producción
npm run build
```

## 📁 Estructura del Proyecto

```
├── src/              # Código fuente React
├── public/           # Archivos estáticos y PWA
├── database/         # Base de datos PostgreSQL
├── scripts/          # Scripts de utilidad
├── design/           # Diseños originales (referencia)
└── docs/             # Documentación
```

Ver [docs/ESTRUCTURA_PROYECTO.md](./docs/ESTRUCTURA_PROYECTO.md) para detalles completos.

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio de GitHub a Vercel
2. Vercel detectará automáticamente Vite
3. Deploy automático en cada push

Ver [docs/DEPLOY_VERCEL.md](./docs/DEPLOY_VERCEL.md) para más detalles.

## 📱 Instalar como App

### Android (Chrome/Edge)
1. Abre la web en Chrome
2. Aparecerá "Agregar a pantalla de inicio"
3. Toca "Agregar"

### iOS (Safari)
1. Abre en Safari
2. Menú → "Agregar a pantalla de inicio"
3. Confirma

Ver [docs/GUIA_INSTALACION_IPHONE.md](./docs/GUIA_INSTALACION_IPHONE.md) para instrucciones detalladas.

## 📝 Scripts Disponibles

```bash
npm run dev              # Servidor de desarrollo
npm run build           # Build para producción
npm run preview         # Preview del build
npm run generate-icons  # Generar iconos PWA
npm run db:init         # Inicializar base de datos
```

## 📚 Documentación

- [Estructura del Proyecto](./docs/ESTRUCTURA_PROYECTO.md)
- [Flujo de la Aplicación](./docs/FLUJO_APLICACION.md)
- [Guía de Instalación iPhone](./docs/GUIA_INSTALACION_IPHONE.md)
- [Instrucciones PWA](./docs/INSTRUCCIONES_PWA.md)
- [Base de Datos](./docs/README_DATABASE.md)
- [Deploy en Vercel](./docs/DEPLOY_VERCEL.md)

## 🎯 Rutas Principales

- `/` - Home
- `/search` - Búsqueda
- `/property/:id` - Detalle de propiedad
- `/favorites` - Favoritos
- `/profile` - Perfil
- `/chat` - Mensajes
- `/calculator` - Calculadora de hipotecas
- `/map` - Mapa de propiedades

## 📄 Licencia

MIT License - Libre para uso personal y comercial.

---

Hecho con ❤️ usando React + Vite + Tailwind CSS + PostgreSQL
