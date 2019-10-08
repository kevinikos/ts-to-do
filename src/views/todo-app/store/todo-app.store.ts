import { Module, VuexModule, Mutation } from 'vuex-module-decorators';
import store                            from '@/store';
import { ITask }                        from '@/views/todo-app/todo-app.interface';

@Module({ namespaced: true })
export default class TodoAppStore extends VuexModule {
  isDescriptionVisible: boolean = false;

  @Mutation
  createTask(task: ITask): void {
    store.state.tasks.push(task);
  }

  @Mutation
  removeTask(taskIndex: number): void {
    store.state.tasks = store.state.tasks.filter((task, index) => index !== taskIndex);
  }

  @Mutation
  toggleDescription() {
    this.isDescriptionVisible = !this.isDescriptionVisible;
  }
}
