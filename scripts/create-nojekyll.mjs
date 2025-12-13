import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const distPath = join(process.cwd(), 'dist');
const nojekyllPath = join(distPath, '.nojekyll');

// Ensure dist directory exists
if (!existsSync(distPath)) {
  mkdirSync(distPath, { recursive: true });
}

// Create .nojekyll file
writeFileSync(nojekyllPath, '');
console.log('Created .nojekyll file');
