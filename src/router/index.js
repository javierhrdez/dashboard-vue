import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Grafico from '@/components/Grafico'

Vue.use(Router)

/*
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
*/

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Grafico',
      component: Grafico
    }
  ]
})
