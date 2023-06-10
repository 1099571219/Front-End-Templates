import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      //配置支持文件类型
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
      //声明 ts 类型文件 解决 api 报红找不到
      dts: 'src/config/auto-imports.d.ts',
      //配置使用自动引入 api 的库
      imports: [
        'vue',
        {
          //扩展 vue-router api 自动引入
          'vue-router': [
            'useLink',
            'useRoute',
            'useRouter',
            'onBeforeRouteLeave',
            'onBeforeRouteUpdate',
            'createRouter',
            'createWebHashHistory',
          ],
        },
        'pinia',
      ],
    }),
  ],
})
