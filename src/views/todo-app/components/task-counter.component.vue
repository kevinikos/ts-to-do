<template>
  <div class="task-counter">
    {{ this.tasks.length }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace }      from 'vuex-class';
import { ITask }          from '@/views/todo-app/todo-app.interface';

const local = namespace('todoStore');

@Component
export default class TaskCounter extends Vue {
  @local.State('tasks') tasks!: Array<ITask>;
}
</script>

<style lang="scss" scoped>
.task-counter {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFF;
  background-color: #3D9970;
  font-size: 1.6rem;
}
</style>
