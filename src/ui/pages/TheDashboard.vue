<template>
  <ThePageContainer :title="$t('dashboardPage.title')">
    <v-row>
      <v-col :md="6" :lg="4">
        <WorkoutDraftListWidget
          v-bind="{ workoutDraftListVm, goToWorkoutDraftEditor }"
        />
      </v-col>
    </v-row>
  </ThePageContainer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Observer } from 'mobx-vue'
import { WorkoutDraftListVmI } from '@/view-model/workout-draft-list-vm.interface'
import { EntityId } from '@/domain/type'
import { GoToDetailViewRouteCallbackI } from '@/router/types'

import WorkoutDraftListWidget from '@/ui/components/_workout-draft-list/WorkoutDraftListWidget.vue'
import ThePageContainer from '@/ui/components/_page/ThePageContainer.vue'
import { Route } from 'vue-router'

@Observer
@Component({
  components: {
    WorkoutDraftListWidget,
    ThePageContainer
  },
  beforeRouteEnter(
    to: Route,
    from: Route,
    next: (callback: (vm: TheDashboard) => void) => void
  ) {
    next((vm) => {
      vm.workoutDraftListVm.resume()
    })
  },
  beforeRouteLeave(to: Route, from: Route, next: () => void) {
    this.workoutDraftListVm.suspend()
    next()
  }
})
export default class TheDashboard extends Vue {
  @Prop({ required: true }) readonly workoutDraftListVm!: WorkoutDraftListVmI
  @Prop({ required: true })
  readonly goToWorkoutDraftEditor!: GoToDetailViewRouteCallbackI

  toDetailViewHandler(id: EntityId) {
    this.goToWorkoutDraftEditor(id)
  }
}
</script>
