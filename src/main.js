import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import 'popper.js'
import 'bootstrap'

import {router} from './router'
import './form'
import './axios'
import store from './store'

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
