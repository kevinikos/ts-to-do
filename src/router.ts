import Vue       from 'vue';
import Router    from 'vue-router';
import TodoApp   from './views/todo-app/todo-app.view.vue';
import DoneTasks from './views/done-tasks/done-tasks.view.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'todo-app',
      component: TodoApp,
    },
    {
      path: '/done-tasks',
      name: 'done-tasks',
      component: DoneTasks,
    },
  ],
});

export default router;
