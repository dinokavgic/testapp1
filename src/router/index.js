import { createRouter, createWebHistory } from 'vue-router';
import Registracija from '../views/Registracija.vue';
import Login from '../views/Login.vue';
import Home from '../views/HomeView.vue';

const routes = [
  {
    path: '/registracija',
    name: 'Registracija',
    component: Registracija,
  },
  // druge rute
  {
    path: '/Login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/HomeView',
    name: 'HomeView',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;