<template>
  <ThePageContainer :title="$t('draftEditor.title')" :go-back="goBack">
    {{ workoutDraftEditorVm.nodes.map((node) => node.name) }}
  </ThePageContainer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Observer } from 'mobx-vue'
import ThePageContainer from '@/ui/components/_page/ThePageContainer.vue'
import { WorkoutDraftEditorVmI } from '@/view-model/workout-draft-editor-vm.interface'
import { GoToViewRouteCallbackI } from '@/router/types'
import { Route } from 'vue-router'

@Observer
@Component({
  components: {
    ThePageContainer
  },
  beforeRouteEnter(
    to: Route,
    from: Route,
    next: (callback: (vm: TheTargetWorkoutEditor) => void) => void
  ) {
    next((vm) => {
      vm.workoutDraftEditorVm.resume()
    })
  },
  beforeRouteLeave(to: Route, from: Route, next: () => void) {
    this.workoutDraftEditorVm.suspend()
    next()
  }
})
export default class TheTargetWorkoutEditor extends Vue {
  @Prop({ required: true })
  readonly workoutDraftEditorVm!: WorkoutDraftEditorVmI
  @Prop({ type: Function, required: true })
  readonly goBack!: GoToViewRouteCallbackI
}
</script>
