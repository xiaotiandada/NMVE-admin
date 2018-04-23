import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/readme',
      component: () => import('@/views/readme/Home'),
      children: [
        {
          path: '/',
          component: () => import('@/views/readme/components/Readme')
        },
        {
          path: '/upload',
          component: () => import('@/views/readme/components/Upload')
        },
        {
          path: '/modifyUser',
          component: () => import('@/views/readme/components/ModifyUser')
        },
        {
          path: '/modifyPassword',
          component: () => import('@/views/readme/components/ModifyPassword')
        },
        {
          path: '/userCenter',
          component: () => import('@/views/readme/components/UserCenter')
        },
        {
          path: '/success',
          component: () => import('@/views/readme/components/Success')
        }
      ]
    },
    {
      path: '/register',
      component: () => import('@/views/reg/Register')
    },
    {
      path: '/register-success',
      component: () => import('@/views/reg/RegisterSuccess')
    },
    {
      path: '/login',
      component: () => import('@/views/login/Login')
    }
  ]
})
