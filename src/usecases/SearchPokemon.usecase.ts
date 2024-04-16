import PokemonEntity from '@/entities/Pokemon';
import PokemonsFormat from '@/presentation/PokemonsFormat';
import Services from '@/services/Services';
import { ISearchByLimit, PokemonDetailsDAO, PokemonsDAO, PokemonsDAOResult } from '@/types/PokemonApiRequestTypes';

export default class SearchPokemonUseCase {
  private pokemonDetails: PokemonDetailsDAO[] = [];
  private pokemonResult!: Array<{ name: string; id: string; }>;
  private pokemonsFormat: PokemonsFormat = new PokemonsFormat();

  constructor (private services: Services) { }

  public async execute (requestParams: ISearchByLimit): Promise<PokemonEntity[]> {
    const data: PokemonsDAO = await this.services.pokemons.searchByLimit(requestParams);
    this.getPokemonIdByUrl(data.results);
    await this.loopRequest();
    return this.pokemonsFormat.execute(this.pokemonDetails) as PokemonEntity[];
  }

  private async loopRequest (): Promise<void> {
    this.pokemonDetails = await Promise.all(this.pokemonResult.map(pokemon => this.searchPokemonTypes(pokemon)));
  }

  private searchPokemonTypes (pokemon: { name: string; id: string; }): Promise<PokemonDetailsDAO> {
    return this.services.pokemons.searchByNameOrId(pokemon.id);
  }

  private getPokemonIdByUrl (pokemons: PokemonsDAOResult[]): void {
    this.pokemonResult = pokemons.map(pokemon => {
      const [_, id] = pokemon.url.match(/\/(\d+)\/$/) || [];
      return { name: pokemon.name, id };
    });
  }
}