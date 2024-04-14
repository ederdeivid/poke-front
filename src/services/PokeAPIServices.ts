import { ISearchByLimit, PokemonAbilitiesDAO, PokemonDetailsDAO, PokemonsDAO } from '@/types/PokemonApiRequestTypes';
import HttpClient from '@/contracts/HttpClient';
import QueryString from '@/contracts/QueryString';

export default class PokeAPIServices {
  constructor (private readonly httpClient: HttpClient, private readonly baseURL: string, private readonly queryString: QueryString) { }
  public async searchByLimit (searchParams: ISearchByLimit): Promise<PokemonsDAO> {
    const pokemons = await this.httpClient.get<PokemonsDAO>(`${this.baseURL}/pokemon/?${this.queryString.stringify(searchParams)}`);
    return pokemons;
  }

  public async searchByNameOrId (pokemonNameOrId: string | number): Promise<PokemonDetailsDAO> {
    const pokemon = await this.httpClient.get <PokemonDetailsDAO>(`${this.baseURL}/pokemon/${pokemonNameOrId}`);
    return pokemon;
  }

  public async searchBySkillId (skillId: number): Promise<PokemonAbilitiesDAO> {
    const pokemon = await this.httpClient.get<PokemonAbilitiesDAO>(`${this.baseURL}/pokemon/${skillId}`);
    return pokemon;
  }
}