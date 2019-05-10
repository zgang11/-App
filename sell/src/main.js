// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
// import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueResource)

/* eslint-disable no-new */
var app = new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
