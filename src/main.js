// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
import { Tooltip } from 'element-ui';
Vue.use(Tooltip);
Vue.use(Vuex)

Vue.config.productionTip = false;
let _store=new Vuex.Store(store);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:_store,
  components: { App },
  template: '<App/>'
})
