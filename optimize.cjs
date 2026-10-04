const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

const files = fs.readdirSync(publicDir);

async function optimizeImages() {
  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      const filePath = path.join(publicDir, file);
      console.log(`Optimizing ${file}...`);
      
      const tmpPath = path.join(publicDir, `tmp_${file}`);
      
      try {
        await sharp(filePath)
          .resize(800, null, { withoutEnlargement: true }) // Resize width to max 800px
          .png({ quality: 70, compressionLevel: 9 }) // Compress PNG
          .jpeg({ quality: 70 }) // Compress JPEG if any
          .toFile(tmpPath);
          
        // Overwrite original
        fs.renameSync(tmpPath, filePath);
        console.log(`Successfully optimized ${file}`);
      } catch (e) {
        console.error(`Failed to optimize ${file}:`, e);
      }
    }
  }
}

optimizeImages();
