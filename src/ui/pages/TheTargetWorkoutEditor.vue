<template>
  <ThePageContainer :title="$t('targetWorkoutEditor.title')" :go-back="goBack">
    <v-row>
      <v-col :md="8" :lg="6">
        <v-slide-y-transition group>
          <TargetTrainingNodeEditCard
            v-for="vm of workoutDraftEditorVm.nodes"
            :key="vm.id"
            v-bind="{ vm }"
          />
        </v-slide-y-transition>
      </v-col>
    </v-row>
  </ThePageContainer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Observer } from 'mobx-vue'
import ThePageContainer from '@/ui/components/_page/ThePageContainer.vue'
import TargetTrainingNodeEditCard from '@/ui/components/_workout-editor/TargetTrainingNodeEditCard.vue'
import { WorkoutDraftEditorVmI } from '@/view-model/workout-draft-editor-vm.interface'
import { GoToViewRouteCallbackI } from '@/router/types'
import { Route } from 'vue-router'

@Observer
@Component({
  components: {
    ThePageContainer,
    TargetTrainingNodeEditCard
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
