import Vue            from 'vue';
import Vuex           from 'vuex';
import TodoAppStore   from './views/todo-app/store/todo-app.store';
import DoneTasksStore from '@/views/done-tasks/store/done-tasks.store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todoStore: TodoAppStore,
  },
  state: {},
  mutations: {},
  actions: {},
});
