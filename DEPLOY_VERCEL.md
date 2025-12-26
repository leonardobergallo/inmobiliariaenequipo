# 🚀 Desplegar en Vercel - Guía Rápida

## 📋 Pasos para Desplegar

### Opción 1: Desde la Web (Más Fácil)

1. **Ve a [vercel.com](https://vercel.com)**
2. **Inicia sesión** con GitHub, GitLab o Bitbucket
3. **Haz clic en "Add New Project"**
4. **Importa tu repositorio** (si está en GitHub/GitLab)
   - O arrastra la carpeta del proyecto
5. **Configuración automática:**
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. **Haz clic en "Deploy"**
7. **¡Listo!** Tu app estará en línea en 1-2 minutos

### Opción 2: Desde la Terminal (CLI)

1. **Instala Vercel CLI:**
```bash
npm install -g vercel
```

2. **Inicia sesión:**
```bash
vercel login
```

3. **Despliega:**
```bash
vercel
```

4. **Sigue las instrucciones:**
   - ¿Set up and deploy? → **Y**
   - ¿Which scope? → Selecciona tu cuenta
   - ¿Link to existing project? → **N**
   - ¿Project name? → `inmobiliaria-en-equipo` (o el que quieras)
   - ¿Directory? → **.** (actual)
   - ¿Override settings? → **N**

5. **Para producción:**
```bash
vercel --prod
```

## ✅ Verificación

Después del deploy:

1. **Abre la URL** que te da Vercel (ej: `tu-app.vercel.app`)
2. **Verifica que funciona:**
   - La app carga correctamente
   - Las rutas funcionan
   - El manifest.json está accesible
   - Los iconos se ven

3. **Prueba la PWA:**
   - Abre en el celular
   - Debería aparecer el prompt de instalación
   - Instala la app
   - Verifica que funciona offline

## 🔧 Configuración Automática

Vercel detectará automáticamente:
- ✅ Framework: Vite
- ✅ Build command: `npm run build`
- ✅ Output: `dist`
- ✅ Node version: Automático

## 📱 Probar en el Celular

1. **Abre la URL de Vercel** en tu celular
2. **En Android**: Aparecerá "Agregar a pantalla de inicio"
3. **En iOS**: Menú → "Agregar a pantalla de inicio"
4. **¡Listo!** La app está instalada

## 🔄 Actualizaciones

Cada vez que hagas `git push`:
- Vercel detectará los cambios
- Reconstruirá automáticamente
- Desplegará la nueva versión

O manualmente:
```bash
vercel --prod
```

## 🌐 Dominio Personalizado (Opcional)

1. Ve a tu proyecto en Vercel
2. Settings → Domains
3. Agrega tu dominio personalizado
4. Sigue las instrucciones de DNS

## 📝 Notas Importantes

- ✅ **HTTPS automático**: Vercel usa HTTPS por defecto (necesario para PWA)
- ✅ **CDN global**: Tu app se sirve desde múltiples ubicaciones
- ✅ **Deploy automático**: Con cada push a GitHub
- ✅ **Preview deployments**: Cada PR tiene su propia URL

## 🐛 Troubleshooting

### Build falla:
- Verifica que `npm run build` funcione localmente
- Revisa los logs en Vercel

### PWA no funciona:
- Verifica que estés en HTTPS (Vercel lo hace automáticamente)
- Revisa que `manifest.json` y `sw.js` estén en `public/`
- Verifica los iconos en DevTools → Application → Manifest

### Rutas no funcionan:
- Verifica `vercel.json` (ya está configurado)
- Todas las rutas deben redirigir a `index.html`

## 🎉 ¡Listo!

Tu app estará en línea y lista para instalar en cualquier celular.

