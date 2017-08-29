import Vue from 'vue'
import Router from 'vue-router'
import takePointsComponent from '@/components/takePointsComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'takePointsComponent',
      component: takePointsComponent
    }
  ]
})
