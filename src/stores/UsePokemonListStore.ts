import PokemonEntity from '@/entities/Pokemon';
import { defineStore } from 'pinia';

export const usePokemonListStore = defineStore('pokemonList', {
  state: () => ({
    pokemonList: [] as PokemonEntity[]
  }),

  getters: {
    getPokemonList: (state) => state.pokemonList
  },

  actions: {
    addPokemons (pokemons: PokemonEntity[]): void {
      this.pokemonList.push(...pokemons);
    },

    setPokemon (newValue: PokemonEntity[]): void {
      this.pokemonList = newValue;
    }
  }
});
