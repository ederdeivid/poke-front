import HttpClient from '@/contracts/HttpClient';
import BaseService from './BaseService';
import PokeAPIServices from './PokeAPIServices';
import QueryString from '@/contracts/QueryString';

export default class Services extends BaseService {
  public pokemons: PokeAPIServices;
  constructor (protected readonly httpClient: HttpClient, protected readonly baseURL: string, protected readonly queryString: QueryString) {
    super(httpClient, baseURL, queryString);
    this.pokemons = new PokeAPIServices(this.httpClient, this.baseURL, this.queryString);
  }
}