import Vue from 'vue'
import Router from 'vue-router'
import { container } from 'tsyringe'
import { WorkoutDraftListVmI } from '@/view-model/workout-draft-list-vm.interface'
import { toDetailViewCallbackI } from '@/router/types'
import { EntityId } from '@/domain/type'
import { WorkoutDraftEditorServiceFactoryI } from '@/domain/service-interfaces/workout-draft-editor-service.interface'
import { WorkoutDraftEditorVmFactoryI } from '@/view-model/workout-draft-editor-vm.interface'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: 'dashboard'
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      props: () => {
        const workoutDraftListVm: WorkoutDraftListVmI = container.resolve(
          'WorkoutDraftListVm'
        )
        const goToWorkoutDraftEditor: toDetailViewCallbackI = (id: EntityId) =>
          router.push({ name: 'draftEdit', params: { id: id.toString() } })
        return {
          workoutDraftListVm,
          goToWorkoutDraftEditor
        }
      },
      component: (): any =>
        import(
          /* webpackChunkName: "dashboard" */ '@/ui/pages/TheDashboard.vue'
        )
    },
    {
      path: '/draft/:id/',
      name: 'draftEdit',
      props: (to) => {
        const vmFactory: WorkoutDraftEditorVmFactoryI = container.resolve(
          'WorkoutDraftEditorVmFactory'
        )
        const vm = vmFactory.create(to.params.id)
        console.log(vm)
        console.log(vm._graphSource)
        setTimeout(() => {
          console.log(vm._graphSource)
        }, 200)
        return {}
      },
      component: (): any =>
        import(
          /* webpackChunkName: "target-workout" */ '@/ui/pages/TheTargetWorkoutEditor.vue'
        )
    },
    {
      path: '*',
      name: '404',
      redirect: '/'
    }
  ]
})
