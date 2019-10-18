import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

export function initVuetifyWithI18n(i18n: any) {
  Vue.use(Vuetify)
  return new Vuetify({
    icons: {
      iconfont: 'md'
    },
    lang: {
      current: 'ru',
      t: (key, ...params) => i18n.t(key, params)
    }
  })
}
