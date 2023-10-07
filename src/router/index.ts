import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { defineAsyncComponent } from 'vue';
import { useCartStore } from '../store';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: defineAsyncComponent(() => import('../components/Home.vue')),
  },
  {
    path: '/checkout',
    component: defineAsyncComponent(() => import('../components/Checkout.vue')),
  },
  {
    path: '/test',
    component: defineAsyncComponent(() => import('../components/Test.vue')),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to) => {
  const { hasItems } = useCartStore();
  if (to.path === '/checkout' && !hasItems) {
    return '/';
  }
  // explicitly return false to cancel the navigation
  return true;
});

export default router;
