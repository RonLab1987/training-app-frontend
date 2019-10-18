<template>
  <ThePageContainer :title="$t('draftEditor.title')">
    hop hey )
  </ThePageContainer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Observer } from 'mobx-vue'
// import { WorkoutDraftListVmI } from '@/view-model/workout-draft-list-vm.interface'
// import { EntityId } from '@/domain/type'
// import { toDetailViewCallbackI } from '@/router/types'
import ThePageContainer from '@/ui/components/_page/ThePageContainer.vue'

@Observer
@Component({
  components: {
    ThePageContainer
  }
})
export default class TheDraftList extends Vue {
  // @Prop({ required: true }) readonly workoutDraftListVm!: WorkoutDraftListVmI
  // @Prop({ required: true })
  // readonly goToWorkoutDraftEditor!: toDetailViewCallbackI
  //
  // toDetailViewHandler(id: EntityId) {
  //   this.goToWorkoutDraftEditor(id)
  // }
}
</script>
