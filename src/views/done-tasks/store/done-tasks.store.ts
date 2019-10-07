import { Module, VuexModule, Mutation } from 'vuex-module-decorators';

@Module({ namespaced: true })
export default class DoneTasksStore extends VuexModule {
  randomData: string[] = [
    'a',
    'b',
    'c',
  ];
}
