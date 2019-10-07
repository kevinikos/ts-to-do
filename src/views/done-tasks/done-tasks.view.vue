<template>
  <div class="done-tasks">
    <ul>
      <li v-for="(item, index) in this.randomData"
          :key="index">

        {{ item }}
      </li>
      <li v-for="(task, index) in this.doneTasks"
          :key="index">

        {{ task }}
      </li>
    </ul>

    <router-link to="/">
      Back to home page
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace }      from 'vuex-class';
import store              from '@/store';
import DoneTasksStore     from '@/views/done-tasks/store/done-tasks.store';
import { ITask }          from '@/views/todo-app/todo-app.interface';

const local = namespace('doneTasksStore');

@Component({
  beforeRouteEnter(to, from, next) {
    store.registerModule('doneTasksStore', DoneTasksStore);
    console.log('register done tasks');
    next();
  },
  beforeRouteLeave(to, from, next) {
    store.unregisterModule('doneTasksStore');
    console.log('unregister done tasks');
    next();
  },
})

export default class DoneTasks extends Vue {
  @local.State('randomData') randomData!: Array<string>;

  @local.State('doneTasks') doneTasks!: Array<ITask>;
}

</script>

<style lang="scss" scoped>

</style>
