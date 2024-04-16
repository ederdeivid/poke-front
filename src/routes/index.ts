import { Router, RouterHistory, createRouter, createWebHistory } from 'vue-router';
import PokemonRoute from './PokemonRoute';
import routerGuard from './RouterGuard'

const routerHistory: RouterHistory = createWebHistory();
const router: Router = createRouter({
  history: routerHistory,
  routes: [
    ...PokemonRoute
  ]
})
router.beforeEach((to, from, next) => routerGuard(to, from, next, router));
export default router
