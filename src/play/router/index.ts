import type { Component } from 'vue';
import type { RouteRecordRaw } from 'vue-router';

import { createWebHistory, createRouter } from 'vue-router';
import Views from '@/play/views';
import HomePage from '@/play/views/_HomePage.vue';

const createRoutesByViews = (views: { [key: string]: Component }): RouteRecordRaw[] => {
  const arr: RouteRecordRaw[] = [];

  Object.entries(views).forEach(([viewName, view]) => {
    arr.push({
      name: viewName,
      path: `/${viewName}`,
      component: view
    })
  });

  return arr;
}

const routes = [
  { name: 'HomePage', path: '/', component: HomePage as Component },
  ...createRoutesByViews(Views)
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
