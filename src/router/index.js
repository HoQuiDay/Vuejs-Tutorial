import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Error from '../views/Error404.vue';
import Game from '../views/Game.vue';
import Form from '../views/Form.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    },
    {
      path: '/form',
      name: 'form',
      component: Form
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: Error
    }
  ],
  linkActiveClass: 'active'
});

export default router;
