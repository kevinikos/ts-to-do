import { Module, VuexModule, Mutation } from 'vuex-module-decorators';
import { ITask }                        from '@/views/todo-app/todo-app.interface';

@Module({ namespaced: true })
export default class TodoAppStore extends VuexModule {
  tasks: Array<ITask> = [];

  isDescriptionVisible: boolean = false;

  @Mutation
  createTask(task: ITask): void {
    this.tasks.push(task);
  }

  @Mutation
  removeTask(taskIndex: number): void {
    this.tasks = this.tasks.filter((task, index) => index !== taskIndex);
  }

  @Mutation
  toggleDescription() {
    this.isDescriptionVisible = !this.isDescriptionVisible;
  }
}
