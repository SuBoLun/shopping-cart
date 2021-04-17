import Vue from 'vue'
import App from './App.vue'
// import Vuex from 'vuex'
import router from './router'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import mock from './mock/mock.js'
import store from './store'


Vue.config.productionTip = false

// Vue.use(Vuex)
Vue.use(ViewUI)

new Vue({
  render: h => h(App),
  router,
  mock,
  store
}).$mount('#app')



