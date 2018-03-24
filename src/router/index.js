import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MariaGabriela from '@/components/MariaGabriela'
import Contador from '@/components/Contador'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/sobre',
      name: 'MariaGabriela',
      component: MariaGabriela
    },
    {
      path:'/contar',
      name:'Contador',
      component: Contador
    }
  ]
})
