import Vue from 'vue'
import Router from 'vue-router'
import addThing from '@/components/addThing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'addThing',
      component: addThing
    }
  ]
})
