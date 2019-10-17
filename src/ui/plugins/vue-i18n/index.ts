import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { ru } from '@/ui/i18n/ru'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'ru',
  messages: { ru }
})
