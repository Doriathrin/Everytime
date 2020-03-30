import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/views/Home.vue'
// import Course from '@/course/Course.vue'
// import Records from '@/records/records.vue'
// import Persona from '@/persona/Persona.vue'

// 路由懒加载的两种方法
// const Course = () => import('@/course/Course');
// const Records = (resolve) => {
//   import('@/records/records').then((modul) => {
//     resolve(modul);
//   })
// }

//  官方文档推荐写法 按模块划分懒加载 
// const Persona = r => require.ensure([], () => r(require('@/persona/Persona')), 'Persona')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: (resolve) => {
      require(['@/views/Home'], resolve)
    }
  },
  {
    path: '/course',
    name: 'Course',
    // 在路由内
    component: () => import('@/course/Course')
  },
  {
    path: '/records',
    name: 'Records',
    component: (resolve) => {
      require(['@/records/records'], resolve)
    }
  },
  {
    path: '/persona',
    name: 'Persona',
    component: (resolve) => {
      require(['@/persona/Persona'], resolve)
    }
  },
  {
    path: '/Practise',
    name: 'Practise',
    component: (resolve) => {
      require(['@/practise/Practise'], resolve)
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
