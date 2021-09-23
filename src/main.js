import Vue from 'vue'
import router from "./router";
import axios from 'axios'
import App from './App.vue'

Vue.config.productionTip = false

Vue.prototype.$axios = axios
Vue.prototype.$dataHost = "http://localhost:8080/"

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
