<template>
  <v-container>
    <h1 class="display-1">{{ $t('draftList.title') }}</h1>

    <v-row>
      <v-col>
        <v-list>
          <v-list-item
            v-for="item of workoutDraftListVm.workoutDraftList"
            :key="item.id"
            @click="toDetailViewHandler(item.id)"
            two-line
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.name || 'noname' }}</v-list-item-title>
              <v-list-item-subtitle>{{ item.type_name }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Observer } from 'mobx-vue'
import { WorkoutDraftListVmI } from '@/view-model/workout-draft-list-vm.interface'
import { EntityId } from '@/domain/type'
import { toDetailViewCallbackI } from '@/router/types'

@Observer
@Component
export default class TheDraftList extends Vue {
  @Prop({ required: true }) readonly workoutDraftListVm!: WorkoutDraftListVmI
  @Prop({ required: true })
  readonly toEditorCallback!: toDetailViewCallbackI

  toDetailViewHandler(id: EntityId) {
    this.toEditorCallback(id)
  }
}
</script>
