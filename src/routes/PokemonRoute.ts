import { RouteRecordRaw } from 'vue-router';
const Pokemon = () => import('@/views/Pokemons/Index.vue');

const route: RouteRecordRaw = {
  path: '/pokemons',
  component: Pokemon,
  name: 'Pokemons'
};
export default route;
