import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/auctions',
      name: 'auctions',
      component: () => import('../views/AuctionsView.vue')
    },
    {
      path: '/auctions/:id',
      name: 'id',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/UserView.vue'),
      beforeEnter: (to, from, next) => {
        const isAuthenticated = store.state.user.data.accessToken;

        if (isAuthenticated)
          next();
        else
          next('/login');
        
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      beforeEnter: (to, from, next) => {
        const isLoggedIn = store.state.user.data.loggedIn;

        if (!isLoggedIn)
          next();
        else 
          next('/');
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUpView.vue'),
      beforeEnter: (to, from, next) => {
        const isLoggedIn = store.state.user.data.loggedIn;

        if (!isLoggedIn)
          next();
        else 
          next('/');
      }
    },
  ]
})

export default router
