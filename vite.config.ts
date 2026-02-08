import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, '.', '');
  const apiKey = env.GEMINI_API_KEY ?? env.API_KEY ?? '';
  const isBuild = command === 'build';
  const githubPagesBase = '/Prof.Tang---EconInteract-Demand-Supply/';

  return {
    plugins: [react()],
    // Use an absolute repo base in production so GitHub Pages asset URLs resolve reliably.
    base: isBuild ? githubPagesBase : '/',
    define: {
      'process.env.API_KEY': JSON.stringify(apiKey),
      'process.env.GEMINI_API_KEY': JSON.stringify(apiKey)
    },
    build: {
      outDir: 'dist',
      sourcemap: false
    }
  };
});
