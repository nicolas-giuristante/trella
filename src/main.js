import Vue from 'vue'
import App from './App.vue'

import VModal from 'vue-js-modal'
Vue.use(VModal)
// Vue.use(VModal, { dynamic: true, dynamicDefaults: { clickToClose: false } })

import './assets/index.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
