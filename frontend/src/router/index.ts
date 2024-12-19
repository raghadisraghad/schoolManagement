import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthenticationView from '../views/AuthenticationView.vue'
import DashboardView from '../views/DashboardView.vue'
import MyPageView from '../views/MyPageView.vue'
import ProfileView from '../views/ProfileView.vue'
import RequestView from '../views/RequestView.vue'
import OfficeView from '../views/OfficeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/office',
      name: 'office',
      component: OfficeView,
    },
    {
      path: '/myPage',
      name: 'myPage',
      component: MyPageView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
    },
    {
      path: '/request',
      name: 'request',
      component: RequestView,
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthenticationView,
    },
  ],
})

export default router
