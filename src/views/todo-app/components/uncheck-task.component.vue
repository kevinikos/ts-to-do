<template>
  <button class="uncheck-task"
          @click="toggleTaskStatus">
    Done
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { ITask }                from '@/views/todo-app/todo-app.interface';

const UncheckTaskProps = Vue.extend({
  props: {
    task: Object,
  },
});

@Component
export default class UncheckTask extends UncheckTaskProps {
  @Prop() task!: ITask;

  toggleTaskStatus() {
    this.task.isDone = !this.task.isDone;
  }
}
</script>

<style lang="scss" scoped>
.uncheck-task {
  @include list-item-btn(#3D9970);
}
</style>
