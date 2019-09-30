import Vue from 'vue'

Vue.filter('formatThousand', number =>
  number.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
)
