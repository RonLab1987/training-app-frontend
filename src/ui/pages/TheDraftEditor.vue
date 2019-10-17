<template>
  <v-container>
    <h1 class="display-1">{{ $t('draftEditor.title') }}</h1>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Observer } from 'mobx-vue'
// import { WorkoutDraftListVmI } from '@/view-model/workout-draft-list-vm.interface'
// import { EntityId } from '@/domain/type'
// import { toDetailViewCallbackI } from '@/router/types'

@Observer
@Component
export default class TheDraftList extends Vue {
  // @Prop({ required: true }) readonly workoutDraftListVm!: WorkoutDraftListVmI
  // @Prop({ required: true })
  // readonly toEditorCallback!: toDetailViewCallbackI
  //
  // toDetailViewHandler(id: EntityId) {
  //   this.toEditorCallback(id)
  // }
}
</script>
