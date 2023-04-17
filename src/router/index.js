import { createRouter, createWebHistory } from 'vue-router';
import { useAuthenticateStore } from "@/stores/authenticate";


const Footer = () => import ('@/components/Footer.vue');
const Header = () => import ('@/components/SiteNavigation.vue');
const SITE_NAME = `ECC Church`;
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: "smooth",
        };
    } else if (savedPosition) {
        return savedPosition;
    } else {
        return { top: 0 };
    }
},
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: () => import('@/views/frontend/Home.vue'),
        header: Header,
        footer: Footer,
      },
      meta: {
        title: SITE_NAME + " - Home",
      },
    },
    {
      path: '/cantiques',
      name: 'cantique',
      components: {
        default: () => import('@/views/frontend/Cantiques.vue'),
        header: Header,
        footer: Footer,
      },
      meta: {
        title: SITE_NAME + " - Cantiques",
      },
    },
    {
      path: '/evenement',
      name: 'evenement',
      components: {
        default: () => import('@/views/frontend/Event.vue'),
        header: Header,
        footer: Footer,
      },
      meta: {
        title: SITE_NAME + " - Event",
      },
    },
    {
      path: '/ecc',
      name: 'about-us',
      components: {
        default: () => import('@/views/frontend/AboutUs.vue'),
        header: Header,
        footer: Footer,
      },
      meta: {
        title: SITE_NAME + " - AboutUs",
      },
    },
    {
      path: '/ministry',
      name: 'ministry',
      components: {
        default:() => import('@/views/frontend/Ministries.vue'),
        header: Header,
        footer: Footer,
      },
      meta: {
        title: SITE_NAME + " - Ministries",
      },
    },
    {
      path: '/contact',
      name: 'contact',
      components: {
        default: () => import('@/views/frontend/Contact.vue'),
        header: Header,
        footer: Footer,
      },
      meta: {
        title: SITE_NAME + " - Contact",
      },
    },
    {
      path: '/Messages',
      name: 'messages',
      components: {
        default:() => import('@/views/frontend/Articles.vue'),
        header: Header,
        footer: Footer,
      },
      meta: {
        title: SITE_NAME + " - Messages",
      },
    },
    {
      path: '/annonces',
      name: 'annonces',
      components: {
        default:() => import('@/views/frontend/Annonces.vue'),
        header: Header,
        footer: Footer,
      },
      meta: {
        title: SITE_NAME + " - Annonces",
      },
    },
    {
      path: '/library',
      name: 'library',
      components: {
        default: () => import('@/views/frontend/Library.vue'),
        header: Header,
        footer: Footer,
      },
      meta: {
        title: SITE_NAME + " - Library",
      },
    },
    {
      path: '/formation',
      name: 'formation',
      components: {
        default:() => import('@/views/frontend/Formations.vue'),
        header: Header,
        footer: Footer,
      },
      meta: {
        title: SITE_NAME + " - Formations",
      },
    },
    {
      path: '/multimedias',
      name: 'multimedia',
      components: {
          default: () => import('@/views/frontend/Media.vue'),
          header: Header,
          footer: Footer,
      },
      meta: {
        title: SITE_NAME + " - Multimedia",
      },
    },
    {
      path: '/paroisses',
      name: 'paroisses',
      components: {
        default: () => import('@/views/frontend/Map.vue'),
        header: Header,
        footer: Footer,
      },
      meta: {
        title: SITE_NAME + " - Parish Map",
      },
    },
    {
      path: '/evenements',
      name: 'evenements',
      components: {
        default: () => import('@/views/frontend/Calendar.vue'),
        header: Header,
        footer: Footer,
      },
      meta: {
        title: SITE_NAME + " - Evenements",
      },
    },
    {
      path: '/jobs',
      name: 'jobs',
      components: {
        default: () => import('@/views/frontend/Jobs.vue'),
        header: Header,
        footer: Footer,
      },
      meta: {
        title: SITE_NAME + " - Jobs",
      },
    },
    {
      path: '/profils/fideles',
      name: 'fideles',
      components: {
        default: () => import('@/views/frontend/Fidele.vue'),
        header: Header,
        footer: Footer,
      },
      meta: {
        title: SITE_NAME + " - Fidèles",
      },
    },
    {
      path: '/profils/charge_paroissial',
      name: 'charge_paroissial',
      components: {
        default: () => import('@/views/frontend/ChargePar.vue'),
        header: Header,
        footer: Footer,
      },
      meta: {
        title: SITE_NAME + " - Chargés paroissiaux",
      },
    },
    {
      path: '/profils/GDP',
      name: 'GDP',
      components: {
        default: () => import('@/views/frontend/Gdp.vue'),
        header: Header,
        footer: Footer,
      },
      meta: {
        title: SITE_NAME + " - Groupes de prières",
      },
    },
    {
      path: '/profils/dioceses',
      name: 'dioceses',
      components: {
        default: () => import('@/views/frontend/Diocese.vue'),
        header: Header,
        footer: Footer,
      },
      meta: {
        title: SITE_NAME + " - Diocèses",
      },
    },
    {
      path: '/profils/sieges',
      name: 'sieges',
      components: {
        default: () => import('@/views/frontend/Siege.vue'),
        header: Header,
        footer: Footer,
      },
      meta: {
        title: SITE_NAME + " - Sièges",
      },
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default: () => import('@/views/frontend/Login.vue'),
        header: Header,
        footer: Footer,
      },
      meta: {
        title: SITE_NAME + " - Login",
      },
    },
    {
      path: '/register',
      name: 'register',
      components: {
        default: () => import('@/views/frontend/Register.vue'),
        header: Header,
        footer: Footer,
      },
      meta: {
        title: SITE_NAME + " - Register",
      },
    },
    {
      path: '/profil',
      name: 'profil',
      components: {
        default: () => import('@/views/frontend/Profil.vue'),
        header: Header,
        footer: Footer,
      },
      meta: {
        title: SITE_NAME + " - Profil",
      },
    },
    {
      path: '/editprofil',
      name: 'editprofil',
      components: {
        default: () => import('@/views/frontend/Editprofile.vue'),
        header: Header,
        footer: Footer,
      },
      meta: {
        title: SITE_NAME + " - Edit profil",
      },
    },
    {
      path: "/:pathMatch(.*)",
      name: "not.found",
      component: () => import("@/views/NotFound.vue"),
      meta: {
        title: SITE_NAME + " - Page Introuvable",
      },
    },
    {
      path: '/admin/login',
      name: 'admin.login',
      components: {
        default: () => import('@/views/backend/Login.vue'),
      },
      meta: {
        title: SITE_NAME + " - Login Admin",
      },
    },
    {
      path: '/admin',
      components: {
        default: () => import('@/views/backend/ChildrenHome.vue'),
        sidebar: () => import('@/components/Sidebar.vue'),
       /* header: () => import('@/components/DashHeader.vue'),*/
      },
      meta: {
        title: SITE_NAME,
        requiresAuth: true,
        isAdmin: true,
    },
      children: [
        {
          path: "",
          component: () => import("@/views/backend/Dashboard.vue"),
          name: "admin.dashboard",
          meta: {
            title: SITE_NAME + " - Admin Panel",
          },
        },
        {
          path: "users",
          component: () => import("@/views/backend/user/UserIndex.vue"),
          name: "admin.user.index",
          meta: {
            title: SITE_NAME + " - Admin Panel | Users",
          },
        },
      ]
    },
   
  ]
});

router.beforeEach((to, from, next) => {
  const auth = useAuthenticateStore();
  /*if (to.params.slug) {
      to.params.slug = to.params.slug as string;
      document.title =
          `${to.params.slug[0].toUpperCase()}${to.params.slug
              .replaceAll("-", " ")
              .slice(1)} | ` + siteName;
  } else {
      document.title = to.meta.title;
  }*/

  document.title = to.meta.title;

  if (
      to.meta.isAdmin &&
      to.meta.requiresAuth &&
      (
          !auth.user ||
          auth.user.role.name !=  "Admin" ||
          !auth.tokenUser
      )
  ) {
    console.log(auth.user)
      next({
          name: "admin.login",
          query: {
              errors: "not-login",
          },
      });
  } else if (to.meta.requiresAuth && (!auth.tokenUser || !auth.user)) {
      next({ name: "login" });
  } else {
      next();
  }
});

export default router
