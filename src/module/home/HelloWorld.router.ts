import { RouteRecordRaw } from 'vue-router'
import HelloWorld from './HelloWorld.vue'

const route:RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/home',
    component: HelloWorld
  }
]

export default route
