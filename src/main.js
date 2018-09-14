import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './_store'
import './services/lodash'
import './services/websocket'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')