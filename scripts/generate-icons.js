// Script para generar iconos PWA automáticamente
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const publicDir = path.join(__dirname, '..', 'public');

// Crear SVG base
const createSVG = (size) => {
  return `
<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#137fec;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0d6bc2;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" fill="url(#grad)" rx="${size * 0.15}"/>
  <circle cx="${size * 0.15}" cy="${size * 0.15}" r="${size * 0.08}" fill="#E11B22"/>
  <text x="50%" y="50%" font-size="${size * 0.4}" text-anchor="middle" dominant-baseline="middle" fill="white" font-family="Arial, sans-serif" font-weight="bold">🏠</text>
</svg>`;
};

async function generateIcons() {
  console.log('🎨 Generando iconos PWA...\n');
  
  for (const size of sizes) {
    try {
      const svg = createSVG(size);
      const outputPath = path.join(publicDir, `icon-${size}x${size}.png`);
      
      await sharp(Buffer.from(svg))
        .resize(size, size)
        .png()
        .toFile(outputPath);
      
      console.log(`✅ Generado: icon-${size}x${size}.png`);
    } catch (error) {
      console.error(`❌ Error generando icon-${size}x${size}.png:`, error.message);
    }
  }
  
  console.log('\n✨ ¡Iconos generados exitosamente!');
  console.log('📁 Archivos guardados en: public/');
  console.log('\n🚀 La PWA está lista para instalarse!');
}

generateIcons().catch(console.error);

