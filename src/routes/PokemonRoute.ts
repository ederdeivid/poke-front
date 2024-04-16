import { RouteRecordRaw } from 'vue-router';
const Pokemon = () => import('@/views/Pokemons/Index.vue');
const PokemonDetails = () => import('@/views/Pokemons/PokemonDetails.vue');

const route: RouteRecordRaw[] = [
  {
    path: '/pokemons/',
    component: Pokemon,
    name: 'Pokemons',
  },
  {
    path: '/pokemons/details/:idOrName',
    component: PokemonDetails,
    name: 'Details'
  }
];
export default route;
