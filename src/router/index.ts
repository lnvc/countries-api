import { createRouter, createWebHistory } from 'vue-router';

const HomePage = () => import('@/pages/HomePage.vue');
const DetailPage = () => import('@/pages/DetailPage.vue');

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/search/:term',
    name: 'search',
    component: HomePage,
  },
  {
    path: '/region/:region',
    name: 'region',
    component: HomePage,
  },
  {
    path: '/country/:id',
    name: 'detail',
    component: DetailPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
