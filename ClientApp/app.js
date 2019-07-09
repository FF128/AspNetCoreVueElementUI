import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import './styles/index.scss' // global css
import axios from 'axios'
import router from './router/index'
import store from './store'
import {
  sync
} from 'vuex-router-sync'
import App from 'components/app-root'

import './icons/index' // icon
import './permission' // permission control

// Registration of global components
//Vue.component('icon', FontAwesomeIcon)

// set ElementUI lang to EN
Vue.use(ElementUI, {
  locale
})
Vue.config.productionTip = false

Vue.prototype.$http = axios

sync(store, router)

const app = new Vue({
  store,
  router,
  ...App
})

export {
  app,
  router,
  store
}
