<template>
  <div class="done-tasks">
    <ul class="done-tasks__list">
      <li class="done-tasks__list-item"
          v-for="(task, index) in this.doneTasks"
          :key="index">

        <div>
          <span>{{ task.content }}</span>
          <a href="#">Show more</a>
        </div>
        <div>
          <span>{{ task.description }}</span>
        </div>
      </li>
    </ul>

    <router-link to="/"
                 class="done-tasks__home-link">
      Back to home page
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace }      from 'vuex-class';
import { ITask }          from '@/views/todo-app/todo-app.interface';
import store              from '@/store';
import DoneTasksStore     from '@/views/done-tasks/store/done-tasks.store';

const LOCAL_STORE = 'doneTasksStore';
const local = namespace(LOCAL_STORE);

@Component({
  components: {},
})
export default class DoneTasks extends Vue {
  beforeRouteEnter(to: any, from: any, next: any) {
    store.registerModule(LOCAL_STORE, DoneTasksStore);
    next();
  }

  created() {
    this.filterTask();
  }

  @local.State('doneTasks') doneTasks!: Array<ITask>;
  @local.Mutation('filterTask') filterTask!: () => void;

  beforeDestroy() {
    store.unregisterModule(LOCAL_STORE);
  }
}

</script>

<style lang="scss" scoped>
.done-tasks {
  height: 40rem;
  width: 35rem;
  margin: 0 auto;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__list {
    list-style: none;
  }

  &__list-item {
    height: 5rem;
    width: 100%;
    background-color: #3D9970;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
    font-size: 1.2rem;
    margin: 0.2rem 0;
  }
}
</style>
