import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
/// <reference types="vitest/config" />
// import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from 'unocss/vite'

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue',
    },
  },
}

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Unocss(),
  ],
  build: {
    rollupOptions,
    minify: 'terser', // boolean | 'terser' | 'esbuild'
    sourcemap: true, // 输出单独 source文件
    reportCompressedSize: true,
    cssCodeSplit: true,
    // 添加库模式配置
    lib: {
      entry: './src/entry.ts',
      name: 'SSYUI',
      fileName: 'ssy-ui',
      // 导出模块格式
      formats: ['es', 'umd', 'iife'],
    },
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler',
    },
  },
})
