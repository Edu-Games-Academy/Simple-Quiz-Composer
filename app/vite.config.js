import react from '@vitejs/plugin-react';
import getVersion from 'git-repo-version';
import * as path from 'path';
import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';

export default ({ mode }) => {
  const version = getVersion();
  console.log('🚀 ~ file: vite.config.js:9 ~ version:', version);

  // Load app-level env vars to node-level env vars.
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd()),
    VITE_APP_VERSION: version,
  };

  return defineConfig({
    server: {
      port: 4000,
    },
    plugins: [react(), svgr()],
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
  });
};
