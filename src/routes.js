import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '@/pages/Home'
import AboutPage from '@/pages/About'
import ItemPage from '@/pages/Item'
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
      path: '/:itemAlias',
      name: 'itemAlias',
      component: ItemPage
    },
    {
      path: '/404',
      name: '404',
      component: NotFoundPage
    },
    {
      path: '/:CatchAll(.*)',
      name: 'NotFound',
      component: NotFoundPage
    }
  ],
});

export default routes;
