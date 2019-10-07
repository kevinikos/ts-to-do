<template>
  <div class="add-task">
    <input class="add-task__input"
           type="text"
           v-model="taskContent">

    <button class="add-task__button"
            @click="addTask">
      add new task
    </button>
  </div>
</template>

<script lang="ts">
import Vue           from 'vue';
import Component     from 'vue-class-component';
import { namespace } from 'vuex-class';
import { ITask }     from '@/views/todo-app/todo-app.interface';

const local = namespace('todoAppStore');

@Component
export default class AddTask extends Vue {
  taskContent: string = '';

  // @Mutation('createTask', { namespace: 'todoStore' }) createTask!: (task: ITask) => void;

  @local.Mutation('createTask') createTask!: (task: ITask) => void;

  addTask() {
    this.createTask({ content: this.taskContent, isDone: false });
    this.taskContent = '';
  }
}
</script>

<style lang="scss" scoped>
.add-task {
  margin: 2rem 0;
}
</style>
