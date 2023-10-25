import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  //   dynamicImportVars({
  //   // options
  // })
  ],
  resolve: {
    extensions: ['.js', '.ts', '.json'], // 导入时想要省略的扩展名列表
    alias: {
      '@': path.resolve(__dirname, './src') // 路径别名
    }
  },
})
