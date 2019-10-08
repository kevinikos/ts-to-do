import { Module, VuexModule, Mutation } from 'vuex-module-decorators';
import { ITask }                        from '@/views/todo-app/todo-app.interface';
import store                            from '@/store';

@Module({ namespaced: true, stateFactory: true })
export default class DoneTasksStore extends VuexModule {
  doneTasks: Array<ITask> = [];

  @Mutation
  filterTask(): void {
    this.doneTasks = store.state.tasks.filter(task => task.isDone);
  }
}
