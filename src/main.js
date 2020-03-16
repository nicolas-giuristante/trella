// Vue Global
import Vue from 'vue'
import App from './App.vue'

// Portal
import PortalVue from 'portal-vue'
Vue.use(PortalVue)

// Event Bus
window.$eventBus = new Vue()
// Vue.use(VModal, { dynamic: true, dynamicDefaults: { clickToClose: false } })

// Custom CSS
import './assets/index.css';

// Misc
Vue.config.productionTip = false

// Init
new Vue({
    render: h => h(App),
}).$mount('#app')
