import QueryString from '@/contracts/QueryString';
import queryString from 'query-string';

export default class QueryStringAdpter implements QueryString {
  stringify (params: Record<string, any>): string {
    return queryString.stringify(params);
  }
}