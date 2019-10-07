import { Module, VuexModule, Mutation } from 'vuex-module-decorators';
import { ITask }                        from '@/views/todo-app/todo-app.interface';

@Module({ namespaced: true })
export default class DoneTasksStore extends VuexModule {
  randomData: string[] = [
    'a',
    'b',
    'c',
  ];

  doneTasks: Array<ITask> = [];
}
