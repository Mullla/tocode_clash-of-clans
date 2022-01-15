import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '@/pages/Home'
import AboutPage from '@/pages/About'
import NotFoundPage from '@/pages/NotFound'

const routerHistory = createWebHashHistory()

const routes = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/:CatchAll(.*)',
      name: '404',
      component: NotFoundPage
    }
  ],
});

export default routes;
