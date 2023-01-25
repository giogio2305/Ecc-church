import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/cantiques',
      name: 'cantiques',
      component: () => import('../views/Cantiques.vue'),
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
    {
      path: '/evenement',
      name: 'evenement',
      component: () => import('../views/Event.vue'),
    },
    {
      path: '/ecc',
      name: 'About us',
      component: () => import('../views/AboutUs.vue'),
    },
    {
      path: '/ministere',
      name: 'ministere',
      component: () => import('../views/Ministries.vue'),
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/Contact.vue'),
    },
    {
      path: '/article',
      name: 'article',
      component: () => import('../views/Article.vue'),
    },
    {
      path: '/bibliotheque',
      name: 'bibliotheque',
      component: () => import('../views/Library.vue'),
    },
    {
      path: '/multimedia',
      name: 'multimedia',
      component: () => import('../views/Media.vue'),
    },
    {
      path: '/paroisses',
      name: 'paroisses',
      component: () => import('../views/Map.vue'),
    },
    {
      path: '/calendrier',
      name: 'calendrier',
      component: () => import('../views/Calendar.vue'),
    },
  ]
})

export default router
