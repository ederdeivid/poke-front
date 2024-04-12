import { ISearchByLimit } from '@/types/PokemonApiRequestTypes';
import BaseService from './BaseService';

export default class PokeAPIServices extends BaseService {
  public async searchByLimit (searchParams: ISearchByLimit): Promise<any> {
    const pokemons = await this.httpClient.get(`${this.baseURL}/pokemon/?${this.queryString.stringify(searchParams)}`);
    return pokemons;
  }

  public async searchByNameOrId (pokemonNameOrId: string | number): Promise<any> {
    const pokemon = await this.httpClient.get(`${this.baseURL}/pokemon/${pokemonNameOrId}`);
    return pokemon;
  }
}