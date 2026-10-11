import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '../views/AppLayout.vue'
import HomeView from '../views/HomeView.vue'
import AlbumView from '../views/AlbumView.vue'
import SettingView from '../views/SettingView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/',
      name: 'appLayout',
      component: AppLayout,
      
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/albums',
          name: 'albums',
          component: AlbumView
        },
        {
          path: '/settings',
          name: 'setting',
          component: SettingView
        }
      ]
    }
  ],
})

export default router
