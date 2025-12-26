# 🗄️ Base de Datos - PostgreSQL (Neon)

## ✅ Estado

La base de datos está configurada y lista para usar con **Neon PostgreSQL**.

## 📊 Estructura

### Tablas Creadas

1. **users** - Usuarios del sistema (clientes, agentes, admin)
2. **properties** - Propiedades inmobiliarias
3. **property_images** - Imágenes de propiedades
4. **property_amenities** - Características/amenidades
5. **favorites** - Propiedades favoritas de usuarios
6. **saved_searches** - Búsquedas guardadas
7. **property_alerts** - Alertas personalizadas
8. **messages** - Mensajes/chat entre usuarios
9. **contacts** - Consultas de contacto

## 🚀 Comandos

### Inicializar Base de Datos
```bash
npm run db:init
```

Este comando:
- ✅ Crea todas las tablas
- ✅ Crea los índices
- ✅ Inserta datos de ejemplo

## 🔗 Conexión

**URL de Conexión:**
```
postgresql://neondb_owner:npg_OnH38rWwqlbf@ep-wandering-wildflower-aherjczi-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require
```

## 📝 Uso en la Aplicación

### Ejemplo: Obtener Propiedades

```javascript
import { getProperties } from './database/queries.js';

// Obtener todas las propiedades
const properties = await getProperties();

// Con filtros
const filtered = await getProperties({
  city: 'Ciudad de México',
  type: 'casa',
  minPrice: 100000,
  maxPrice: 500000,
  bedrooms: 3
});
```

### Ejemplo: Crear Usuario

```javascript
import { createUser } from './database/queries.js';

const user = await createUser({
  name: 'Juan Pérez',
  email: 'juan@example.com',
  password: 'hashed_password',
  phone: '+54 11 1234-5678',
  role: 'user'
});
```

## 🔐 Variables de Entorno

Crea un archivo `.env`:

```env
DATABASE_URL=postgresql://neondb_owner:npg_OnH38rWwqlbf@ep-wandering-wildflower-aherjczi-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require
```

## 📦 Archivos

- `database/config.js` - Configuración de conexión
- `database/schema.sql` - Esquema de la base de datos
- `database/init.js` - Script de inicialización
- `database/queries.js` - Funciones de consulta

## 🎯 Próximos Pasos

1. **Crear API Backend** - Endpoints REST para conectar React con la BD
2. **Autenticación** - Implementar login/registro con JWT
3. **Integrar con React** - Conectar las páginas con datos reales

## 🔍 Verificar Conexión

```bash
node -e "import('./database/config.js').then(m => m.default.query('SELECT NOW()').then(r => console.log('✅ Conectado:', r.rows[0])))"
```

---

**Nota:** La base de datos ya está inicializada con datos de ejemplo. Puedes empezar a usarla inmediatamente.

