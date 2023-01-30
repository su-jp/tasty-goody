import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '@/views/Dashboard';
import GoodyBoard from '@/views/GoodyBoard';
import Contacts from '@/views/Contacts';

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
    path: '/contacts',
    name: 'Contacts',
    component: Contacts,
  },
]

const router = new VueRouter({
  // mode: 'history',
  routes
});

export default router;
