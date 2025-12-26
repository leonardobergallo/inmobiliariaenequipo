// Script para generar iconos PWA
// Ejecutar con: node generate-icons.js

const fs = require('fs');
const path = require('path');

// Crear un SVG simple que luego se puede convertir a PNG
const createSVGIcon = (size) => {
  return `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
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

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

console.log('Generando iconos SVG...');
sizes.forEach(size => {
  const svg = createSVGIcon(size);
  fs.writeFileSync(`icon-${size}x${size}.svg`, svg);
  console.log(`✅ Creado: icon-${size}x${size}.svg`);
});

console.log('\n⚠️  Nota: Estos son archivos SVG. Para PNG necesitas:');
console.log('1. Abrir create-icons-simple.html en el navegador');
console.log('2. O usar una herramienta online para convertir SVG a PNG');
console.log('3. O usar ImageMagick: convert icon-192x192.svg icon-192x192.png');

