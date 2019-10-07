<template>
  <div class="done-tasks">
    <ul>
      <li v-for="(item, index) in this.randomData"
          :key="index">

        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace }      from 'vuex-class';
import store              from '@/store';
import doneTasksStore     from '@/views/done-tasks/store/done-tasks.store';

const local = namespace('doneTasksStore');

@Component
export default class DoneTasks extends Vue {
  beforeRouteEnter(to: any, from: any, next: any) {
    store.registerModule('doneTasksStore', doneTasksStore);
    next();
  }

  @local.State('randomData') randomData!: Array<string>;
}
</script>

<style lang="scss" scoped>

</style>
