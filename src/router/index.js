import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      component: () => import('../views/front/FrontLayout.vue'),
      children: [
        {
          path: 'home',
          component: () => import('../views/front/UserHome.vue'),
        },
        {
          path: 'about',
          component: () => import('../views/front/UserAbout.vue'),
        },
        {
          path: 'products',
          component: () => import('../views/front/UserProducts.vue'),
        },
        {
          path: 'product/:id',
          component: () => import('../views/front/UserArticleDetail.vue')
        },
        {
          path: 'news',
          component: () => import('../views/front/UserNews.vue')
        },
        {
          path: 'new/:id',
          component: () => import('../views/front/UserNewDetail.vue')
        },
        {
          path: 'cart',
          component: () => import('../views/front/UserCart.vue')
        },
        {
          path: 'payment',
          component: () => import('../views/front/UserPayment.vue')
        },
        {
          path: 'complete',
          component: () => import('../views/front/UserComplete.vue')
        },
        {
          path: ':pathMatch(.*)*',
          component: () => import('../views/NotFound.vue'),
        },
        {
          path: 'login',
          component: () => import('../views/LoginView.vue'),
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/DashboardView.vue'),
      children: [
        {
          path: 'products',
          component: () => import('../views/admin/AdminProducts.vue')
        },
        {
          path: 'orders',
          component: () => import('../views/admin/AdminOrders.vue')
        },
        {
          path: 'coupons',
          component: () => import('../views/admin/AdminCoupons.vue')
        },
        {
          path: 'news',
          component: () => import('../views/admin/AminNews.vue')
        },
        {
          path: ':pathMatch(.*)*',
          component: () => import('../views/NotFound.vue'),
        }
      ]
    },

  ]
})

export default router

