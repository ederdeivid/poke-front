import { RouteRecordRaw } from 'vue-router';
const Pokemon = () => import('@/views/Pokemons/Index.vue');

const route: RouteRecordRaw = {
  path: '/pokemon/:nameOrId/',
  component: Pokemon,
  name: 'Pokemon'
};
export default route;
