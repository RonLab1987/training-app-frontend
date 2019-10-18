<template>
  <ThePageContainer :title="$t('dashboardPage.title')">
    <v-row>
      <v-col :md="6" :lg="4">
        <WorkoutDraftListWidget
          v-bind="{ workoutDraftListVm, toEditorCallback }"
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
import { toDetailViewCallbackI } from '@/router/types'

import WorkoutDraftListWidget from '@/ui/components/_workout-draft-list/WorkoutDraftListWidget.vue'
import ThePageContainer from '@/ui/components/_page/ThePageContainer.vue'

@Observer
@Component({
  components: {
    WorkoutDraftListWidget,
    ThePageContainer
  }
})
export default class TheDraftList extends Vue {
  @Prop({ required: true }) readonly workoutDraftListVm!: WorkoutDraftListVmI
  @Prop({ required: true })
  readonly toEditorCallback!: toDetailViewCallbackI

  toDetailViewHandler(id: EntityId) {
    this.toEditorCallback(id)
  }
}
</script>
