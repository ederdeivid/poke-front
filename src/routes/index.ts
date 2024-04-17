import { Router, createRouter, createWebHashHistory } from 'vue-router';
import PokemonRoute from './PokemonRoute';
import routerGuard from './RouterGuard'

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...PokemonRoute
  ]
})
router.beforeEach((to, from, next) => routerGuard(to, from, next, router));
export default router
