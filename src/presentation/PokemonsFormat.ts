import PokemonEntity from '@/entities/Pokemon';
import { PokemonAbilitiesDAO, PokemonAbilitiesFormatted, PokemonDetailsDAO, PokemonTypesDAO, TypesEnum } from '@/types/PokemonApiRequestTypes';

export default class PokemonsFormat {
  public pokemons: PokemonEntity[];

  constructor () {
    this.pokemons = []
  }

  public execute (pokemons: PokemonDetailsDAO | PokemonDetailsDAO[]): PokemonEntity[] | PokemonEntity {
    if (Array.isArray(pokemons)) return pokemons.map(pokemon => this.formatPokemonsData(pokemon));
    return this.formatPokemonsData(pokemons as PokemonDetailsDAO)
  }

  private formatPokemonsData (pokemon: PokemonDetailsDAO): PokemonEntity {
    return new PokemonEntity(pokemon.id, pokemon.name, this.formatPokemonTypes(pokemon.types), this.formatPokemonAbilities(pokemon.abilities))
  }

  private formatPokemonTypes (types: PokemonTypesDAO[]): TypesEnum[] {
    return types.map(type => (type.type.name)) as TypesEnum[];
  }

  private formatPokemonAbilities (abilities: PokemonAbilitiesDAO[]): PokemonAbilitiesFormatted[] {
    return abilities.map(ability => {
      const [_, id] = ability.ability.url.match(/\/(\d+)\/$/) || [];
      return {
        name: ability.ability.name,
        id: Number(id)
      };
    });
  }
}