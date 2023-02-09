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
        default: () => import('../views/frontend/Home.vue'),
        header: Header,
        footer: Footer,
      },
    },
    {
      path: '/cantiques',
      name: 'cantique',
      components: {
        default: () => import('../views/frontend/Cantiques.vue'),
        header: Header,
        footer: Footer,
      },
    },
    {
      path: '/evenement',
      name: 'evenement',
      components: {
        default: () => import('../views/frontend/Event.vue'),
        header: Header,
        footer: Footer,
      }
    },
    {
      path: '/ecc',
      name: 'about-us',
      components: {
        default: () => import('../views/frontend/AboutUs.vue'),
        header: Header,
        footer: Footer,
      }
    },
    {
      path: '/ministry',
      name: 'ministry',
      components: {
        default:() => import('../views/frontend/Ministries.vue'),
        header: Header,
        footer: Footer,
      }
    },
    {
      path: '/contact',
      name: 'contact',
      components: {
        default: () => import('../views/frontend/Contact.vue'),
        header: Header,
        footer: Footer,
      }
    },
    {
      path: '/article',
      name: 'article',
      components: {
        default:() => import('../views/frontend/Article.vue'),
        header: Header,
        footer: Footer,
      }
    },
    {
      path: '/library',
      name: 'library',
      components: {
        default: () => import('../views/frontend/Library.vue'),
        header: Header,
        footer: Footer,
      }
    },
    {
      path: '/multimedias',
      name: 'multimedia',
      components: {
          default: () => import('../views/frontend/Media.vue'),
          header: Header,
          footer: Footer,
        }
    },
    {
      path: '/paroisses',
      name: 'paroisses',
      components: {
        default: () => import('../views/frontend/Map.vue'),
        header: Header,
        footer: Footer,
      }
    },
    {
      path: '/calendrier',
      name: 'calendrier',
      components: {
        default: () => import('../views/frontend/Calendar.vue'),
        header: Header,
        footer: Footer,
      }
    },
    {
      path: '/jobs',
      name: 'jobs',
      components: {
        default: () => import('../views/frontend/Jobs.vue'),
        header: Header,
        footer: Footer,
      }
    },
    {
      path: '/profil',
      name: 'profil',
      components: {
        default: () => import('../views/backend/Profil.vue'),
        header: Header,
        footer: Footer,
      }
    },
    {
      path: '/editprofil',
      name: 'editprofil',
      components: {
        default: () => import('../views/backend/Editprofile.vue'),
        header: Header,
        footer: Footer,
      }
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default: () => import('../views/frontend/Login.vue'),
        header: Header,
        footer: Footer,
      }
    },
    {
      path: '/register',
      name: 'register',
      components: {
        default: () => import('../views/frontend/Register.vue'),
        header: Header,
        footer: Footer,
      }
    },
    {
      path: "/:pathMatch(.*)",
      name: "not.found",
      component: () => import("../views/NotFound.vue"),
  },
    {
      path: '/admin',
      components: {
        default: () => import('../views/backend/ChildrenHome.vue'),
        sidebar: () => import('../components/Sidebar.vue'),
        header: () => import('../components/DashHeader.vue'),
      },
      children: [
        {
          path: "",
          component: () => import("../views/backend/Dashboard.vue"),
          name: "dashboard",
        },
      ]
    },
   
  ]
})

export default router
