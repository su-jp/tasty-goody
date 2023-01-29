import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '@/views/Dashboard';
import GoodyBoard from '@/views/GoodyBoard';
import GuestBook from '@/views/GuestBook';
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
    path: '/guestBook',
    name: 'GuestBook',
    component: GuestBook,
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
