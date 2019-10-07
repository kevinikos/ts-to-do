<template>
  <button class="uncheck-task"
          @click="toggleTaskStatus">
    Done
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { namespace }            from 'vuex-class';
import { ITask }                from '@/views/todo-app/todo-app.interface';

const UncheckTaskProps = Vue.extend({
  props: {
    task: Object,
  },
});

const module = namespace('todoApp');

@Component
export default class UncheckTask extends UncheckTaskProps {
  @Prop() task!: ITask;

  toggleTaskStatus() {
    this.task.isDone = !this.task.isDone;
  }
}
</script>

<style lang="scss" scoped>

</style>
