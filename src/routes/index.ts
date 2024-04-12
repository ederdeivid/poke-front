import { createRouter, createWebHistory } from 'vue-router';
import PokemonRoute from './PokemonRoute';

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    PokemonRoute
  ]
})

export default router
