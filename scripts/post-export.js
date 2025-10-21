const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '../docs');
const nextDir = path.join(docsDir, '_next');
const staticSrc = path.join(nextDir, 'static');
const staticDest = path.join(docsDir, 'static');

console.log('Starting post-export tasks...');

// Create .nojekyll file to prevent GitHub Pages from ignoring files starting with underscore
fs.writeFileSync(path.join(docsDir, '.nojekyll'), '');
console.log('✓ Created .nojekyll file');

// Move _next/static to static
if (fs.existsSync(staticSrc)) {
  // Remove old static folder if it exists
  if (fs.existsSync(staticDest)) {
    fs.rmSync(staticDest, { recursive: true, force: true });
  }
  
  // Move _next/static to static
  fs.renameSync(staticSrc, staticDest);
  console.log('✓ Moved _next/static to static/');
  
  // Remove the now-empty _next directory
  if (fs.existsSync(nextDir)) {
    fs.rmSync(nextDir, { recursive: true, force: true });
    console.log('✓ Removed _next directory');
  }
}

// Update all HTML files to replace _next/static with static
function updateHtmlFiles(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      updateHtmlFiles(filePath);
    } else if (file.endsWith('.html')) {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      
      // Replace _next/static with static
      content = content.replace(/_next\/static/g, 'static');
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✓ Updated ${path.relative(docsDir, filePath)}`);
      }
    }
  });
}

updateHtmlFiles(docsDir);

console.log('✓ Post-export tasks completed successfully!');
