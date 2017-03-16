import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

// If you'd like to access this.$http like in vue-resource
 Vue.prototype.$http = axios
 // Or if you want to use axios normally, just change "this.$http" to "axios".

new Vue({
  el: '#app',
  render: h => h(App)
})
