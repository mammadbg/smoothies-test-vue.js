// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Navbar from './components/Navbar.vue'
import Index from './components/Index.vue'
import init from '@/firebase/init'

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  components: {
    App,
    Navbar,
    Index
  },
  template: '<App/>'
})
