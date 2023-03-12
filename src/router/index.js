import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'todolist',
    component: () => import('../views/ToDoListView.vue'),
  },
  {
    path: '/add',
    name: 'addTodo',
    component: () => import('../views/ToDoWriteView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
