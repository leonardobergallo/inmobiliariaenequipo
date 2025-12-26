# 🚀 Desplegar en Vercel - Guía Completa

## ✅ Configuración Lista

El proyecto ya está configurado para Vercel. Solo necesitas conectarlo.

## 📋 Pasos para Desplegar

### Opción 1: Desde la Web (Más Fácil) ⭐

1. **Ve a [vercel.com](https://vercel.com)**
2. **Inicia sesión** con GitHub
3. **Haz clic en "Add New Project"**
4. **Importa el repositorio:**
   - Busca: `leonardobergallo/inmobiliariaenequipo`
   - Haz clic en "Import"
5. **Configuración automática:**
   - Framework Preset: **Vite** (detectado automáticamente)
   - Build Command: `npm run build` (automático)
   - Output Directory: `dist` (automático)
   - Install Command: `npm install` (automático)
6. **Variables de Entorno (opcional):**
   - Si necesitas la base de datos, agrega:
     - `DATABASE_URL` = tu conexión de Neon
7. **Haz clic en "Deploy"**
8. **¡Listo!** Tu app estará en línea en 1-2 minutos

### Opción 2: Desde la Terminal (CLI)

```bash
# Instalar Vercel CLI
npm install -g vercel

# Iniciar sesión
vercel login

# Desplegar
vercel

# Para producción
vercel --prod
```

## 🔧 Configuración Actual

El archivo `vercel.json` está configurado con:
- ✅ Rewrites para SPA (todas las rutas van a index.html)
- ✅ Sin conflictos de configuración

## ✅ Verificación

Después del deploy:

1. **Abre la URL** que te da Vercel
2. **Verifica que funciona:**
   - ✅ La app carga correctamente
   - ✅ Las rutas funcionan (prueba navegar)
   - ✅ El manifest.json está accesible
   - ✅ Los iconos se ven

3. **Prueba la PWA:**
   - Abre en el celular
   - Debería aparecer el prompt de instalación
   - Instala la app
   - Verifica que funciona

## 🔄 Actualizaciones Automáticas

Cada vez que hagas `git push`:
- ✅ Vercel detectará los cambios automáticamente
- ✅ Reconstruirá la app
- ✅ Desplegará la nueva versión

## 🌐 Dominio Personalizado (Opcional)

1. Ve a tu proyecto en Vercel
2. Settings → Domains
3. Agrega tu dominio personalizado
4. Sigue las instrucciones de DNS

## 🐛 Troubleshooting

### Error: "routes cannot be present"
✅ **Solucionado** - El `vercel.json` ya está corregido

### Build falla
- Verifica que `npm run build` funcione localmente
- Revisa los logs en Vercel Dashboard

### PWA no funciona
- Verifica que estés en HTTPS (Vercel lo hace automáticamente)
- Revisa que `manifest.json` y `sw.js` estén en `public/`
- Verifica los iconos en DevTools → Application → Manifest

### Rutas no funcionan
- El `vercel.json` ya tiene el rewrite configurado
- Todas las rutas deben redirigir a `index.html`

## 📝 Notas Importantes

- ✅ **HTTPS automático**: Vercel usa HTTPS por defecto (necesario para PWA)
- ✅ **CDN global**: Tu app se sirve desde múltiples ubicaciones
- ✅ **Deploy automático**: Con cada push a GitHub
- ✅ **Preview deployments**: Cada PR tiene su propia URL

## 🎉 ¡Listo!

Tu app estará en línea y lista para instalar en cualquier celular.

**URL típica:** `inmobiliariaenequipo.vercel.app` o `inmobiliariaenequipo-[hash].vercel.app`

