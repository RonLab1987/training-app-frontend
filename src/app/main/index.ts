import '../ioc-container'
import Vue from 'vue'
import { i18n } from '@/ui/plugins/vue-i18n'
import { initVuetifyWithI18n } from '@/ui/plugins/vuetify'
import { router } from '@/router'
import App from '@/ui/App.vue'
import './registerServiceWorker'
import VueRx from 'vue-rx'

Vue.config.productionTip = false
Vue.use(VueRx)

export const app = new Vue({
  router,
  i18n,
  vuetify: initVuetifyWithI18n(i18n),
  render: (h) => h(App)
}).$mount('#app')
