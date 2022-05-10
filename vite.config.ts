import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import WindiCSS from "vite-plugin-windicss"

export default defineConfig({
  plugins: [solidPlugin(), ...WindiCSS({
    config: {
      theme: {
        extend: {
          colors: {
            yellow: "#FFF208",
            "strong-blue": "#0D63F8",
            pink: "#FF2965",
            "light-blue": "#00FFDB"
          }
        }
      }
    }
  })],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
});
