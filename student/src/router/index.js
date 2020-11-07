import Vue from 'vue'
import Router from 'vue-router'
import student from '@/components/student'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/student',
      name: 'student',
      component: student
    }
  ]
})
