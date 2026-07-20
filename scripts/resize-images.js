const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(process.cwd(), 'public/images');

// Images to resize
const images = [
  { name: 'carousel1-mobile.webp', width: 412 },
  { name: 'carousel1.webp', width: 750 },
  { name: 'carousel2.webp', width: 750 },
  { name: 'logo.png', width: 56 }, // For mobile
];

async function resizeImages() {
  for (const img of images) {
    const inputPath = path.join(imagesDir, img.name);
    const outputPath = path.join(imagesDir, `optimized-${img.name}`);
    
    // Check if file exists
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️ File not found: ${img.name}`);
      continue;
    }

    try {
      await sharp(inputPath)
        .resize({ width: img.width, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath);
      
      console.log(`✅ Resized: ${img.name} -> ${img.width}px width`);
      
      // Get file sizes
      const originalSize = fs.statSync(inputPath).size / 1024;
      const newSize = fs.statSync(outputPath).size / 1024;
      console.log(`   Original: ${originalSize.toFixed(1)}KB → New: ${newSize.toFixed(1)}KB (${((1 - newSize/originalSize) * 100).toFixed(1)}% reduction)`);
      
      // Replace original with optimized version
      fs.renameSync(outputPath, inputPath);
    } catch (error) {
      console.error(`❌ Error processing ${img.name}:`, error.message);
    }
  }
}

resizeImages();