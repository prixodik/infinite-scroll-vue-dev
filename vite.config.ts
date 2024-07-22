import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
	outDir: 'dist',
    target: 'esnext', // Указываем целевую версию JavaScript
    minify: 'esbuild', // Минификация с использованием esbuild для высокой скорости
    chunkSizeWarningLimit: 500, // Устанавливаем лимит размера чанков для предупреждений
    rollupOptions: {
      output: {
        manualChunks: {
          // Разделение бандла на более мелкие чанки
          vendor: ['vue']
        }
      }
    },
	sourcemap: false // Отключение генерации source maps
  },
  optimizeDeps: {
    include: ['vue'],
    esbuildOptions: {
      target: 'es2020'
    }
  },
  server: {
    open: true, // Автоматически открывать браузер при запуске сервера разработки
    hmr: {
      overlay: false // Отключение оверлея HMR при ошибках
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
      },
    },
  },
});
