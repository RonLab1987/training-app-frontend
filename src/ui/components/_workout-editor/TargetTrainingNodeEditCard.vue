<template>
  <v-card class="mb-5" :class="`ml-${5 * vm.level}`">
    <v-card-subtitle>
      {{ vm.type_name }} – isActive: {{ vm.isActive }}
    </v-card-subtitle>

    <v-card-text>
      <v-text-field v-model="vm.name" label="Имя" :disabled="!vm.isActive" />
    </v-card-text>

    <v-card-actions>
      <v-btn @click="() => (vm.isActive ? vm.suspend() : vm.resume())" small>
        {{ vm.isActive ? 'suspend' : 'resume' }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Observer } from 'mobx-vue'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { TargetTrainingNodeVmI } from '@/view-model/target-training-node-vm.interface'

@Observer
@Component
export default class TargetTrainingNodeEditCard extends Vue {
  @Prop({ required: true })
  readonly vm!: TargetTrainingNodeVmI
}
</script>
