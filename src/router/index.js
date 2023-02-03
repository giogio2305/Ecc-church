import { createRouter, createWebHistory } from 'vue-router'
const Footer = () => import ('../components/Footer.vue');
const Header = () => import ('../components/SiteNavigation.vue');
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: () => import('../views/Home.vue'),
        header: Header,
        footer: Footer,
      },
    },
    {
      path: '/cantiques',
      name: 'cantique',
      components: {
        default: () => import('../views/Cantiques.vue'),
        header: Header,
        footer: Footer,
      },
    },
    {
      path: '/evenement',
      name: 'evenement',
      components: {
        default: () => import('../views/Event.vue'),
        header: Header,
        footer: Footer,
      }
    },
    {
      path: '/ecc',
      name: 'about-us',
      components: {
        default: () => import('../views/AboutUs.vue'),
        header: Header,
        footer: Footer,
      }
    },
    {
      path: '/ministry',
      name: 'ministry',
      components: {
        default:() => import('../views/Ministries.vue'),
        header: Header,
        footer: Footer,
      }
    },
    {
      path: '/contact',
      name: 'contact',
      components: {
        default: () => import('../views/Contact.vue'),
        header: Header,
        footer: Footer,
      }
    },
    {
      path: '/article',
      name: 'article',
      components: {
        default:() => import('../views/Article.vue'),
        header: Header,
        footer: Footer,
      }
    },
    {
      path: '/library',
      name: 'library',
      components: {
        default: () => import('../views/Library.vue'),
        header: Header,
        footer: Footer,
      }
    },
    {
      path: '/multimedias',
      name: 'multimedia',
      components: {
          default: () => import('../views/Media.vue'),
          header: Header,
          footer: Footer,
        }
    },
    {
      path: '/paroisses',
      name: 'paroisses',
      components: {
        default: () => import('../views/Map.vue'),
        header: Header,
        footer: Footer,
      }
    },
    {
      path: '/calendrier',
      name: 'calendrier',
      components: {
        default: () => import('../views/Calendar.vue'),
        header: Header,
        footer: Footer,
      }
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default: () => import('../views/Login.vue'),
        header: Header,
        footer: Footer,
      }
    },
    {
      path: '/inscription',
      name: 'sign in',
      components: {
        default: () => import('../views/Sign.vue'),
        header: Header,
        footer: Footer,
      }
    },
  ]
})

export default router
