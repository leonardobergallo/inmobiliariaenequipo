# 📱 Instrucciones para Instalar como App (PWA)

## ¿Qué es una PWA?

Una **Progressive Web App (PWA)** permite instalar la aplicación web directamente en el celular desde el navegador, **sin necesidad de subirla al Play Store o App Store**.

## 🎯 Cómo Instalar la App

### En Android (Chrome/Edge):

1. **Abre la página web** en Chrome o Edge
2. **Aparecerá un banner** en la parte inferior que dice "Agregar a pantalla de inicio"
3. **Toca "Agregar"** o "Instalar"
4. La app se instalará como una app nativa

**O manualmente:**
- Menú (3 puntos) → **"Agregar a pantalla de inicio"** o **"Instalar app"**

### En iOS (Safari):

1. **Abre la página web** en Safari
2. Toca el botón **Compartir** (cuadrado con flecha)
3. Selecciona **"Agregar a pantalla de inicio"**
4. Confirma y la app se instalará

### En Desktop (Chrome/Edge):

1. Aparecerá un **icono de instalación** en la barra de direcciones
2. Haz clic en el icono
3. Confirma la instalación

## 🎨 Generar Iconos

### Opción 1: Usar el Generador Simple

1. Abre `public/create-icons-simple.html` en el navegador
2. Haz clic en **"Generar Todos los Iconos"**
3. Descarga todos los archivos PNG
4. Cópialos a la carpeta `public/`

### Opción 2: Crear Iconos Manualmente

Necesitas crear iconos en estos tamaños:
- 72x72
- 96x96
- 128x128
- 144x144
- 152x152
- 192x192
- 384x384
- 512x512

**Herramientas recomendadas:**
- [PWA Asset Generator](https://github.com/onderceylan/pwa-asset-generator)
- [RealFaviconGenerator](https://realfavicongenerator.net/)
- Photoshop/GIMP

### Opción 3: Usar un Logo Existente

Si tienes un logo:
1. Asegúrate que sea cuadrado (1:1)
2. Úsalo como base para generar todos los tamaños
3. Colócalos en `public/` con nombres: `icon-{tamaño}x{tamaño}.png`

## ✅ Verificar que Funciona

1. **Abre la app en el navegador**
2. **Abre DevTools** (F12)
3. Ve a la pestaña **"Application"** o **"Aplicación"**
4. En el menú lateral, busca **"Manifest"**
5. Deberías ver:
   - ✅ Manifest válido
   - ✅ Iconos cargados
   - ✅ Service Worker registrado

## 🔧 Troubleshooting

### No aparece el prompt de instalación:

1. **Verifica HTTPS**: Las PWA requieren HTTPS (o localhost)
2. **Verifica el manifest.json**: Debe estar en `/public/manifest.json`
3. **Verifica los iconos**: Deben existir en `/public/`
4. **Verifica el Service Worker**: Debe estar registrado

### Los iconos no se ven:

1. Verifica que los archivos existan en `public/`
2. Verifica los nombres: deben ser exactos (`icon-192x192.png`)
3. Limpia la caché del navegador
4. Verifica la consola por errores 404

### El Service Worker no se registra:

1. Abre DevTools → Application → Service Workers
2. Verifica que `sw.js` esté en `/public/sw.js`
3. Verifica la consola por errores
4. Asegúrate de estar en HTTPS o localhost

## 📝 Archivos Necesarios

```
public/
├── manifest.json          ✅ Ya creado
├── sw.js                   ✅ Ya creado
├── icon-72x72.png          ⚠️ Necesitas generarlo
├── icon-96x96.png          ⚠️ Necesitas generarlo
├── icon-128x128.png        ⚠️ Necesitas generarlo
├── icon-144x144.png        ⚠️ Necesitas generarlo
├── icon-152x152.png        ⚠️ Necesitas generarlo
├── icon-192x192.png        ⚠️ Necesitas generarlo
├── icon-384x384.png        ⚠️ Necesitas generarlo
└── icon-512x512.png        ⚠️ Necesitas generarlo
```

## 🚀 Próximos Pasos

1. **Genera los iconos** usando el generador o manualmente
2. **Colócalos en `public/`**
3. **Prueba la instalación** en tu celular
4. **Personaliza el manifest.json** si quieres cambiar colores/nombre

## 💡 Ventajas de PWA

- ✅ **No necesita Play Store/App Store**
- ✅ **Instalación rápida** desde el navegador
- ✅ **Funciona offline** (con Service Worker)
- ✅ **Actualizaciones automáticas**
- ✅ **Icono en la pantalla de inicio**
- ✅ **Experiencia como app nativa**

