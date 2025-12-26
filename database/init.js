import pool from './config.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function initDatabase() {
  try {
    console.log('🔄 Inicializando base de datos...');
    
    // Leer el archivo SQL
    const schemaPath = path.join(__dirname, 'schema.sql');
    const schema = fs.readFileSync(schemaPath, 'utf8');
    
    // Ejecutar el schema
    await pool.query(schema);
    
    console.log('✅ Base de datos inicializada correctamente');
    console.log('📊 Tablas creadas:');
    console.log('   - users');
    console.log('   - properties');
    console.log('   - property_images');
    console.log('   - property_amenities');
    console.log('   - favorites');
    console.log('   - saved_searches');
    console.log('   - property_alerts');
    console.log('   - messages');
    console.log('   - contacts');
    
    // Insertar datos de ejemplo (opcional)
    await insertSampleData();
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error al inicializar la base de datos:', error);
    process.exit(1);
  }
}

async function insertSampleData() {
  try {
    console.log('\n🔄 Insertando datos de ejemplo...');
    
    // Insertar usuario de ejemplo (agente)
    const agentResult = await pool.query(
      `INSERT INTO users (name, email, password, phone, role) 
       VALUES ($1, $2, $3, $4, $5) 
       ON CONFLICT (email) DO NOTHING
       RETURNING id`,
      ['Juan Pérez', 'juan.perez@inmobiliaria.com', 'hashed_password', '+54 11 1234-5678', 'agent']
    );
    
    let agentId = agentResult.rows[0]?.id;
    
    if (!agentId) {
      // Si ya existe, obtener su ID
      const existingAgent = await pool.query(
        'SELECT id FROM users WHERE email = $1',
        ['juan.perez@inmobiliaria.com']
      );
      agentId = existingAgent.rows[0]?.id;
    }
    
    // Insertar propiedades de ejemplo
    const properties = [
      {
        title: 'Casa Moderna en Centro',
        description: 'Hermosa casa totalmente renovada con impresionantes vistas.',
        type: 'casa',
        price: 250000,
        address: 'Av. Reforma 123',
        city: 'Ciudad de México',
        bedrooms: 3,
        bathrooms: 2,
        area: 120,
        featured: true,
        agent_id: agentId
      },
      {
        title: 'Loft Exclusivo Polanco',
        description: 'Loft moderno en zona exclusiva de Polanco.',
        type: 'departamento',
        price: 180000,
        address: 'Calle Campos Elíseos 456',
        city: 'Ciudad de México',
        bedrooms: 1,
        bathrooms: 1,
        area: 85,
        featured: false,
        agent_id: agentId
      }
    ];
    
    for (const prop of properties) {
      const propResult = await pool.query(
        `INSERT INTO properties (title, description, type, price, address, city, bedrooms, bathrooms, area, featured, agent_id)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
         ON CONFLICT DO NOTHING
         RETURNING id`,
        [prop.title, prop.description, prop.type, prop.price, prop.address, prop.city, 
         prop.bedrooms, prop.bathrooms, prop.area, prop.featured, prop.agent_id]
      );
      
      if (propResult.rows[0]) {
        const propertyId = propResult.rows[0].id;
        
        // Insertar imagen de ejemplo
        await pool.query(
          `INSERT INTO property_images (property_id, image_url, is_primary, order_index)
           VALUES ($1, $2, $3, $4)
           ON CONFLICT DO NOTHING`,
          [propertyId, 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYAUUzwn1_LUTQkn1x0yIobFAzBHJJT6qejhkiDcqPkb59dLqKLD020qDMPLogrUd6d8KdyQXn_aB11ecOaRYPY7SNgxawhRO_rSyF3CpwYbYOB1ViQ2nbEJdP0I9OOqRanWGsaGcA7OGnCqiXzA2_gUjP6vAj3Mk_S28lI-cVaTGWSdK6c-Q7mZcJX3gWjjj0QKVoF0GwD6vX_yM-c1yfp7EZOqHYfv1nicyfoNhkObCUxEiOJlT-mAK-4kBWj1pXQoyDaCTOJu4', true, 0]
        );
        
        // Insertar amenidades
        const amenities = ['piscina', 'cochera', 'gimnasio'];
        for (const amenity of amenities) {
          await pool.query(
            `INSERT INTO property_amenities (property_id, amenity)
             VALUES ($1, $2)
             ON CONFLICT DO NOTHING`,
            [propertyId, amenity]
          );
        }
      }
    }
    
    console.log('✅ Datos de ejemplo insertados');
  } catch (error) {
    console.error('⚠️  Error al insertar datos de ejemplo:', error.message);
  }
}

initDatabase();

