import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: ['.js', '.ts', '.json'], // 导入时想要省略的扩展名列表
    alias: {
      '@': path.resolve(__dirname, './src') // 路径别名
    }
  },
})
