<template>
  <v-container>
    <div class="d-flex align-center pt-3 pb-6">
      <slot name="goBackArea">
        <v-btn v-if="goBack" class="mr-4" @click="goBack" icon x-large>
          <v-icon>arrow_back</v-icon>
        </v-btn>
      </slot>
      <slot name="title">
        <h1 class="display-1 pa-0">{{ title }}</h1>
      </slot>
    </div>
    <slot></slot>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { GoToViewRouteCallbackI } from '@/router/types'

@Component
export default class ThePageContainer extends Vue {
  @Prop({ required: false })
  readonly title: string | undefined
  @Prop({ type: Function, required: false })
  readonly goBack?: GoToViewRouteCallbackI
}
</script>
