// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import router from './router'
import Layout from './components/layout'//路由
import Resource from 'vue-resource'
import _ from 'lodash'
import store from './store/index.js'

Vue.config.productionTip = false; //关闭生产模式下给出的提示
Vue.use(Resource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<Layout/>',
  components: { Layout }
})
