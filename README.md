# Inmobiliaria en Equipo

Una aplicación web moderna inspirada en Remax para la gestión y búsqueda de propiedades inmobiliarias. **Totalmente responsive** - funciona perfectamente en móvil y desktop.

## 🚀 Características

### 📱 Diseño Responsive
- **Móvil**: Navegación inferior, diseño vertical optimizado
- **Desktop**: Sidebar lateral, diseño en grid, más espacio
- **Adaptativo**: Se ajusta automáticamente al tamaño de pantalla

### Pantallas de Autenticación
- **Onboarding**: Carrusel de bienvenida con características principales
- **Iniciar Sesión**: Autenticación de usuarios
- **Registrarse**: Creación de nuevas cuentas
- **Recuperar Contraseña**: Restablecimiento de contraseña

### Pantallas Principales
- **Inicio/Exploración**: Búsqueda de propiedades, destacadas y recién añadidas
- **Resultados de Búsqueda**: Lista y vista de cuadrícula con filtros
- **Detalle de Propiedad**: Información completa con galería, mapa y agente
- **Tour Virtual**: Experiencia 360° para explorar propiedades

### Pantallas de Usuario
- **Perfil**: Gestión de cuenta y acceso a todas las funciones
- **Favoritos**: Propiedades guardadas
- **Chat en Vivo**: Comunicación directa con agentes
- **Contacto**: Formulario para contactar agentes

### Herramientas
- **Calculadora de Hipotecas**: Simulación de pagos mensuales
- **Mapa de Propiedades**: Vista de propiedades en mapa
- **Comparar Propiedades**: Comparación lado a lado
- **Alertas de Propiedades**: Notificaciones personalizadas

### Funciones Adicionales
- **Publicar Propiedad**: Para agentes publicar nuevas propiedades
- **Noticias del Mercado**: Artículos y tendencias
- **Preguntas Frecuentes**: FAQ con búsqueda

## 🛠️ Tecnologías

- **React 18**: Framework de UI
- **Vite**: Build tool y dev server
- **React Router**: Navegación entre páginas
- **Tailwind CSS**: Estilos y diseño responsive
- **Material Symbols**: Iconos

## 📦 Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Inicia el servidor de desarrollo:
```bash
npm run dev
```

3. Abre tu navegador en `http://localhost:5173`

## 🏗️ Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Header.jsx      # Barra superior con logo y navegación
│   ├── Navbar.jsx      # Barra de navegación (inferior móvil / lateral desktop)
│   ├── Logo.jsx        # Componente del logo
│   └── PropertyCard.jsx # Tarjeta de propiedad
├── pages/              # Páginas de la aplicación
│   ├── Onboarding.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Home.jsx
│   ├── SearchResults.jsx
│   ├── PropertyDetail.jsx
│   ├── VirtualTour.jsx
│   ├── Profile.jsx
│   ├── Favorites.jsx
│   ├── Chat.jsx
│   ├── Contact.jsx
│   ├── MortgageCalculator.jsx
│   ├── PropertyMap.jsx
│   ├── CompareProperties.jsx
│   ├── PropertyAlerts.jsx
│   ├── PublishProperty.jsx
│   ├── News.jsx
│   └── FAQ.jsx
├── App.jsx             # Componente principal con rutas
├── main.jsx            # Punto de entrada
└── index.css           # Estilos globales
```

## 🎨 Diseño

La aplicación utiliza un diseño inspirado en Remax con:
- **Colores principales**: Azul (#137fec) y Rojo (#E11B22)
- **Diseño responsive**: Mobile-first, adaptable a diferentes tamaños
- **Modo oscuro**: Soporte completo para tema oscuro
- **UI moderna**: Interfaz limpia y profesional

### Breakpoints
- **Móvil**: < 768px (navegación inferior)
- **Desktop**: ≥ 768px (sidebar lateral)

## 🔄 Flujo de la Aplicación

Ver [FLUJO_APLICACION.md](./FLUJO_APLICACION.md) para el flujo completo.

### Flujo Principal
1. **Onboarding** → Primera vez
2. **Login/Register** → Autenticación
3. **Home** → Exploración
4. **Navegación** → Todas las funciones

## 🔐 Autenticación

La autenticación se maneja mediante localStorage. Para una aplicación de producción, deberías:
- Implementar un backend con autenticación real
- Usar tokens JWT o sesiones
- Validar credenciales en el servidor

## 📱 Navegación

- **Rutas públicas**: `/onboarding`, `/login`, `/register`, `/forgot-password`
- **Rutas protegidas**: Todas las demás rutas requieren autenticación
- **Navegación móvil**: Barra inferior fija
- **Navegación desktop**: Sidebar lateral

## 🚀 Build para Producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

## 📝 Notas

- Las imágenes de propiedades son placeholders de ejemplo
- Los datos de propiedades están hardcodeados para demostración
- Para producción, conecta con una API backend real
- El mapa es una imagen estática; considera integrar Google Maps o Mapbox

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso personal y comercial.
