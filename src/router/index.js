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
    component: () => import('@/views/Home'),
    meta: {
      title:'首页'
    }
    
  },
  {
    path: '/course',
    name: 'Course',
    // 在路由内
    component: () => import('@/course/Course'),
    meta: {
      footer: true,
      title:'特色课'
    }
  },
  {
    path: '/records',
    name: 'Records',
    component: () => import('@/records/records'),
      
    
  },
  {
    path: '/persona',
    name: 'Persona',
    component: () => import('@/persona/Persona')
      
    
  },
  {
    path: '/Practise',
    name: 'Practise',
    component: () => import('@/practise/Practise')
      
    
  },
  {
    path: '/details',
    name: 'Details',
    component: () => import('@/details/Details'),
    meta: { 
      footer: true,
      title:'课程详情'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/login/Login'),
    meta: {
      title: '登录页'
    }
  },
  {
    path: '/smlogin',
    name: 'Smlogin',
    component: () => import('@/Smlogin/Smlogin'),
    meta: {
      title: '登录注册页'
    }
  },
  {
    path: '/counseling',
    name: 'Counseling',
    component: () => import('@/counseling/Counseling'),
    meta: {
      title: '一对一辅导'
    }
  },
  {
    path: '/password',
    name: 'Password',
    component: () => import('@/password/Password'),
    meta: {
      title: '设置密码'
    }
  },
  {
    path: '/information',
    name: 'inforMation',
    component: () => import('@/information/inforMation'),
    meta: {
      title: '信息填写'
    }
  },
  {
    path: '/reservation',
    name: 'Reservation',
    component: () => import('@/reservation/reservation'),
    meta: {
      title: '预约课程'
    }
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/Search/Search'),
    meta: {
      title: '历史搜索'
    }
  },
  {
    path: '/subject',
    name: 'Subject',
    component: () => import('@/information/Subject/Subject'),
    meta: {
      title: '学科'
    }
  },
  {
    path: '/point',
    name: 'Point',
    component: () => import('@/practise/point/point'),
    meta: {
      title: '数学'
    }
  },
  {
    path: '/oto',
    name: 'Oto',
    component: () => import('@/persona/oto/Oto'),
    meta: {
      title: '一对一辅导'
    }
  },
  {
    path: '/myStudy',
    name: 'MyStudy',
    component: () => import('@/persona/myStudy/MyStudy'),
    meta: {
      title: '我的特色课'
    }
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
