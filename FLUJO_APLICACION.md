# 📱 Flujo de la Aplicación - Inmobiliaria en Equipo

## 🔄 Flujo Principal

### 1️⃣ Primera Vez (Usuario Nuevo)
```
Onboarding → Login/Register → Home
```

**Pasos:**
1. **Onboarding** (`/onboarding`)
   - Carrusel de 4 slides explicando características
   - Opciones: "Comenzar", "Iniciar sesión", "Registrarse", "Saltar"
   - Se guarda en localStorage que ya vio el onboarding

2. **Login** (`/login`) o **Register** (`/register`)
   - Formulario de autenticación
   - Al completar, guarda `isAuthenticated: true` en localStorage
   - Redirige a Home

3. **Home** (`/`)
   - Pantalla principal con búsqueda
   - Propiedades destacadas
   - Propiedades recién añadidas
   - Navegación inferior

### 2️⃣ Usuario Autenticado (Visitas Subsecuentes)
```
Home → [Navegación por la app]
```

**Si ya está autenticado:**
- Va directo a Home (`/`)
- Puede navegar libremente por todas las secciones

**Si no está autenticado:**
- Redirige a `/onboarding` (si no lo ha visto)
- O a `/login` (si ya vio el onboarding)

---

## 🗺️ Mapa de Navegación

### 📍 Rutas Públicas (Sin autenticación)
- `/onboarding` - Pantalla de bienvenida
- `/login` - Iniciar sesión
- `/register` - Crear cuenta
- `/forgot-password` - Recuperar contraseña

### 🏠 Rutas Principales (Requieren autenticación)
- `/` - **Home**: Exploración y búsqueda
- `/search` - **Resultados de Búsqueda**: Lista/grid de propiedades
- `/property/:id` - **Detalle de Propiedad**: Info completa, agente, mapa
- `/property/:id/tour` - **Tour Virtual**: Vista 360°

### 👤 Rutas de Usuario
- `/profile` - **Perfil**: Configuración y acceso rápido
- `/favorites` - **Favoritos**: Propiedades guardadas
- `/chat` - **Chat**: Mensajes con agentes
- `/contact/:agentId?` - **Contacto**: Formulario para contactar agente

### 🛠️ Herramientas
- `/calculator` - **Calculadora de Hipotecas**: Simular pagos
- `/map` - **Mapa**: Ver propiedades en mapa
- `/compare` - **Comparar**: Comparar hasta 3 propiedades
- `/alerts` - **Alertas**: Crear alertas personalizadas

### ➕ Funciones Adicionales
- `/publish` - **Publicar Propiedad**: Para agentes
- `/news` - **Noticias**: Artículos del mercado
- `/faq` - **FAQ**: Preguntas frecuentes

---

## 🎯 Flujos de Usuario Comunes

### 🔍 Buscar Propiedad
```
Home → (Click en búsqueda) → Search Results → Property Detail → Contact Agent
```

### 💬 Contactar Agente
```
Property Detail → Contact Agent → (Enviar mensaje) → Chat
```

### ⭐ Guardar Favoritos
```
Home/Search → (Click corazón) → Favorites → Property Detail
```

### 🧮 Calcular Hipoteca
```
Property Detail → Calculadora → (Calcular) → Ver resultados
```

### 🗺️ Ver en Mapa
```
Property Detail → Abrir Mapa → Map View → (Click pin) → Property Detail
```

### 📊 Comparar Propiedades
```
Search/Home → (Seleccionar propiedades) → Compare → Ver comparación
```

---

## 📱 Navegación Inferior (Mobile)

Siempre visible en móvil:
- 🏠 **Inicio** (`/`)
- ❤️ **Favoritos** (`/favorites`)
- 💬 **Mensajes** (`/chat`)
- 👤 **Perfil** (`/profile`)

---

## 🖥️ Adaptación Web vs Móvil

### Móvil (< 768px)
- Navegación inferior fija
- Ancho máximo: 480px
- Diseño vertical optimizado
- Touch-friendly

### Web (≥ 768px)
- Navegación lateral o superior
- Ancho máximo: 1200px
- Diseño en grid/columnas
- Hover effects
- Más espacio para contenido

---

## 🔐 Sistema de Autenticación

**Estado guardado en localStorage:**
- `hasSeenOnboarding`: `true/false`
- `isAuthenticated`: `true/false`

**Flujo de protección:**
- Si no está autenticado → Redirige a login/onboarding
- Si está autenticado → Acceso completo

---

## 🎨 Estados de la Aplicación

### Estado Inicial
- Usuario nuevo → Onboarding
- Usuario existente → Login

### Estado Autenticado
- Acceso a todas las funciones
- Navegación completa
- Guardar favoritos, alertas, etc.

### Estado No Autenticado
- Solo acceso a rutas públicas
- Redirección automática a login

