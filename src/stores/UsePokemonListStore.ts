import PokemonEntity from '@/entities/Pokemon';
import { defineStore } from 'pinia';

export const usePokemonListStore = defineStore('pokemonList', {
  state: () => ({
    pokemonList: [] as PokemonEntity[],
    rows: 0
  }),

  getters: {
    getPokemonList: (state): PokemonEntity[] => state.pokemonList,
    getRowsNumber: (state): number => state.rows
  },

  actions: {
    addPokemons (pokemons: PokemonEntity[]): void {
      this.pokemonList.push(...pokemons);
    },

    setPokemon (newValue: PokemonEntity[]): void {
      this.pokemonList = newValue;
    },

    setRowsNumber (rows: number): void {
      this.rows = rows;
    }
  }
});
