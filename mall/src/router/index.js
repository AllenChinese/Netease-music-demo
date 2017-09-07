import Vue from 'vue'
import Router from 'vue-router'
import findMusicComponent from '../view/findMusicPage/findMusicComponent.vue'
import hyComponent from '../view/findMusicPage/musicTypeController/hyMusic.vue'
import gtComponent from '../view/findMusicPage/musicTypeController/gtMusic.vue'
import rhComponent from '../view/findMusicPage/musicTypeController/rhMusic.vue'
import omComponent from '../view/findMusicPage/musicTypeController/omMusic.vue'

import myMusicComponent from '../view/myMusicComponent.vue'
import friendComponent from '../view/friendComponent.vue'
import musicManComponent from '../view/musicManComponent.vue'
import downLoadComponent from '../view/downLoadComponent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/findMusicComponent',
      name: 'findMusicComponent',
      component: findMusicComponent,
      children: [
        {
          path: '/',
          name: 'hyComponent',
          component: hyComponent
        },
        {
          path: 'gtComponent',
          name: 'gtComponent',
          component: gtComponent
        },
        {
          path: 'rhComponent',
          name: 'rhComponent',
          component: rhComponent
        },
        {
          path: 'omComponent',
          name: 'omComponent',
          component: omComponent
        }
      ]
    },
    {
      path: '/myMusicComponent',
      name: 'myMusicComponent',
      component: myMusicComponent
    },
    {
      path: '/friendComponent',
      name: 'friendComponent',
      component: friendComponent
    },
    {
      path: '/musicManComponent',
      name: 'musicManComponent',
      component: musicManComponent
    },
    {
      path: '/downLoadComponent',
      name: 'downLoadComponent',
      component: downLoadComponent
    }
  ]
})
