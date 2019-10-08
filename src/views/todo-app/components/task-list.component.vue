<template>
  <ul class="task-list"
      v-if="this.tasks.length !== 0">

    <li class="task-list__item"
        :class="{'task-list__item--is-done': task.isDone}"
        v-for="(task, index) in this.tasks"
        :key="index">

      {{ task.content }}
      <div class="task-list__item__button-wrapper">
        <remove-task :index="index" />
        <uncheck-task :task="task" />
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State }          from 'vuex-class';
import { ITask }          from '@/views/todo-app/todo-app.interface';
import RemoveTask         from '@/views/todo-app/components/remove-task.component.vue';
import UncheckTask        from '@/views/todo-app/components/uncheck-task.component.vue';

@Component({
  components: {
    RemoveTask,
    UncheckTask,
  },
})
export default class TodoApp extends Vue {
  @State('tasks') tasks!: Array<ITask>;
}
</script>

<style lang="scss" scoped>
.task-list {
  list-style: none;
  width: 45rem;
  margin-bottom: 1rem;

  &__item {
    font-size: 1.6rem;
    height: 5rem;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &--is-done {
      text-decoration: line-through;
    }

    &__button-wrapper {
      position: absolute;
      right: 0;
    }
  }
}
</style>
