import { execSync } from 'child_process';

// Run the Vite build with the Vercel-specific config
console.log('Building for Vercel...');
execSync('vite build --config vite.vercel.config.js', { stdio: 'inherit' });
console.log('Build completed successfully!');