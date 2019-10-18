<template>
  <v-container>
    <div class="pt-3 pb-6">
      <slot name="title">
        <h1 class="display-1 pa-0">{{ title }}</h1>
      </slot>
    </div>
    <slot></slot>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ThePageContainer extends Vue {
  @Prop({ required: false })
  readonly title: string | undefined
}
</script>
