import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './my-theme/index.less'

Vue.config.productionTip = false

Vue.use(iView)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
