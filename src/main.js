import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from '@/routes/router'
import 'vue-material-design-icons/styles.css'
import '@/utils/filters'

Vue.config.productionTip = false

Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
