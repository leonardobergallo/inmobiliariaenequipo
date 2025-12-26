# 📱 Cómo Instalar la App en iPhone

## 🎯 Pasos para Instalar

### 1️⃣ Abre Safari (IMPORTANTE)
⚠️ **Debes usar Safari**, no Chrome ni otros navegadores. Las PWA en iOS solo funcionan con Safari.

### 2️⃣ Ve a la URL de la App

**Si está desplegada en Vercel:**
```
https://inmobiliariaenequipo.vercel.app
```

**Si está en desarrollo local:**
1. Asegúrate de que tu iPhone y tu computadora estén en la misma red WiFi
2. Encuentra tu IP local (en Windows: `ipconfig` → busca "IPv4")
3. Abre: `http://tu-ip:5173`

### 3️⃣ Instala la App

1. **Toca el botón Compartir** 📤
   - Es el cuadrado con una flecha hacia arriba
   - Está en la barra inferior de Safari

2. **Desplázate hacia abajo** en el menú de compartir

3. **Toca "Agregar a pantalla de inicio"** o **"Agregar a Inicio"**
   - Puede aparecer como un icono de "+" con "Agregar a pantalla de inicio"

4. **Personaliza el nombre** (opcional)
   - Puedes cambiar el nombre de la app
   - Por defecto será "Inmobiliaria"

5. **Toca "Agregar"** en la esquina superior derecha

### 4️⃣ ¡Listo! 🎉

La app aparecerá como un icono en tu pantalla de inicio, igual que cualquier otra app.

## 📸 Visualización de los Pasos

```
Safari → [URL de la app] → Botón Compartir 📤 → 
"Agregar a pantalla de inicio" → Personalizar nombre → 
"Agregar" → ✅ App instalada
```

## ✅ Verificar que Funciona

1. **Busca el icono** en tu pantalla de inicio
2. **Toca el icono** para abrir la app
3. **Debería abrirse** sin la barra de Safari (modo standalone)
4. **Funciona como app nativa**

## 🔧 Características de la App Instalada

- ✅ **Sin barra de navegación** de Safari
- ✅ **Icono personalizado** en pantalla de inicio
- ✅ **Funciona offline** (con Service Worker)
- ✅ **Actualizaciones automáticas**
- ✅ **Experiencia como app nativa**

## 🐛 Solución de Problemas

### No aparece "Agregar a pantalla de inicio"

**Causas posibles:**
1. ❌ Estás usando Chrome u otro navegador → **Usa Safari**
2. ❌ La página no está en HTTPS → **Necesita HTTPS** (Vercel lo tiene)
3. ❌ El manifest.json no está configurado → Ya está configurado ✅

**Solución:**
- Asegúrate de usar **Safari**
- Verifica que la URL sea **HTTPS** (no HTTP)

### El icono no se ve bien

- Los iconos ya están generados en `public/`
- Si quieres cambiarlos, reemplaza los archivos `icon-*.png`
- El tamaño recomendado para iOS es 180x180px

### La app no funciona offline

- El Service Worker está configurado
- Primero debes abrir la app **con internet**
- Luego funcionará offline

## 📱 Requisitos

- **iOS 11.3 o superior** (iPhone 5s o más nuevo)
- **Safari** (no otros navegadores)
- **HTTPS** (Vercel lo proporciona automáticamente)

## 💡 Tips

1. **Mantén la app actualizada**: Cada vez que abres la app, se actualiza automáticamente
2. **Usa en modo avión**: Una vez instalada, funciona sin internet (con limitaciones)
3. **Comparte con otros**: Puedes compartir el link y ellos también pueden instalarla

## 🎨 Personalización

Si quieres cambiar el icono o nombre:
- **Icono**: Reemplaza `public/icon-192x192.png`
- **Nombre**: Edita `index.html` → `apple-mobile-web-app-title`

---

**¿Problemas?** Verifica que:
- ✅ Estás usando Safari
- ✅ La URL es HTTPS
- ✅ Tienes iOS 11.3+

¡Disfruta tu app! 🚀

