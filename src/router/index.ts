import Vue from 'vue'
import Router from 'vue-router'
import { container } from 'tsyringe'
import { WorkoutDraftListVmI } from '@/view-model/workout-draft-list-vm.interface'
import { toDetailViewCallbackI } from '@/router/types'
import { EntityId } from '@/domain/type'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: 'draft'
    },
    {
      path: '/draft',
      name: 'draftList',
      props: () => {
        const workoutDraftListVm: WorkoutDraftListVmI = container.resolve(
          'WorkoutDraftListVm'
        )
        const toEditorCallback: toDetailViewCallbackI = (id: EntityId) => {
          router.push({ name: 'draftEdit', params: { id: id.toString() } })
        }
        return {
          workoutDraftListVm,
          toEditorCallback
        }
      },
      component: (): any =>
        import(/* webpackChunkName: "draft" */ '@/ui/pages/TheDraftList.vue')
    },
    {
      path: '/draft/:id/',
      name: 'draftEdit',
      props: () => {},
      component: (): any =>
        import(/* webpackChunkName: "draft" */ '@/ui/pages/TheDraftEditor.vue')
    }
  ]
})
