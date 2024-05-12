import { defineConfig } from 'vite';
import { resolve } from 'path';

function moveOutputPlugin() {
  return {
    name: 'move-output',
    enforce: 'post',
    apply: 'build',
    async generateBundle(options, bundle) {
      for (const fileName in bundle) {
        if (fileName.startsWith('pages/')) {
          const newFileName = fileName.slice('pages/'.length);
          bundle[fileName].fileName = newFileName;
        }
      }
    },
  };
}

export default defineConfig({
  server: {
    // 啟動 server 時預設開啟的頁面
    open: './index.html',
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, './index.html'),
      },
      output: {
        index: './index.html',
      },
    },
    outDir: resolve(__dirname, './dist'),
  },
});
