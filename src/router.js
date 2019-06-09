import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Person from './views/Person.vue'
import MyClub from './components/MyClub.vue'
import FolChain from './components/Folchain.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
      {
          path: '/login',
          component: Login
      },
      {
          path: '/home',
          name: 'home',
          component: Home
      },
      {
          path: '/',
          component: Login
      },
      {
          path: '/club',
          component: MyClub

      },
      {
          path: '/person',
          component: Person
      },
      {
          path: '/folchain',
          component: FolChain
      }
  ]
})
