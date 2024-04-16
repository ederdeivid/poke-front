import PokemonEntity from '@/entities/Pokemon';
import PokemonsFormat from '@/presentation/PokemonsFormat';
import Services from '@/services/Services';
import { PokemonDetailsDAO } from '@/types/PokemonApiRequestTypes';

export default class SearchPokemonByNameUseCase {
  private pokemonDetails!: PokemonDetailsDAO;
  private pokemonsFormat: PokemonsFormat = new PokemonsFormat();

  constructor (private services: Services) { }

  public async execute (pokemonNameOrId: string | number): Promise<PokemonEntity> {
    const data: PokemonDetailsDAO = await this.services.pokemons.searchByNameOrId(pokemonNameOrId);
    this.pokemonDetails = data || {};
    return this.pokemonsFormat.execute(this.pokemonDetails) as PokemonEntity;
  }
}