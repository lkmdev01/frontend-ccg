import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'
import NotFound from '../views/NotFound.vue'; // Importando o componente NotFound
import ErrorPage from '../views/ErrorPage.vue'; // Página de erro
import DashInfoView from '../views/DashInfoView.vue'; // Página de erro
import HelloWorld from '../components/HelloWorld.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/colaboracoes',
      name: 'collaboration',
      component: () => import('../views/CollaborationView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'), // Importação dinâmica do LoginView
    },
    { path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView,
    },
    {
      path: '/:pathMatch(.*)*', // Rota para capturar qualquer caminho que não exista
      name: 'NotFound',
      component: NotFound,
    },
    {
      path: '/error',
      component: ErrorPage
    }, // Rota para erro
    {
      path: '/dashboard/info',
      component: DashInfoView
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: HelloWorld
    }
  ],
})

router.onError((error) => {
  console.error('Erro de roteamento:', error);
  // Navegue para a página de erro
  router.push({ path: '/error' });
});

export default router
