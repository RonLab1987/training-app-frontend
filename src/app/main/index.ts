import '../ioc-container'

import { container } from 'tsyringe'
import Vue from 'vue'

import App from '@/ui/App.vue'
import router from '@/ui/router'

import './registerServiceWorker'
import { TargetTrainingNode } from '@/domain/type'
import { ObservableEndpointI } from '@/domain/repository-interfaces/observable-endpoint.interface'
import { WorkoutDraftListServiceI } from '@/domain/service-interfaces/workout-draft-list-service.interface'
import { WorkoutDraftListVm } from '@/ui/view-model/workout-draft-list-vm'
import { reaction } from 'mobx'

const service: WorkoutDraftListServiceI = container.resolve(
  'WorkoutDraftListService'
)
const vm: WorkoutDraftListVm = container.resolve('WorkoutDraftListVm')

console.log('vm: ', vm)
reaction(
  () => vm.workoutDraftList,
  (list) => {
    console.log('-- vm -- list: ', list)
  }
)

const list$: ObservableEndpointI<TargetTrainingNode[]> = service.getList$()
console.log('list$: ', list$)

list$.subscribe(
  (list) => {
    console.log('-- zz -- list: ', list)
  },
  (error) => {
    throw error
  },
  () => {
    console.log('complete')
  }
)

Vue.config.productionTip = false

export const app = new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
