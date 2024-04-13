import { ISearchByLimit } from '@/types/PokemonApiRequestTypes';
import HttpClient from '@/contracts/HttpClient';
import QueryString from '@/contracts/QueryString';

export default class PokeAPIServices {
  constructor (private readonly httpClient: HttpClient, private readonly baseURL: string, private readonly queryString: QueryString) {}
  public async searchByLimit (searchParams: ISearchByLimit): Promise<any> {
    const pokemons = await this.httpClient.get(`${this.baseURL}/pokemon/?${this.queryString.stringify(searchParams)}`);
    return pokemons;
  }

  public async searchByNameOrId (pokemonNameOrId: string | number): Promise<any> {
    const pokemon = await this.httpClient.get(`${this.baseURL}/pokemon/${pokemonNameOrId}`);
    return pokemon;
  }
}