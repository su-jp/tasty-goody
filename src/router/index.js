import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '@/views/Dashboard';
import GoodyBoard from '@/views/GoodyBoard';
import GuestBook from '@/views/GuestBook';
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
    path: '/guestBook',
    name: 'GuestBook',
    component: GuestBook,
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
