import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'

Vue.config.productionTip = false

Vue.filter('formatDate', (value) => {
  if(!value) {
    return '';
  } else {
    return moment(value.toString()).format('MM/DD/YYYY hh:mm');
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
