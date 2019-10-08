<template>
  <div class="add-task">
    <div class="add-task__wrapper">
      <input class="add-task__input"
             type="text"
             v-model="taskContent"
             placeholder="Task name">

      <button class="add-task__button"
              @click="addTask">
        Add new task
      </button>
      <button class="add-task__show-description"
              @click="toggleDescription">
        Description
      </button>
    </div>

    <input class="add-task__input-description"
           placeholder="Specific description"
           v-model="taskDescription"
           v-if="isDescriptionVisible">
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

  taskDescription: string = '';

  // @Mutation('createTask', { namespace: 'todoStore' }) createTask!: (task: ITask) => void;

  @local.State('isDescriptionVisible') isDescriptionVisible!: any;

  @local.Mutation('createTask') createTask!: (task: ITask) => void;

  @local.Mutation('toggleDescription') toggleDescription!: () => void;

  addTask() {
    this.createTask({
      content: this.taskContent,
      description: this.taskDescription,
      isDone: false,
    });
    this.taskContent = '';
    this.taskDescription = '';
    if (this.isDescriptionVisible) {
      this.toggleDescription();
    }
  }
}
</script>

<style lang="scss" scoped>
.add-task {
  margin: 2rem 0;

  &__wrapper {
    border: 1px solid #505050;
  }

  &__input,
  &__button,
  &__show-description,
  &__input-description {
    padding: 0.8rem;
    border: none;

    &:focus {
      outline: none;
    }
  }

  &__button {
    background-color: #FFF;
    transition: .4s;
    cursor: pointer;

    &:hover {
      background-color: #0074D9;
      color: #FFF;
    }
  }

  &__show-description {
    background-color: #FFF;
    transition: .4s;
    cursor: pointer;

    &:hover {
      background-color: #0074D9;
      color: #FFF;
    }
  }

  &__input-description {
    margin-top: 1rem;
    border: 1px solid #505050;
    width: 100%;
  }
}
</style>
