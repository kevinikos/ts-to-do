<template>
  <div class="todo-app">
    <span class="todo-app__title">
      Your Daily Routine
    </span>

    <add-task />
    <task-list />
    <task-counter />

    <router-link :to="{name: 'done-tasks'}"
                 class="todo-app__done-tasks">
      Check complete tasks list
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace }      from 'vuex-class';
import store              from '@/store';
import TodoAppStore       from '@/views/todo-app/store/todo-app.store';
import AddTask            from '@/views/todo-app/components/add-task.component.vue';
import TaskList           from '@/views/todo-app/components/task-list.component.vue';
import TaskCounter        from '@/views/todo-app/components/task-counter.component.vue';

const LOCAL_STORE = 'todoAppStore';
const local = namespace(LOCAL_STORE);

@Component({
  components: {
    AddTask,
    TaskList,
    TaskCounter,
  },
})
export default class TodoApp extends Vue {
  beforeRouteEnter(to: any, from: any, next: any) {
    store.registerModule(LOCAL_STORE, TodoAppStore);
    next();
  }

  beforeDestroy() {
    store.unregisterModule(LOCAL_STORE);
  }
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
