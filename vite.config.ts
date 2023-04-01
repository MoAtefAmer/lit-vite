import { defineConfig } from 'vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [

  ],
  build: {
    lib: {
      entry: 'src/my-element.ts',
      formats: ['es'],
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
})
