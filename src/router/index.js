import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '@/views/Dashboard';
import GoodyBoard from '@/views/GoodyBoard';
import Contact from '@/views/Contact';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/goodyBoard',
    name: 'GoodyBoard',
    component: GoodyBoard,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
]

const router = new VueRouter({
  // mode: 'history',
  routes
});

export default router;
