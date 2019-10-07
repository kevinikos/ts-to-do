<template>
  <div class="todo-app">
    <span class="todo-app__title">
      Your Daily Routine
    </span>

    <add-task />
    <task-list />
    <task-counter />

    <router-link to="/done-tasks"
                 class="todo-app__done-tasks">
      Check complete tasks list
    </router-link>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AddTask            from '@/views/todo-app/components/add-task.component.vue';
import TaskList           from '@/views/todo-app/components/task-list.component.vue';
import TaskCounter        from '@/views/todo-app/components/task-counter.component.vue';

@Component({
  components: {
    AddTask,
    TaskList,
    TaskCounter,
  },
})

export default class TodoApp extends Vue {
}
</script>

<style lang="scss" scoped>
.todo-app {
  margin: 0 auto;
  width: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  &__title {
    font-size: 3rem;
    width: 100%;
    height: 6rem;
    background-color: #3D9970;
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__done-tasks {
    font-size: 1.2rem;
    width: 100%;
    background-color: #3D9970;
    color: #FFF;
    text-decoration: none;
    padding-bottom: 1rem;
  }
}
</style>
