<template>
  <v-card>
    <v-card-title>
      {{ $t('draftList.title') }}
    </v-card-title>
    <v-card-text>
      <v-slide-y-transition group tag="v-list">
        <v-list-item
          v-for="item of workoutDraftListVm.workoutDraftList"
          :key="item.id"
          @click="toDetailViewHandler(item.id)"
          two-line
        >
          <v-list-item-content>
            <v-list-item-title :class="{ 'grey--text': !item.name }">
              {{ item.name || $t('workout.undefinedNamePlaceholder') }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ item.type_name }}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action class="d-flex">
            <v-btn
              :title="$t('draftList.actions.deleteWorkoutDraft.callBtn')"
              @click="(event) => deleteWorkoutDraftHandler(item.id, event)"
              icon
            >
              <v-icon color="error lighten-2">delete_outline</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-slide-y-transition>
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="primary"
        :loading="addInProgress"
        @click="addWorkoutDraftHandler"
        small
      >
        {{ $t('draftList.actions.addWorkoutDraft.callBtn') }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Observer } from 'mobx-vue'
import { WorkoutDraftListVmI } from '@/view-model/workout-draft-list-vm.interface'
import { EntityId } from '@/domain/type'
import { toDetailViewCallbackI } from '@/router/types'

@Observer
@Component
export default class WorkoutDraftListWidget extends Vue {
  private addInProgress: boolean = false

  @Prop({ required: true })
  readonly workoutDraftListVm!: WorkoutDraftListVmI
  @Prop({ required: true })
  readonly toEditorCallback!: toDetailViewCallbackI

  toDetailViewHandler(id: EntityId) {
    this.toEditorCallback(id)
  }

  addWorkoutDraftHandler() {
    this.addInProgress = true
    this.workoutDraftListVm
      .createDraft()
      .then((id) => this.toDetailViewHandler(id))
      .catch((error) => {
        window.alert(this.$t('draftList.actions.addWorkoutDraft.errorMessage'))
      })
      .finally(() => {
        this.addInProgress = false
      })
  }

  deleteWorkoutDraftHandler(id: EntityId, event: UIEvent) {
    event.stopPropagation()
    this.workoutDraftListVm.deleteDraft(id).catch((error) => {
      window.alert(this.$t('draftList.actions.addWorkoutDraft.errorMessage'))
    })
  }
}
</script>
