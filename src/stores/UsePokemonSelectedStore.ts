import { PokemonDetailsFormatted, PokemonsFormatted } from '@/types/PokemonApiRequestTypes';

export default class UsePokemonSelectedStore {
  private static pokemon: PokemonDetailsFormatted | PokemonsFormatted | null = null;

  public static addPokemon (pokemonData: PokemonsFormatted | PokemonDetailsFormatted): void {
    this.pokemon = pokemonData
  }

  public static getPokemon (): PokemonDetailsFormatted | PokemonsFormatted {
    return this.pokemon as PokemonDetailsFormatted | PokemonsFormatted
  }

  public static removePokemon (): void {
    this.pokemon = null
  }
}