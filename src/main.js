// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  openid:"",
  router,
  template: '<App/>',
  components: { App }
});
Vue.filter('date', function(value) {
  return value.substring(0,19);
});

