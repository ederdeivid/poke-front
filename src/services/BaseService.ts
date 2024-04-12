import HttpClient from '@/contracts/HttpClient';
import QueryString from '@/contracts/QueryString';

export default class BaseService {
  constructor (protected readonly httpClient: HttpClient, protected readonly baseURL: string, protected readonly queryString: QueryString) {}
}