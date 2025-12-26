# 🏠 Inmobiliaria en Equipo

Aplicación web moderna para búsqueda y gestión de propiedades inmobiliarias, inspirada en Remax. **Totalmente responsive** - funciona perfectamente en móvil y desktop. **PWA lista** - se puede instalar como app nativa.

🌐 **Demo**: [inmobiliariaenequipo.vercel.app](https://inmobiliariaenequipo.vercel.app)

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

### 🚀 Funcionalidades Principales

#### Autenticación
- Onboarding interactivo
- Login/Registro
- Recuperación de contraseña

#### Búsqueda y Exploración
- Búsqueda avanzada de propiedades
- Filtros y ordenamiento
- Vista lista y grid
- Mapa interactivo

#### Detalles de Propiedad
- Galería de imágenes
- Información completa
- Tour virtual 360°
- Calculadora de hipotecas
- Contacto con agente

#### Herramientas
- Calculadora de hipotecas
- Comparar propiedades
- Alertas personalizadas
- Noticias del mercado
- FAQ

## 🛠️ Tecnologías

- **React 18** - Framework de UI
- **Vite** - Build tool y dev server
- **React Router** - Navegación
- **Tailwind CSS** - Estilos responsive
- **Material Symbols** - Iconos
- **PWA** - Service Worker y Manifest

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio de GitHub a Vercel
2. Vercel detectará automáticamente Vite
3. Deploy automático en cada push

O manualmente:
```bash
npm install -g vercel
vercel --prod
```

### Otros Proveedores

La app es estática y puede desplegarse en:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Cualquier hosting estático

## 📱 Instalar como App

### Android (Chrome/Edge)
1. Abre la web en Chrome
2. Aparecerá "Agregar a pantalla de inicio"
3. Toca "Agregar"

### iOS (Safari)
1. Abre en Safari
2. Menú → "Agregar a pantalla de inicio"
3. Confirma

### Desktop
- Aparecerá icono de instalación en la barra de direcciones

## 📁 Estructura del Proyecto

```
├── public/              # Archivos estáticos y PWA
│   ├── manifest.json    # Configuración PWA
│   ├── sw.js           # Service Worker
│   └── icon-*.png      # Iconos PWA
├── src/
│   ├── components/      # Componentes reutilizables
│   ├── pages/          # Páginas de la aplicación
│   ├── utils/          # Utilidades
│   └── App.jsx         # Componente principal
├── vercel.json         # Configuración Vercel
└── package.json        # Dependencias
```

## 🎯 Rutas Principales

- `/` - Home
- `/search` - Búsqueda
- `/property/:id` - Detalle de propiedad
- `/favorites` - Favoritos
- `/profile` - Perfil
- `/chat` - Mensajes
- `/calculator` - Calculadora de hipotecas
- `/map` - Mapa de propiedades

## 📝 Scripts Disponibles

```bash
npm run dev              # Servidor de desarrollo
npm run build           # Build para producción
npm run preview         # Preview del build
npm run generate-icons  # Generar iconos PWA
```

## 🔧 Configuración

### Variables de Entorno

No se requieren variables de entorno para el funcionamiento básico.

### Personalización

- **Colores**: Edita `tailwind.config.js`
- **Logo**: Reemplaza los iconos en `public/`
- **Rutas**: Modifica `src/App.jsx`

## 📄 Licencia

MIT License - Libre para uso personal y comercial.

## 👨‍💻 Desarrollo

### Agregar Nueva Página

1. Crea el componente en `src/pages/`
2. Agrega la ruta en `src/App.jsx`
3. Actualiza la navegación si es necesario

### Agregar Componente

1. Crea el componente en `src/components/`
2. Importa y usa donde necesites

## 🐛 Troubleshooting

### PWA no funciona
- Verifica HTTPS (requerido para PWA)
- Revisa que `manifest.json` y `sw.js` estén en `public/`
- Verifica los iconos en DevTools → Application

### Build falla
- Ejecuta `npm install` nuevamente
- Verifica que Node.js sea versión 16+

## 📞 Soporte

Para problemas o preguntas, abre un issue en GitHub.

---

Hecho con ❤️ usando React + Vite + Tailwind CSS
