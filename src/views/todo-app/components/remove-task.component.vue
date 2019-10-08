<template>
  <button class="remove-task"
          @click="removeSingleTask">
    Remove
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { namespace }            from 'vuex-class';

const local = namespace('todoAppStore');

@Component
export default class RemoveTask extends Vue {
  @Prop() index!: number;

  // @Mutation('removeTask', { namespace: 'todoStore' }) removeTask!: (index: any) => void;

  @local.Mutation('removeTask') removeTask!: (index: number) => void;

  removeSingleTask() {
    this.removeTask(this.index);
  }
}
</script>

<style lang="scss" scoped>
.remove-task {
  @include list-item-btn(#FF4136);
}
</style>
