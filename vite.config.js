import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';
// https://vitejs.dev/config/
export default defineConfig({
    //插件体系
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
    server: {
        open: false,// 启动时是否打开页面
        host: '127.0.0.1',
        port: 520,
        proxy: {
            "^buss/": {
                target: 'http://www.ceshi.com',//转录地址
                changeOrigin: true, //允许跨域
                rewrite: (peth) => path.replace(/^\/api/, '')
            }
        }
    }
})
